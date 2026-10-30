import React from 'react';
import { Heart } from 'lucide-react';

export default function FamilyTree() {
  return (
    <section id="family" className="family-section">
      <div className="section-title-wrap">
        <span className="section-icon">🪷</span>
        <h2 className="section-title">With Warm Regards</h2>
        <div className="section-subtitle">
          देसाई परिवार • Cordial Hosts & Family
        </div>
      </div>

      <div className="family-cards-container">
        {/* Sanskrit hospitality quote banner */}
        <div className="hospitality-quote-box">
          <span className="gold-flower-icon">⚜️</span>
          <div className="hospitality-text">
            <span className="sanskrit-bold">"अतिथि देवो भव"</span>
            <span className="english-sub">
              Your gracious presence will make this occasion even more meaningful
            </span>
          </div>
          <span className="gold-flower-icon">⚜️</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '850px',
          margin: '20px auto'
        }}>
          {/* Parents Tier */}
          <div className="family-tier-card" style={{
            background: 'linear-gradient(135deg, rgba(50, 15, 25, 0.85), rgba(30, 8, 16, 0.9))',
            border: '1.5px solid rgba(212, 175, 55, 0.5)',
            borderRadius: '14px',
            padding: '24px 20px',
            textAlign: 'center'
          }}>
            <div className="tier-header" style={{ marginBottom: '14px' }}>
              <span className="tier-badge" style={{
                background: 'rgba(212, 175, 55, 0.2)',
                color: '#fde047',
                padding: '4px 14px',
                borderRadius: '16px',
                fontSize: '0.85rem',
                fontWeight: 600
              }}>
                Affectionate Parents • स्नेहभाजन माता-पिता
              </span>
            </div>
            <div className="tier-names">
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: '8px 0 4px', fontFamily: 'serif' }}>
                Raj Hareshbhai Desai
              </h3>
              <h3 style={{ fontSize: '1.35rem', color: '#fef08a', margin: '4px 0 12px', fontFamily: 'serif' }}>
                Komal Raj Desai
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#f3e8ff', margin: 0, fontStyle: 'italic' }}>
                Beloved parents of Chi. Veer
              </p>
            </div>
          </div>

          {/* Grandparents Tier */}
          <div className="family-tier-card" style={{
            background: 'linear-gradient(135deg, rgba(50, 15, 25, 0.85), rgba(30, 8, 16, 0.9))',
            border: '1.5px solid rgba(212, 175, 55, 0.5)',
            borderRadius: '14px',
            padding: '24px 20px',
            textAlign: 'center'
          }}>
            <div className="tier-header" style={{ marginBottom: '14px' }}>
              <span className="tier-badge" style={{
                background: 'rgba(212, 175, 55, 0.2)',
                color: '#fde047',
                padding: '4px 14px',
                borderRadius: '16px',
                fontSize: '0.85rem',
                fontWeight: 600
              }}>
                Revered Grandparents • आदरणीय दादा-दादी
              </span>
            </div>
            <div className="tier-names">
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: '8px 0 4px', fontFamily: 'serif' }}>
                Hareshbhai Desai
              </h3>
              <h3 style={{ fontSize: '1.35rem', color: '#fef08a', margin: '4px 0 12px', fontFamily: 'serif' }}>
                Daxaben Hareshbhai Desai
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#f3e8ff', margin: 0, fontStyle: 'italic' }}>
                Blessing young Veer with love & guidance
              </p>
            </div>
          </div>
        </div>

        {/* Heartfelt Quote from Invitation Card */}
        <div className="gift-note-card" style={{ maxWidth: '850px', margin: '20px auto' }}>
          <Heart size={20} className="heart-icon" />
          <p className="gift-note-text" style={{ fontSize: '0.98rem', lineHeight: '1.6' }}>
            "Your presence will make this occasion even more meaningful, and your blessings will be a source of strength and inspiration for Veer as he embarks on this new journey in life."
          </p>
        </div>
      </div>
    </section>
  );
}
