import React from 'react';
import { MapPin, CalendarPlus, Car, UtensilsCrossed, ShieldCheck, Info } from 'lucide-react';

export default function VenueLocation() {
  const venueTitle = "Ceremony Venue";
  const venueAddress = "(Venue name and full address to be added)";

  // Google Calendar Link generator for Wednesday, 30th December 2026
  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Chi. Veer Desai's Yagnopavitra Sanskar");
    const details = encodeURIComponent(
      "The Desai Family cordially invites you to the auspicious occasion of Chi. Veer's Yagnopavitra Sanskar on Wednesday, 30th December 2026."
    );
    const location = encodeURIComponent(venueAddress);
    // 2026-12-30 from 08:30 AM to 08:00 PM IST (UTC+5:30 -> 03:00 UTC to 14:30 UTC)
    const dates = "20261230T030000Z/20261230T143000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // Download .ics calendar file
  const downloadIcsFile = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Desai Parivar//Chi Veer Desai Yagnopavitra Sanskar//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Chi. Veer Desai - Yagnopavitra Sanskar',
      'DESCRIPTION:Cordially inviting you with family to bless and grace the auspicious Yagnopavitra Sanskar of Chi. Veer. Hosted by Desai Parivar.',
      `LOCATION:${venueAddress}`,
      'DTSTART:20261230T030000Z',
      'DTEND:20261230T143000Z',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Veer_Desai_Yagnopavitra_Sanskar.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="venue" className="venue-section">
      <div className="section-title-wrap">
        <span className="section-icon">🏛️</span>
        <h2 className="section-title">Venue Details</h2>
        <div className="section-subtitle">
          स्थान विवरण • Venue Information
        </div>
      </div>

      <div className="venue-card-wrapper">
        <div className="venue-main-card">
          <div className="venue-details-body" style={{ padding: '36px 28px' }}>
            <div className="venue-address-row" style={{ alignItems: 'flex-start' }}>
              <MapPin className="address-icon" size={28} />
              <div className="address-text">
                <span className="venue-tag" style={{ display: 'inline-block', marginBottom: '8px' }}>VENUE</span>
                <p className="primary-address" style={{ fontSize: '1.4rem', color: '#fff' }}>
                  {venueTitle}
                </p>
                <p className="secondary-address" style={{ fontSize: '1.1rem', color: '#fef08a', fontStyle: 'italic', marginTop: '6px' }}>
                  {venueAddress}
                </p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '10px',
              padding: '12px 18px',
              margin: '20px 0',
              color: '#fef08a',
              fontSize: '0.95rem'
            }}>
              <Info size={20} color="#fbbf24" style={{ flexShrink: 0 }} />
              <span>Full venue address and landmark directions will be updated here shortly.</span>
            </div>

            {/* Action buttons */}
            <div className="venue-action-buttons">
              <a
                href={createGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="venue-btn calendar-btn"
              >
                <CalendarPlus size={18} />
                <span>Add to Google Calendar</span>
              </a>

              <button
                onClick={downloadIcsFile}
                className="venue-btn ics-btn"
                title="Download calendar file for iPhone / Outlook"
              >
                <span>📅 Download .ICS Reminder</span>
              </button>
            </div>

            {/* Guest Comfort Features */}
            <div className="venue-amenities-row">
              <div className="amenity-item">
                <Car size={18} />
                <span>Valet Parking Available</span>
              </div>
              <div className="amenity-item">
                <UtensilsCrossed size={18} />
                <span>Traditional Priti Bhojan</span>
              </div>
              <div className="amenity-item">
                <ShieldCheck size={18} />
                <span>Air-Conditioned Hall</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
