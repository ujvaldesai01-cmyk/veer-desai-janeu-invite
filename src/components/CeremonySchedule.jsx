import React from 'react';
import { Sparkles, Sun, Flame, Award, HeartHandshake, Utensils, Calendar } from 'lucide-react';

export default function CeremonySchedule() {
  return (
    <section id="programme" className="ceremony-schedule-section">
      <div className="section-title-wrap">
        <span className="section-icon">🪷</span>
        <h2 className="section-title">Programme Details</h2>
        <div className="section-subtitle">
          शुभ यज्ञोपवीत संस्कार कार्यक्रम • Auspicious Timeline
        </div>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* DAY 1: Monday, 29th December 2026 */}
        <div className="programme-day-card" style={{
          background: 'linear-gradient(135deg, rgba(50, 15, 25, 0.9), rgba(28, 8, 16, 0.95))',
          border: '1px solid rgba(212, 175, 55, 0.45)',
          borderRadius: '16px',
          padding: '24px 28px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          position: 'relative'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(90deg, #d4af37, #f59e0b)',
            color: '#2a070e',
            fontWeight: 700,
            padding: '6px 18px',
            borderRadius: '24px',
            fontSize: '1rem',
            marginBottom: '18px',
            letterSpacing: '0.5px'
          }}>
            <Calendar size={18} />
            <span>Monday, 29th December 2026</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.2)', padding: '10px', borderRadius: '50%', color: '#fbbf24' }}>
                <Sparkles size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 600 }}>10:00 AM</span>
                <h3 style={{ margin: '4px 0 2px', fontSize: '1.2rem', color: '#fff' }}>Ganesh Poojan</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#fde047' }}>श्री गणेश पूजन</p>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.2)', padding: '10px', borderRadius: '50%', color: '#fbbf24' }}>
                <Sun size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 600 }}>Auspicious Muhurat</span>
                <h3 style={{ margin: '4px 0 2px', fontSize: '1.2rem', color: '#fff' }}>Sev Murat & Maydev Sthapana</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#fde047' }}>सेव मूरत एवं मायदेव स्थापना</p>
              </div>
            </div>
          </div>
        </div>

        {/* DAY 2: Wednesday, 30th December 2026 */}
        <div className="programme-day-card" style={{
          background: 'linear-gradient(135deg, rgba(60, 18, 30, 0.9), rgba(30, 9, 18, 0.95))',
          border: '1.5px solid rgba(212, 175, 55, 0.6)',
          borderRadius: '16px',
          padding: '24px 28px',
          boxShadow: '0 12px 36px rgba(0,0,0,0.5)',
          position: 'relative'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(90deg, #d4af37, #f59e0b)',
            color: '#2a070e',
            fontWeight: 700,
            padding: '6px 18px',
            borderRadius: '24px',
            fontSize: '1rem',
            marginBottom: '20px',
            letterSpacing: '0.5px'
          }}>
            <Calendar size={18} />
            <span>Wednesday, 30th December 2026 (Main Ceremony)</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            
            {/* Gruh Shanti */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.2)', padding: '10px', borderRadius: '50%', color: '#fbbf24' }}>
                <Flame size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 600 }}>8:30 AM</span>
                <h3 style={{ margin: '4px 0 2px', fontSize: '1.2rem', color: '#fff' }}>Gruh Shanti</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#fde047' }}>गृह शांति</p>
              </div>
            </div>

            {/* Janoi Sanskar */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(245, 158, 11, 0.05))',
              border: '1.5px solid rgba(212, 175, 55, 0.7)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.3)', padding: '10px', borderRadius: '50%', color: '#fef08a' }}>
                <Award size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 700 }}>12:15 PM • ABHIJEET MURAT</span>
                <h3 style={{ margin: '4px 0 2px', fontSize: '1.25rem', color: '#fff', fontWeight: 700 }}>
                  Janoi Sanskar
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#fde047' }}>जनोई संस्कार (अभिजीत मूरत)</p>
              </div>
            </div>

            {/* Badvo Manavaanu Murat */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.2)', padding: '10px', borderRadius: '50%', color: '#fbbf24' }}>
                <HeartHandshake size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 600 }}>3:30 PM</span>
                <h3 style={{ margin: '4px 0 2px', fontSize: '1.2rem', color: '#fff' }}>Badvo Manavaanu Murat</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#fde047' }}>बडवो मनावानु मूरत</p>
              </div>
            </div>

            {/* Priti Bhojan */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px'
            }}>
              <div style={{ background: 'rgba(212, 175, 55, 0.2)', padding: '10px', borderRadius: '50%', color: '#fbbf24' }}>
                <Utensils size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: 600 }}>6:00 PM</span>
                <h3 style={{ margin: '4px 0 2px', fontSize: '1.2rem', color: '#fff' }}>Priti Bhojan</h3>
                <p style={{ margin: 0, fontSize: '0.9rem', color: '#fde047' }}>प्रीति भोजन • Grand Banquet</p>
              </div>
            </div>

          </div>
        </div>

        {/* Cordial Invitation Banner from Invitation Card */}
        <div style={{
          background: 'rgba(212, 175, 55, 0.1)',
          border: '1px dashed rgba(212, 175, 55, 0.5)',
          borderRadius: '12px',
          padding: '20px 24px',
          textAlign: 'center',
          color: '#fef08a'
        }}>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', margin: 0, fontStyle: 'italic' }}>
            "On this auspicious occasion, we cordially invite you with your family to bless and grace the ceremony with your gracious presence."
          </p>
        </div>

      </div>
    </section>
  );
}
