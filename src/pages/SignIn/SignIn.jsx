import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Mail, Lock, ShieldCheck, ArrowRight, Eye, EyeOff, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './SignIn.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
};

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="signin-page-root">
      {/* Background animated subtle glow circles */}
      <div className="signin-bg-decor orb-1"></div>
      <div className="signin-bg-decor orb-2"></div>

      <motion.div
        className="signin-card-container"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Left Side: Dark Blue Branded Card with Motion */}
        <div className="signin-brand-panel">
          <div className="brand-panel-logo">
            <img src={logo} alt="NEEVS" className="brand-logo-img" />
          </div>

          <div className="brand-panel-middle">
            <motion.div
              className="brand-symbol-circle"
              animate={{ rotate: [0, 6, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ShieldCheck size={46} className="brand-shield" />
            </motion.div>
            <h2 className="brand-welcome-title">Welcome Back!</h2>
            <p className="brand-welcome-desc">
              Sign in to access your technician portal, manage service bookings, and track customer jobs in real time.
            </p>

            <div className="brand-perks-list">
              <div className="perk-item">
                <CheckCircle2 size={16} />
                <span>Live GPS Dispatch Routing</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={16} />
                <span>Instant Parts Inventory Access</span>
              </div>
            </div>
          </div>

          <div className="brand-panel-footer">
            <span className="brand-version-badge">NEEVS Service OS v2.4 • Secure</span>
          </div>
        </div>

        {/* Right Side: Sign In Form with Smooth Inputs */}
        <motion.div
          className="signin-form-panel"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          <div className="signin-header">
            <h1 className="signin-title">Sign In</h1>
            <p className="signin-subtitle">Enter your registered details to continue</p>
          </div>

          <form className="signin-form" onSubmit={handleSignIn}>
            <div className="signin-form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-with-icon">
                <Mail size={18} className="field-icon" />
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="technician@neevs.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="signin-form-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <Lock size={18} className="field-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="signin-options-row">
              <label className="remember-checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember Me</span>
              </label>

              <a
                href="#forgot"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Password reset link sent to registered email.');
                }}
                className="forgot-password-link"
              >
                Forgot Password?
              </a>
            </div>

            <motion.button
              type="submit"
              className="signin-submit-btn interactive-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Sign In to Portal</span>
              <ArrowRight size={16} />
            </motion.button>

            <div className="signin-footer-note">
              <span>Don't have technician credentials? </span>
              <Link to="/contact" className="contact-admin-link">
                Contact Administrator
              </Link>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
