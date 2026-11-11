import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {
  LayoutDashboard,
  CalendarCheck,
  IndianRupee,
  User,
  LogOut,
  Bell,
  CheckCircle2,
  Clock,
  Eye,
  TrendingUp,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import './Dashboard.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Total Bookings', value: '12', change: '+2 today', color: '#0b57d0', bg: '#eff6ff', icon: CalendarCheck },
    { label: 'Completed Jobs', value: '10', change: '83% rate', color: '#10b981', bg: '#ecfdf5', icon: CheckCircle2 },
    { label: 'Pending Arrival', value: '2', change: 'Next at 11:30', color: '#f59e0b', bg: '#fffbeb', icon: Clock },
    { label: "Today's Earnings", value: '₹8,500', change: '+₹1,200', color: '#059669', bg: '#ecfdf5', icon: IndianRupee }
  ];

  const recentBookings = [
    {
      id: 'BK-1082',
      customer: 'Ramesh Kumar',
      service: 'AC Service & Jet Clean',
      dateTime: 'Today, 10:00 AM',
      address: 'Madhapur, Flat 302',
      status: 'Completed',
      amount: '₹699'
    },
    {
      id: 'BK-1083',
      customer: 'Priya Sharma',
      service: 'Washing Machine Drum Fix',
      dateTime: 'Today, 01:30 PM',
      address: 'Banjara Hills, Rd 12',
      status: 'Completed',
      amount: '₹849'
    },
    {
      id: 'BK-1084',
      customer: 'Suresh Babu',
      service: 'Refrigerator Gas Topup',
      dateTime: 'Today, 04:00 PM',
      address: 'Gachibowli, Gated Comm.',
      status: 'Pending',
      amount: '₹1,200'
    },
    {
      id: 'BK-1085',
      customer: 'Anitha Reddy',
      service: 'Microwave Touch Panel',
      dateTime: 'Tomorrow, 11:00 AM',
      address: 'Jubilee Hills, Villa 14',
      status: 'Pending',
      amount: '₹750'
    }
  ];

  return (
    <div className="dashboard-page-root">
      {/* Sidebar Navigation */}
      <aside className="dash-sidebar">
        <div className="dash-sidebar-header">
          <Link to="/">
            <img src={logo} alt="NEEVS" className="dash-logo" />
          </Link>
        </div>

        {/* Technician Profile Card with Active Status Dot */}
        <div className="dash-profile-card">
          <div className="dash-avatar-wrapper">
            <div className="dash-avatar">👨‍🔧</div>
            <span className="online-badge" title="On Duty"></span>
          </div>
          <div className="dash-profile-info">
            <h4 className="tech-name">Raju Kumar</h4>
            <span className="tech-badge">Certified Lead Tech</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="dash-nav-menu">
          <button
            className={`dash-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </button>

          <button
            className={`dash-nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            <CalendarCheck size={18} />
            <span>My Bookings</span>
          </button>

          <button
            className={`dash-nav-item ${activeTab === 'earnings' ? 'active' : ''}`}
            onClick={() => setActiveTab('earnings')}
          >
            <IndianRupee size={18} />
            <span>Earnings</span>
          </button>

          <button
            className={`dash-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={18} />
            <span>Profile</span>
          </button>
        </nav>

        <div className="dash-sidebar-footer">
          <button className="dash-logout-btn" onClick={() => navigate('/signin')}>
            <LogOut size={18} />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dash-main-area">
        {/* Top bar with Notification & Website Link */}
        <motion.header
          className="dash-topbar"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="dash-top-left">
            <h2 className="dash-page-title">Technician Dashboard</h2>
            <p className="dash-greeting">Welcome back, Raju. Here's your active job schedule for today.</p>
          </div>

          <div className="dash-top-right">
            <div className="dash-date-pill">Today, Nov 10, 2026</div>
            <motion.button
              className="dash-icon-btn"
              onClick={() => alert('2 new emergency service calls in Madhapur!')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell size={18} />
              <span className="notif-dot"></span>
            </motion.button>
            <Link to="/" className="view-site-pill interactive-btn">
              <span>View Website</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </motion.header>

        {/* 4 Quick Stat Cards with Stagger Animation */}
        <motion.section
          className="dash-stats-grid"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className="stat-metric-card"
                variants={fadeInUp}
                whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(11, 87, 208, 0.08)' }}
              >
                <div className="metric-text-group">
                  <span className="metric-label">{stat.label}</span>
                  <span className="metric-value">{stat.value}</span>
                  <span className="metric-change-tag">{stat.change}</span>
                </div>
                <div className="metric-icon-wrap" style={{ backgroundColor: stat.bg, color: stat.color }}>
                  <Icon size={24} />
                </div>
              </motion.div>
            );
          })}
        </motion.section>

        {/* Recent Bookings Table Card with Animated Rows */}
        <motion.section
          className="dash-table-card"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="table-card-header">
            <div>
              <h3 className="table-title">Recent Service Bookings</h3>
              <p className="table-sub">Live customer appointments requiring doorstep dispatch</p>
            </div>
            <div className="table-actions">
              <span className="table-counter">Showing 4 Jobs</span>
            </div>
          </div>

          <div className="table-responsive">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Date & Time</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((b) => (
                  <tr key={b.id}>
                    <td>
                      <span className="booking-id-tag">{b.id}</span>
                    </td>
                    <td>
                      <strong className="customer-name">{b.customer}</strong>
                      <div className="customer-address">{b.address}</div>
                    </td>
                    <td>{b.service}</td>
                    <td>{b.dateTime}</td>
                    <td>
                      <strong>{b.amount}</strong>
                    </td>
                    <td>
                      <span className={`status-badge ${b.status.toLowerCase()}`}>
                        {b.status === 'Completed' ? '● Completed' : '○ Pending'}
                      </span>
                    </td>
                    <td>
                      <motion.button
                        className="table-action-btn interactive-btn"
                        onClick={() => alert(`Job details for ${b.id}: Customer ${b.customer}`)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye size={14} />
                        <span>View</span>
                      </motion.button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
