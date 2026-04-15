import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import BillingPage from './pages/BillingPage';
import OrdersPage from './pages/OrdersPage';
import Dashboard from './pages/Dashboard';
import KitchenDisplay from './pages/KitchenDisplay';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('billing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'billing':
        return <BillingPage />;
      case 'orders':
        return <OrdersPage />;
      case 'dashboard':
        return <Dashboard />;
      case 'kitchen':
        return <KitchenDisplay />;
      default:
        return <BillingPage />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close menu on mobile after navigation
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-brand">
          <img src="/images/logo.jpeg" alt="Arabian Grills & Kababs Logo" className="navbar-logo" />
          <div className="title-container">
            <div className="fire-animation">🔥</div>
            <h1>Arabian <span className="text-primary">Grills & </span> <span className="text-primary">Kababs</span></h1>
          </div>
        </div>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <button
            onClick={() => handlePageChange('billing')}
            className={`nav-btn ${currentPage === 'billing' ? 'active' : ''}`}
          >
            💳 Billing
          </button>
          <button
            onClick={() => handlePageChange('kitchen')}
            className={`nav-btn ${currentPage === 'kitchen' ? 'active' : ''}`}
          >
            🍳 Kitchen
          </button>
          <button
            onClick={() => handlePageChange('orders')}
            className={`nav-btn ${currentPage === 'orders' ? 'active' : ''}`}
          >
            📋 Orders
          </button>
          <button
            onClick={() => setCurrentPage('dashboard')}
            className={`nav-btn ${currentPage === 'dashboard' ? 'active' : ''}`}
          >
            📊 Dashboard
          </button>
          <button
            onClick={() => window.installApp()}
            className="nav-btn install-btn"
          >
            📱 Install App
          </button>
        </div>
      </nav>

      <main className="main-content">
        {renderPage()}
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Arabian Grills & Kababs POS System | All Rights Reserved</p>
        <p>Designed by Pathan Roshan Zameer</p>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;
