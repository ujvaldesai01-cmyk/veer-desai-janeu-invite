import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Share2 } from 'lucide-react';

export default function InviteHero({ eventDate, onShareInvite }) {
  return (
    <section className="royal-hero-section">
      <div className="royal-card-container">
        {/* Golden Ornate Corner Accents */}
        <div className="gold-corner corner-top-left" />
        <div className="gold-corner corner-top-right" />
        <div className="gold-corner corner-bottom-left" />
        <div className="gold-corner corner-bottom-right" />

        {/* Auspicious Vedic Invocation */}
        <div className="vedic-invocation">
          <div className="shloka-header-row">
            <span className="shloka-diya">🪔</span>
            <span className="deva-title">|| Shree Ganeshay Namah ||</span>
            <span className="shloka-diya">🪔</span>
          </div>
          <div className="shloka-sub-title" style={{ fontSize: '1.05rem', color: '#f59e0b', marginTop: '6px' }}>
            With the immense blessings of Shree Kuldevi Mata,
          </div>
          <div style={{ fontSize: '1.1rem', color: '#fef08a', marginTop: '4px', fontStyle: 'italic', fontFamily: 'serif' }}>
            A. Sau. Komal Raj Desai's beloved son
          </div>
        </div>

        {/* Central Royal Invitation Body */}
        <div className="invitation-core">
          {/* Veer Desai's Grand Regal Name Crest */}
          <div className="royal-name-crest" style={{ marginTop: '10px' }}>
            <div className="crest-aura" />
            <div className="crest-thread-icon">
              <svg viewBox="0 0 100 100" className="sacred-thread-svg">
                <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M25,50 C25,20 75,20 75,50 C75,80 25,80 25,50 Z" fill="none" stroke="#d4af37" strokeWidth="2.5" />
                <path d="M30,50 C30,28 70,28 70,50 C70,72 30,72 30,50 Z" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
                <path d="M35,50 C35,36 65,36 65,50 C65,64 35,64 35,50 Z" fill="none" stroke="#fbbf24" strokeWidth="1" />
                <circle cx="50" cy="35" r="4.5" fill="#d4af37" />
              </svg>
            </div>
            
            <h1 className="boy-regal-name" style={{ margin: '8px 0' }}>
              <span className="name-veer" style={{ fontStyle: 'italic', fontFamily: 'Cinzel, serif' }}>Chi. Veer</span>
            </h1>

            <p className="cordial-text" style={{ margin: '10px 0 6px', fontSize: '1.05rem', color: '#f3e8ff' }}>
              cordially invites you to the auspicious occasion of his
            </p>

            <div className="sacred-milestone-pill" style={{ padding: '8px 24px', margin: '8px auto' }}>
              <span style={{ fontSize: '1.3rem', letterSpacing: '2px', fontWeight: 'bold' }}>
                YAGNOPAVITRA SANSKAR
              </span>
            </div>

            <div style={{ marginTop: '10px', fontSize: '1rem', color: '#fbbf24', fontWeight: 600 }}>
              Vikram Samvat : 2082 (tentative)
            </div>
            <div style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 700, marginTop: '4px' }}>
              Date : Wednesday, 30th December 2026
            </div>
          </div>

          {/* Heartfelt Quote from Invitation Card */}
          <div className="sacred-shloka-box" style={{ maxWidth: '750px', margin: '24px auto', background: 'rgba(40, 10, 15, 0.65)', border: '1px solid rgba(212, 175, 55, 0.4)', borderRadius: '12px', padding: '18px 24px' }}>
            <p className="sanskrit-verse" style={{ fontSize: '1.05rem', lineHeight: '1.7', fontStyle: 'italic', color: '#fef08a' }}>
              “The Sanskar of Yagnopavitra is a sacred step in our son's journey, marking his entry into a new phase of life filled with Dharma, Knowledge and Responsibilities. It is a moment of great joy for our family, and we would be truly blessed to have you with us as we celebrate this special occasion.”
            </p>
            <div style={{ width: '60px', height: '1px', background: '#d4af37', margin: '12px auto' }} />
            <p className="sanskrit-meaning" style={{ fontSize: '0.98rem', color: '#fde68a', lineHeight: '1.6' }}>
              “Your presence will make this occasion even more meaningful, and your blessings will be a source of strength and inspiration for Veer as he embarks on this new journey in life.”
            </p>
          </div>

          {/* Auspicious Muhurat Highlight Banner */}
          <div className="auspicious-muhurat-grid">
            <div className="muhurat-item">
              <div className="item-icon-circle">
                <Calendar size={22} />
              </div>
              <div className="item-details">
                <span className="item-label">AUSPICIOUS DATE</span>
                <span className="item-val">Wednesday, 30th Dec 2026</span>
                <span className="item-sub">Vikram Samvat : 2082 (tentative)</span>
              </div>
            </div>

            <div className="muhurat-divider" />

            <div className="muhurat-item">
              <div className="item-icon-circle">
                <Clock size={22} />
              </div>
              <div className="item-details">
                <span className="item-label">JANOI SANSKAR MUHURAT</span>
                <span className="item-val">12:15 PM</span>
                <span className="item-sub">Abhijeet Murat • शुभ मुहूर्त</span>
              </div>
            </div>

            <div className="muhurat-divider" />

            <div className="muhurat-item">
              <div className="item-icon-circle">
                <MapPin size={22} />
              </div>
              <div className="item-details">
                <span className="item-label">VENUE</span>
                <span className="item-val">Venue Details</span>
                <span className="item-sub">(Venue name and full address to be added)</span>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons (RSVP removed) */}
          <div className="hero-cta-group">
            <a href="#programme" className="cta-btn primary-gold-btn">
              <Sparkles size={18} />
              <span>View Programme Details</span>
            </a>
            
            {onShareInvite && (
              <button onClick={onShareInvite} className="cta-btn secondary-maroon-btn">
                <Share2 size={18} />
                <span>Share Invitation</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
