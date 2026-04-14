import { useState } from 'react';
import BillingPage from './pages/BillingPage';
import OrdersPage from './pages/OrdersPage';
import Dashboard from './pages/Dashboard';
import KitchenDisplay from './pages/KitchenDisplay';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('billing');

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

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-brand">
          <img
            src="/images/logo.jpeg"
            alt="Arabian Grills & Kababs logo"
            className="nav-logo"
          />
          <h1>Arabian Grills & Kababs POS</h1>
        </div>
        <div className="navbar-menu">
          <button
            onClick={() => setCurrentPage('billing')}
            className={`nav-btn ${currentPage === 'billing' ? 'active' : ''}`}
          >
            💳 Billing
          </button>
          <button
            onClick={() => setCurrentPage('kitchen')}
            className={`nav-btn ${currentPage === 'kitchen' ? 'active' : ''}`}
          >
            🍳 Kitchen
          </button>
          <button
            onClick={() => setCurrentPage('orders')}
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
      </footer>
    </div>
  );
}

export default App;
