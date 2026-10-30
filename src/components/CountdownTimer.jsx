import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate = '2026-12-30T08:30:00' }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isPast: false
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: timeLeft.days, hindi: 'दिन' },
    { label: 'HOURS', value: timeLeft.hours, hindi: 'घंटे' },
    { label: 'MINUTES', value: timeLeft.minutes, hindi: 'मिनट' },
    { label: 'SECONDS', value: timeLeft.seconds, hindi: 'सेकंड' }
  ];

  return (
    <section className="countdown-section">
      <div className="countdown-container">
        <div className="countdown-title-wrap">
          <span className="gold-ornament">⚜️</span>
          <h2 className="countdown-heading">Auspicious Muhurat Countdown</h2>
          <span className="gold-ornament">⚜️</span>
        </div>
        <p className="countdown-subtext">
          Counting down to Wednesday, 30th December 2026 • Vikram Samvat : 2082
        </p>

        <div className="countdown-card-grid">
          {units.map((unit, index) => (
            <div key={index} className="countdown-card">
              <div className="card-inner-bevel">
                <div className="card-number-glow">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="card-unit-label">
                  <span className="unit-en">{unit.label}</span>
                  <span className="unit-hi">{unit.hindi}</span>
                </div>
              </div>
              <div className="card-corner-studs" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
