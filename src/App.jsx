import React, { useState } from 'react';
import PalaceDoors from './components/PalaceDoors';
import Navbar from './components/Navbar';
import InviteHero from './components/InviteHero';
import CountdownTimer from './components/CountdownTimer';
import CeremonySchedule from './components/CeremonySchedule';
import VenueLocation from './components/VenueLocation';
import FamilyTree from './components/FamilyTree';
import BlessingsGuestbook from './components/BlessingsGuestbook';
import ShareRSVPModal from './components/ShareRSVPModal';
import FallingPetals from './components/FallingPetals';
import confetti from 'canvas-confetti';

export default function App() {
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [burstCount, setBurstCount] = useState(0);
  const [showToast, setShowToast] = useState('');

  // Confetti / Marigold petal burst
  const triggerPetalCelebration = () => {
    setBurstCount((prev) => prev + 1);

    // Canvas confetti burst in gold and marigold colors
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f59e0b', '#fbbf24', '#e11d48', '#be123c', '#ffffff']
      });
    } catch {
      // Ignored
    }
  };

  const handleOpenGate = () => {
    setIsGateOpen(true);
    triggerPetalCelebration();
  };

  const handleResetGate = () => {
    setIsGateOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShareInvite = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: "👑 Royal Invitation: Yagnopavitra Sanskar of Chi. Veer Desai",
        text: "With the immense blessings of Shree Kuldevi Mata, A. Sau. Komal Raj Desai's beloved son Chi. Veer cordially invites you to his Yagnopavitra Sanskar on Wednesday, 30th December 2026.",
        url: url
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      triggerToast("✨ Royal Invite link copied to clipboard!");
      triggerPetalCelebration();
    }
  };

  const triggerToast = (msg) => {
    setShowToast(msg);
    setTimeout(() => {
      setShowToast('');
    }, 3500);
  };

  return (
    <div className={`app-root ${isGateOpen ? 'palace-unlocked' : 'palace-locked'}`}>
      {/* Falling Flower Petals Canvas */}
      <FallingPetals active={true} burstTrigger={burstCount} />

      {/* 3D Palace Entrance Gates Overlay */}
      <PalaceDoors
        isOpen={isGateOpen}
        onOpen={handleOpenGate}
        onBurstPetals={triggerPetalCelebration}
      />

      {/* Main Palace Inner Invitation (Revealed when gates open) */}
      <div className={`palace-interior-container ${isGateOpen ? 'revealed' : 'concealed'}`}>
        {/* Floating Royal Glass Navbar */}
        <Navbar
          onShowerPetals={triggerPetalCelebration}
          onResetGate={handleResetGate}
          onShareInvite={handleShareInvite}
        />

        {/* Ambient Royal Palace Hall Background Image with Parallax Veil */}
        <div className="palace-grand-hall-bg" />
        <div className="royal-scenic-overlay" />

        <main className="palace-content-flow">
          {/* Hero & Vedic Shloka Section */}
          <InviteHero
            eventDate="2026-12-30T08:30:00"
            onShareInvite={handleShareInvite}
          />

          {/* Live Muhurat Countdown */}
          <CountdownTimer targetDate="2026-12-30T08:30:00" />

          {/* Sacred Ceremony Timeline */}
          <CeremonySchedule />

          {/* Royal Darbar & Venue Location */}
          <VenueLocation />

          {/* Cordial Hosts & Parivar */}
          <FamilyTree />

          {/* Guestbook for Blessings */}
          <BlessingsGuestbook onBurstPetals={triggerPetalCelebration} />

          {/* Share Invitation & Family Benediction */}
          <ShareRSVPModal onBurstPetals={triggerPetalCelebration} />
        </main>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="global-toast-notification">
          <span>{showToast}</span>
        </div>
      )}
    </div>
  );
}
