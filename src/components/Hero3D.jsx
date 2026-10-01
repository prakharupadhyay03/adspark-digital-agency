import React, { useState, useEffect, useRef } from 'react';

export default function Hero3D() {
  const frameRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 2, y: -4 });
  const [isHovered, setIsHovered] = useState(false);

  // Initialize state directly to avoid cascading render warnings
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  const [isFloatingMobile, setIsFloatingMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    const isMob = window.innerWidth < 768;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return isMob && !reducedMotion;
  });

  const touchStartRef = useRef(null);
  const isInteractingTouchRef = useRef(false);
  const gyroActiveRef = useRef(false);
  const mobileRef = useRef(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      mobileRef.current = mobile;
      setIsMobile(mobile);
      if (mobile && !motionQuery.matches && !gyroActiveRef.current && !isInteractingTouchRef.current) {
        setIsFloatingMobile(true);
      } else if (!mobile || motionQuery.matches) {
        setIsFloatingMobile(false);
      }
    };

    const handleMotionChange = (e) => {
      if (e.matches) {
        setIsFloatingMobile(false);
      } else if (mobileRef.current) {
        setIsFloatingMobile(true);
      }
    };

    window.addEventListener('resize', handleResize);
    motionQuery.addEventListener('change', handleMotionChange);

    // Optional subtle device orientation (gyroscope) for mobile
    const handleOrientation = (e) => {
      if (!mobileRef.current || isInteractingTouchRef.current) return;
      if (motionQuery.matches) return;

      const { beta, gamma } = e; // beta: front-to-back [-180, 180], gamma: left-to-right [-90, 90]
      if (gamma === null || beta === null) return;

      gyroActiveRef.current = true;
      setIsFloatingMobile(false);

      // Subtle mapping: clamp rotation to gentle ±2.5deg
      const rotY = Math.max(-2.5, Math.min(2.5, (gamma / 12) * 1.5));
      const rotX = Math.max(-2, Math.min(2, ((beta - 45) / 15) * 1.5));

      if (frameRef.current) {
        frameRef.current.style.transition = 'transform 180ms ease-out';
        frameRef.current.style.transform = `perspective(800px) translate3d(0, 0, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }
    };

    if (window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent.requestPermission !== 'function') {
      window.addEventListener('deviceorientation', handleOrientation, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  // Desktop Mouse Move Handler — PRESERVED EXACTLY
  const handleMouseMove = (e) => {
    if (isMobile) return;
    if (!frameRef.current) return;

    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle tilt: max ~8 degrees horizontally, ~6 degrees vertically
    const rotateY = (x / (rect.width / 2)) * 8;
    const rotateX = -(y / (rect.height / 2)) * 6;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
      // Smooth return to subtle resting position on desktop
      setRotate({ x: 2, y: -4 });
    }
  };

  // Mobile Touch Interaction Handlers (Passive, never blocks page scrolling)
  const handleTouchStart = (e) => {
    if (!isMobile || e.touches.length !== 1) return;
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    isInteractingTouchRef.current = true;
    setIsFloatingMobile(false);
  };

  const handleTouchMove = (e) => {
    if (!isMobile || !touchStartRef.current || !frameRef.current) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;

    // Subtle responsive tilt capped at ±3deg
    const rotY = Math.max(-3, Math.min(3, deltaX / 25));
    const rotX = Math.max(-2.5, Math.min(2.5, -deltaY / 25));

    frameRef.current.style.transition = 'transform 80ms ease-out';
    frameRef.current.style.transform = `perspective(800px) translate3d(0, 0, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };

  const handleTouchEnd = () => {
    if (!isMobile || !frameRef.current) return;
    isInteractingTouchRef.current = false;
    touchStartRef.current = null;

    // Smooth return to normal, then resume floating loop
    frameRef.current.style.transition = 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1)';
    frameRef.current.style.transform = '';

    setTimeout(() => {
      if (!isInteractingTouchRef.current && !gyroActiveRef.current) {
        setIsFloatingMobile(true);
      }
    }, 450);
  };

  // Compute inline style: on desktop use state rotation, on mobile let CSS keyframes handle smooth float
  const frameStyle = !isMobile
    ? {
        transform: `perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: isHovered ? 'transform 100ms ease-out' : 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
      }
    : undefined;

  return (
    <div 
      className="hero-3d-stage"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      <div 
        ref={frameRef}
        className={`hero-3d-monolith-frame ${isFloatingMobile ? 'mobile-floating' : ''}`}
        style={frameStyle}
      >
        {/* Subtle physical depth edge effect */}
        <div className="monolith-depth-edge" />

        {/* Main 3D Poster Canvas */}
        <div className="monolith-card-surface">
          {/* Header Row */}
          <div className="poster-meta-top">
            <span className="poster-serial">ADSPARK • 01</span>
            <span className="poster-tag">CAMPAIGN DIRECTION</span>
          </div>

          {/* Central Campaign Artwork Image */}
          <div className="poster-image-viewport">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80" 
              alt="Editorial Advertising Campaign Art Direction"
              className="poster-artwork-img"
              loading="eager"
            />
            <div className="poster-artwork-overlay">
              <span className="artwork-title-sub">THE ARCHITECTURE OF DESIRE</span>
            </div>
          </div>

          {/* Bottom Editorial Content */}
          <div className="poster-content-bottom">
            <div className="poster-brand-row">
              <span className="poster-wordmark">ADSPARK</span>
              <span className="poster-year">EST. 2026</span>
            </div>
            <p className="poster-caption">
              Strategic brand architecture, concept development, and cultural media buying.
            </p>
          </div>
        </div>

        {/* Floating Terracotta Accent Corner Tag */}
        <div className="monolith-accent-tag">
          <span>VOL. 26</span>
        </div>
      </div>
    </div>
  );
}
