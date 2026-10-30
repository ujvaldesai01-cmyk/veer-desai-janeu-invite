import React, { useState } from 'react';
import { Copy, Check, Share2 } from 'lucide-react';

export default function ShareRSVPModal({ onBurstPetals }) {
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://veer-desai-janeu.vercel.app';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      if (onBurstPetals) onBurstPetals();
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "👑 Royal Invitation: Yagnopavitra Sanskar of Chi. Veer Desai",
          text: "With the immense blessings of Shree Kuldevi Mata, A. Sau. Komal Raj Desai's beloved son Chi. Veer cordially invites you to his Yagnopavitra Sanskar on Wednesday, 30th December 2026. Tap to view the invitation:",
          url: currentUrl
        });
      } catch {
        // User cancelled or unsupported
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <section id="share" className="rsvp-section">
      <div className="section-title-wrap">
        <span className="section-icon">💌</span>
        <h2 className="section-title">Share Royal Invitation</h2>
        <div className="section-subtitle">
          निमंत्रण साझा करें • Share with Family & Loved Ones
        </div>
      </div>

      <div style={{ maxWidth: '750px', margin: '0 auto' }}>
        {/* Share Invite with Relatives Card */}
        <div className="share-invite-card" style={{ textAlign: 'center', padding: '36px 28px' }}>
          <div className="card-ornament">⚜️</div>
          <h3 className="rsvp-card-title" style={{ fontSize: '1.6rem', color: '#fff' }}>
            Forward to Family & Relatives
          </h3>
          <p className="rsvp-card-sub" style={{ fontSize: '1rem', color: '#fef08a', maxWidth: '580px', margin: '12px auto 24px' }}>
            Forward this sacred digital invitation link to your family members and well-wishers across the globe.
          </p>

          <div className="share-actions-row" style={{ justifyContent: 'center', gap: '16px' }}>
            <button onClick={handleNativeShare} className="share-native-btn">
              <Share2 size={18} />
              <span>Share on WhatsApp & Social</span>
            </button>

            <button onClick={handleCopyLink} className="copy-link-btn">
              {copied ? <Check size={18} /> : <Copy size={18} />}
              <span>{copied ? 'Link Copied! ✨' : 'Copy Invite Link'}</span>
            </button>
          </div>

          <div className="invite-link-preview-box" style={{ maxWidth: '500px', margin: '20px auto 0' }}>
            <span className="link-text">{currentUrl}</span>
          </div>
        </div>
      </div>

      {/* Royal Footer Benediction */}
      <footer className="royal-page-footer" style={{ marginTop: '50px' }}>
        <div className="footer-shloka-box">
          <p className="footer-sanskrit">
            "ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः ।<br />
            सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥"
          </p>
          <p className="footer-meaning">
            May all beings be happy, may all be free from illness.
            May all behold what is auspicious, may no one suffer sorrow.
          </p>
        </div>

        <div className="footer-credits" style={{ marginTop: '24px' }}>
          <p style={{ fontSize: '1.1rem', color: '#fef08a' }}>
            With warm regards,
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', margin: '12px 0' }}>
            <div>
              <strong>Raj Hareshbhai Desai</strong> & <strong>Komal Raj Desai</strong>
            </div>
            <span style={{ color: '#d4af37' }}>|</span>
            <div>
              <strong>Hareshbhai Desai</strong> & <strong>Daxaben Hareshbhai Desai</strong>
            </div>
          </div>
          <p className="footer-small" style={{ marginTop: '12px', color: '#cbd5e1' }}>
            Yagnopavitra Sanskar of <strong>Chi. Veer</strong> • Wednesday, 30th December 2026
          </p>
        </div>
      </footer>
    </section>
  );
}
