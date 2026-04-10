import { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import '../styles/OrdersPage.css';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(storage.getOrders().reverse()); // Show latest first
  }, []);

  const handleClearHistory = () => {
    if (confirm('Are you sure you want to clear all order history? This cannot be undone.')) {
      storage.clearOrders();
      setOrders([]);
      alert('Order history cleared');
    }
  };

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h1>Order History</h1>
        <button onClick={handleClearHistory} className="clear-history-btn">
          Clear History
        </button>
      </div>

      {orders.length === 0 ? (
        <p className="no-orders">No orders found</p>
      ) : (
        <div className="orders-list">
          {orders.map((order, index) => (
            <div key={index} className="order-card">
              <div className="order-card-header">
                <span className="order-number">Order #{order.orderNumber}</span>
                <span className="order-date">{order.date} {order.time}</span>
              </div>

              <div className="order-items">
                <h4>Items:</h4>
                <ul>
                  {order.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.name} x{item.quantity} - ₹{(item.price * item.quantity).toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-totals">
                <div className="total-row">
                  <span>Subtotal:</span>
                  <span>₹{order.subtotal.toFixed(2)}</span>
                </div>
                <div className="total-row">
                  <span>Tax:</span>
                  <span>₹{order.tax.toFixed(2)}</span>
                </div>
                <div className="total-row highlight">
                  <span>Total:</span>
                  <span>₹{order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
