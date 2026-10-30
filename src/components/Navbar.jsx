import React from 'react';
import { Sparkles, Share2, RotateCcw } from 'lucide-react';

export default function Navbar({
  onShowerPetals,
  onResetGate,
  onShareInvite
}) {
  return (
    <header className="royal-header-navbar">
      <div className="navbar-container">
        {/* Left: Royal Crest & Title */}
        <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="brand-om">ॐ</span>
          <div className="brand-text">
            <span className="brand-family">YAGNOPAVITRA SANSKAR</span>
            <span className="brand-sub">Chi. Veer Desai</span>
          </div>
        </div>

        {/* Center: Quick navigation links */}
        <nav className="nav-links">
          <a href="#programme" className="nav-link">Programme</a>
          <a href="#venue" className="nav-link">Venue</a>
          <a href="#family" className="nav-link">Family</a>
          <a href="#blessings" className="nav-link">Blessings</a>
        </nav>

        {/* Right: Interactive controls */}
        <div className="nav-actions">
          {/* Petal Shower Button */}
          <button
            className="action-pill-btn petal-btn"
            onClick={onShowerPetals}
            title="Shower flower petals"
          >
            <Sparkles size={16} />
            <span className="btn-label-desktop">Pushpa Vrishti</span>
          </button>

          {/* Share Button */}
          <button
            className="action-pill-btn share-btn"
            onClick={onShareInvite}
            title="Share invitation with relatives"
          >
            <Share2 size={16} />
            <span className="btn-label-desktop">Share</span>
          </button>

          {/* Relive Gate Opening */}
          <button
            className="action-pill-btn reset-btn"
            onClick={onResetGate}
            title="Replay Gate Opening Animation"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
