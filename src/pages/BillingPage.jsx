import { useState } from 'react';
import MenuList from '../components/MenuList';
import OrderTable from '../components/OrderTable';
import PaymentPanel from '../components/PaymentPanel';
import Receipt from '../components/Receipt';
import { storage } from '../utils/storage';
import '../styles/BillingPage.css';

export default function BillingPage() {
  const [order, setOrder] = useState([]);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [billPrinted, setBillPrinted] = useState(false);

  const handleAddItem = (item) => {
    setOrder(prevOrder => {
      const existingItem = prevOrder.find(o => o.id === item.id);
      if (existingItem) {
        return prevOrder.map(o =>
          o.id === item.id ? { ...o, quantity: o.quantity + 1 } : o
        );
      }
      return [...prevOrder, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(index);
    } else {
      setOrder(prevOrder => {
        const newOrder = [...prevOrder];
        newOrder[index].quantity = newQuantity;
        return newOrder;
      });
    }
  };

  const handleRemoveItem = (index) => {
    setOrder(prevOrder => prevOrder.filter((_, i) => i !== index));
  };

  const handleClearOrder = () => {
    if (confirm('Are you sure you want to clear the order?')) {
      setOrder([]);
      setCompletedOrder(null);
    }
  };

  const handlePayment = (paymentData) => {
    const savedOrder = storage.saveOrder(paymentData);
    setCompletedOrder(savedOrder);
    setOrder([]);
  };

  const subtotal = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  if (completedOrder) {
    return (
      <div className="billing-page">
        <div className="receipt-section">
          <Receipt
            order={completedOrder.items}
            orderNumber={completedOrder.orderNumber}
            date={completedOrder.date}
            time={completedOrder.time}
            subtotal={completedOrder.subtotal}
            tax={completedOrder.tax}
            total={completedOrder.total}
            amountGiven={completedOrder.amountGiven}
            change={completedOrder.change}
            onPrint={() => setBillPrinted(true)}
          />
        </div>

        {billPrinted && (
          <div className="new-order-section">
            <button
              onClick={() => {
                setCompletedOrder(null);
                setBillPrinted(false);
              }}
              className="new-order-btn"
            >
              Start New Order
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="billing-page">
      <div className="menu-section">
        <MenuList onAddItem={handleAddItem} />
      </div>

      <div className="order-section">
        <OrderTable
          order={order}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />

        <PaymentPanel
          order={order}
          onPayment={handlePayment}
          onClearOrder={handleClearOrder}
        />
      </div>
    </div>
  );
}
