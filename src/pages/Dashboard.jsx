import { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalSales: '0.00',
    totalOrders: 0,
    averageOrderValue: '0.00',
  });

  useEffect(() => {
    setStats(storage.getSalesStats());
  }, []);

  const handleRefresh = () => {
    setStats(storage.getSalesStats());
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Sales Dashboard</h1>
        <p className="dashboard-date">Today: {new Date().toLocaleDateString()}</p>
        <button onClick={handleRefresh} className="refresh-btn">
          🔄 Refresh
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>Total Sales</h3>
            <p className="stat-value">₹{stats.totalSales}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-content">
            <h3>Total Orders</h3>
            <p className="stat-value">{stats.totalOrders}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>Avg Order Value</h3>
            <p className="stat-value">₹{stats.averageOrderValue}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-info">
        <p>Monitor your daily sales performance in real-time</p>
      </div>
    </div>
  );
}
