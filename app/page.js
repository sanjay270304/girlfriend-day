'use client';
import './globals.css';

export default function Home() {
  const handleSurprise = () => {
    // Replace with your actual private video link (YouTube, Vimeo, Drive, etc.)
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  };

  return (
    <main className="container">
      <h1 className="message">
        Happy Girlfriend’s Day to the most amazing person in my life. <br />
        You light up my world every day! 💕
      </h1>
      <button className="surprise-btn" onClick={handleSurprise}>
        Tap for a Surprise ❤️
      </button>
    </main>
  );
}
