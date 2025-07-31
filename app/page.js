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
      {!showVideo && (
        <>
          <h1 className="message">
            Happy Girlfriend’s Day to the most amazing person in my life. <br />
            You light up my world every day! 💕
            <br />I love you so much, NIDDUU 💕
          </h1>
          <button className="surprise-btn" onClick={handleSurprise}>
            Tap Here ❤️
          </button>
        </>
      )}

      {showVideo && (
        <video
          controls
          autoPlay
          src="/myvideo.mp4"
          style={{
            width: '100%',
            maxWidth: '350px',
            height: 'auto',
            marginTop: '20px',
            borderRadius: '16px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
          }}
        >
          Your browser does not support the video tag.
        </video>
      )}
    </main>
  );
}
