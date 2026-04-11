import { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import '../styles/KitchenDisplay.css';

export default function KitchenDisplay() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate getting new orders - in real app, would be from API/websocket
    const allOrders = storage.getOrders();
    const todayOrders = allOrders.filter(order => order.date === new Date().toLocaleDateString());
    setOrders(todayOrders.reverse());
  }, []);

  const handleOrderComplete = (orderNumber) => {
    const updatedOrders = storage.markOrderComplete(orderNumber);
    const todayOrders = updatedOrders.filter(order => order.date === new Date().toLocaleDateString());
    setOrders(todayOrders.reverse());
  };

  const handleRefresh = () => {
    const allOrders = storage.getOrders();
    const todayOrders = allOrders.filter(order => order.date === new Date().toLocaleDateString());
    setOrders(todayOrders.reverse());
  };

  const incompleteOrders = orders.filter(order => !order.completed);

  return (
    <div className="kitchen-display">
      <div className="kitchen-header">
        <h1>🍳 Kitchen Display System</h1>
        <div className="kitchen-stats">
          <span>Pending Orders: {incompleteOrders.length}</span>
          <button onClick={handleRefresh} className="refresh-btn">
            🔄 Refresh
          </button>
        </div>
      </div>

      {incompleteOrders.length === 0 ? (
        <div className="no-orders-kitchen">
          <p>✅ All orders completed!</p>
        </div>
      ) : (
        <div className="kitchen-orders-grid">
          {incompleteOrders.map(order => (
            <div key={order.orderNumber} className="kitchen-order-card">
              <div className="kitchen-order-header">
                <h2>Order #{order.orderNumber}</h2>
                <span className="order-time">{order.time}</span>
              </div>

              <div className="kitchen-items">
                {order.items.map((item, index) => (
                  <div key={index} className="kitchen-item">
                    <span className="item-quantity">{item.quantity}x</span>
                    <span className="item-name">{item.name}</span>
                  </div>
                ))}
              </div>

              <div className="kitchen-item-count">
                {order.items.length} item{order.items.length !== 1 ? 's' : ''}
              </div>

              <button
                onClick={() => handleOrderComplete(order.orderNumber)}
                className="complete-btn"
              >
                ✅ Mark as Completed
              </button>
            </div>
          ))}
        </div>
      )}

      {orders.some(order => order.completed) && (
        <div className="completed-orders-section">
          <h3>Completed Orders ({orders.filter(order => order.completed).length})</h3>
          <div className="completed-list">
            {orders
              .filter(order => order.completed)
              .map(order => (
                <div key={order.orderNumber} className="completed-order-item">
                  Order #{order.orderNumber} - {order.items.length} items
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
