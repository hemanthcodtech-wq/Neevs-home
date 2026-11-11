import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Bot } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-page-root">
      <div className="notfound-card">
        {/* Large 404 with home appliance house emblem */}
        <div className="notfound-404-row">
          <span className="digit-four">4</span>
          <div className="zero-house-symbol">
            <div className="roof-mini"></div>
            <div className="door-mini"></div>
          </div>
          <span className="digit-four">4</span>
        </div>

        <h1 className="notfound-heading">Page Not Found</h1>
        <p className="notfound-sub">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Robot Tech Illustration badge matching reference */}
        <div className="tech-bot-badge">
          <Bot size={40} className="robot-icon" />
          <div className="robot-speech-bubble">
            <span>Our technician robot couldn't locate this circuit!</span>
          </div>
        </div>

        <div className="notfound-action">
          <Link to="/" className="notfound-home-btn">
            <Home size={18} />
            <span>Go Back Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

