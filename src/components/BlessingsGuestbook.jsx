import React, { useState, useEffect } from 'react';
import { Send, Sparkles, HeartHandshake, Quote } from 'lucide-react';

const INITIAL_BLESSINGS = [
  {
    id: 1,
    name: 'Suresh Uncle & Sunita Aunty',
    relation: 'Family Elders',
    message: 'May Lord Surya, Gayatri Mata and Shree Kuldevi Mata endow dear Veer with divine intellect, noble character, and radiant health!',
    time: '2 hours ago'
  },
  {
    id: 2,
    name: 'Manoj Joshi & Parivar',
    relation: 'Mama - Mami',
    message: 'Heartiest congratulations to Rajbhai, Komalbhabhi, and the entire Desai family on this sacred milestone. Veer beta, may you always walk on the path of Dharma!',
    time: '5 hours ago'
  },
  {
    id: 3,
    name: 'Dr. Ashok & Meera Mehta',
    relation: 'Well Wishers',
    message: 'May Chi. Veer shine brightly on this sacred journey of Yagnopavitra Sanskar. Sending our heartfelt blessings to the entire family.',
    time: 'Yesterday'
  }
];

export default function BlessingsGuestbook({ onBurstPetals }) {
  const [blessings, setBlessings] = useState(() => {
    try {
      const saved = localStorage.getItem('veer_desai_blessings');
      return saved ? JSON.parse(saved) : INITIAL_BLESSINGS;
    } catch {
      return INITIAL_BLESSINGS;
    }
  });

  const [name, setName] = useState('');
  const [relation, setRelation] = useState('Family Friend');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('veer_desai_blessings', JSON.stringify(blessings));
    } catch {
      // Ignored
    }
  }, [blessings]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newBlessing = {
      id: Date.now(),
      name: name.trim(),
      relation: relation,
      message: message.trim(),
      time: 'Just now'
    };

    setBlessings([newBlessing, ...blessings]);
    setName('');
    setMessage('');
    setSubmitted(true);

    if (onBurstPetals) onBurstPetals();

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="blessings" className="blessings-section">
      <div className="section-title-wrap">
        <span className="section-icon">📜</span>
        <h2 className="section-title">Blessings for Chi. Veer</h2>
        <div className="section-subtitle">
          आशीर्वाद संदेश • Shower Your Heartfelt Wishes
        </div>
      </div>

      <div className="blessings-container-grid">
        {/* Left: Input Form */}
        <div className="blessing-form-card">
          <div className="form-card-header">
            <Sparkles size={20} className="sparkle-gold" />
            <h3>Pen Your Sacred Blessings</h3>
          </div>
          <p className="form-note">
            Your heartfelt words will be preserved as a golden keepsake for Veer's lifelong journey.
          </p>

          <form onSubmit={handleSubmit} className="blessing-form">
            <div className="form-field">
              <label htmlFor="blessing-name">Your Full Name / Parivar *</label>
              <input
                id="blessing-name"
                type="text"
                placeholder="e.g. Ramesh Patel & Family"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="blessing-relation">Relation / Well-Wisher</label>
              <select
                id="blessing-relation"
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
              >
                <option value="Family Elder">Family Elder (दादा / दादी / बड़े बुजुर्ग)</option>
                <option value="Chacha - Chachi">Chacha - Chachi (चाचा - चाची)</option>
                <option value="Mama - Mami">Mama - Mami (मामा - मामी)</option>
                <option value="Bua - Fufa">Bua - Fufa (बुआ - फूफा)</option>
                <option value="Masi - Masa">Masi - Masa (मौसी - मौसा)</option>
                <option value="Brother / Sister / Cousin">Sibling / Cousin (भाई / बहन)</option>
                <option value="Dear Friend">Dear Friend (मित्र)</option>
                <option value="Well Wisher">Well Wisher (शुभचिंतक)</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="blessing-msg">Your Blessing / Ashirwad *</label>
              <textarea
                id="blessing-msg"
                rows={4}
                placeholder="Write your pious blessings, shloka, or warm wishes for young Veer..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="submit-blessing-btn">
              <Send size={18} />
              <span>Send Blessings to Chi. Veer</span>
            </button>

            {submitted && (
              <div className="blessing-success-msg">
                ✨ Thank you! Your warm blessings have reached the Desai family!
              </div>
            )}
          </form>
        </div>

        {/* Right: Guestbook Feed */}
        <div className="blessings-feed-column">
          <div className="feed-header-pill">
            <HeartHandshake size={18} />
            <span>Cherished Ashirwad Feed ({blessings.length})</span>
          </div>

          <div className="blessings-scroll-list">
            {blessings.map((b) => (
              <div key={b.id} className="blessing-display-card">
                <div className="card-quote-icon">
                  <Quote size={20} />
                </div>
                <p className="blessing-text-body">"{b.message}"</p>
                <div className="blessing-meta-row">
                  <div className="author-details">
                    <span className="author-name">{b.name}</span>
                    <span className="author-relation">• {b.relation}</span>
                  </div>
                  <span className="blessing-time">{b.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
