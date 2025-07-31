'use client';
import './globals.css';
import { useState } from 'react';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const handleSurprise = () => {
    setShowVideo(true);
  };

  return (
    <main className="container">
      <h1 className="message">
        Happy Girlfriend’s Day to the most amazing person in my life. <br />
        You light up my world every day! 💕
      </h1>
      <button className="surprise-btn" onClick={handleSurprise}>
        Tap Here ❤️
      </button>
      {showVideo && (
  <video
    controls
    autoPlay
    src="/myvideo.mp4"
    style={{ width: '100%', maxWidth: '350px', height: 'auto', marginTop: '20px' }}
  >
    Your browser does not support the video tag.
  </video>
)}
    </main>
  );
}
