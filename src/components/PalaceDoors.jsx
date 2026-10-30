import React, { useState } from 'react';

export default function PalaceDoors({ onOpen, isOpen, onBurstPetals }) {
  const [animating, setAnimating] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const handleOpenGate = () => {
    if (animating || isOpen) return;
    setAnimating(true);
    setUnlocked(true);

    if (onBurstPetals) onBurstPetals();

    // Trigger door opening sequence
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className={`palace-gate-overlay ${isOpen ? 'gate-opened' : ''}`}>
      {/* Background Court Atmosphere */}
      <div className="gate-backdrop" />

      {/* Royal Sandstone Archway & Pillars */}
      <div className="royal-arch-frame">
        {/* Top Toran with Fresh Marigold Flowers */}
        <div className="marigold-toran">
          <div className="toran-garland">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} className="marigold-flower" style={{ animationDelay: `${i * 0.1}s` }}>
                🌼
              </span>
            ))}
          </div>
          <div className="toran-mango-leaves">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="mango-leaf">🍃</span>
            ))}
          </div>
        </div>

        {/* Hanging Royal Diya Lamps */}
        <div className="hanging-diya left-diya">
          <div className="diya-chain" />
          <div className="diya-lamp">
            <div className="diya-flame" />
            <div className="diya-glow" />
          </div>
        </div>

        <div className="hanging-diya right-diya">
          <div className="diya-chain" />
          <div className="diya-lamp">
            <div className="diya-flame" />
            <div className="diya-glow" />
          </div>
        </div>

        {/* 3D Palace Doors Portal */}
        <div className="doors-3d-viewport">
          {/* Royal Silk Velvet Curtains behind the doors */}
          <div className={`royal-curtains ${animating ? 'curtains-part' : ''}`}>
            <div className="curtain curtain-left" />
            <div className="curtain curtain-right" />
            <div className="inner-mahal-peek">
              <div className="golden-light-burst" />
            </div>
          </div>

          {/* Left Door Leaf */}
          <div className={`door-leaf door-left ${animating ? 'door-open-left' : ''}`}>
            <div className="door-panel-texture">
              <div className="door-ornate-carvings">
                <div className="brass-medallion top-medallion" />
                <div className="door-lion-knocker">
                  <div className="lion-head" />
                  <div className="brass-ring" />
                </div>
                <div className="brass-medallion bottom-medallion" />
                <div className="gold-stud-grid">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="gold-stud" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Door Leaf */}
          <div className={`door-leaf door-right ${animating ? 'door-open-right' : ''}`}>
            <div className="door-panel-texture">
              <div className="door-ornate-carvings">
                <div className="brass-medallion top-medallion" />
                <div className="door-lion-knocker">
                  <div className="lion-head" />
                  <div className="brass-ring" />
                </div>
                <div className="brass-medallion bottom-medallion" />
                <div className="gold-stud-grid">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="gold-stud" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Center Royal Seal & Call to Action (Disappears when doors swing open) */}
          <div className={`gate-center-seal-wrapper ${animating ? 'seal-fade-out' : ''}`}>
            <div className="royal-crest-plaque">
              <div className="crest-top-shloka">|| Shree Ganeshay Namah ||</div>
              <div className="crest-om-symbol">ॐ</div>
              <div className="crest-sub-heading" style={{ letterSpacing: '2px', fontSize: '0.85rem' }}>
                With the immense blessings of Shree Kuldevi Mata
              </div>
              <p style={{ margin: '6px 0 2px', fontSize: '0.95rem', color: '#fef08a' }}>
                A. Sau. Komal Raj Desai's beloved son
              </p>
              <h1 className="crest-boy-name" style={{ fontSize: '2.5rem', margin: '4px 0' }}>
                Chi. Veer
              </h1>
              <div className="crest-title" style={{ fontSize: '1.25rem', letterSpacing: '3px', color: '#fde047' }}>
                YAGNOPAVITRA SANSKAR
              </div>
              <p className="crest-desc" style={{ marginTop: '10px' }}>
                Wednesday, 30th December 2026 • Vikram Samvat : 2082 (tentative)
              </p>

              <button
                id="open-palace-doors-btn"
                className="royal-enter-button"
                onClick={handleOpenGate}
                aria-label="Open the royal palace doors"
              >
                <span className="btn-sparkle">✨</span>
                <span className="btn-text">द्वार खोलें • ENTER CELEBRATION</span>
                <span className="btn-sparkle">✨</span>
              </button>

              <div className="tap-hint">
                <span>✨ Tap to open the palace doors & view the sacred invitation ✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
