import { useState } from 'react';
import '../styles/PaymentPanel.css';

export default function PaymentPanel({ order, onPayment, onClearOrder }) {
  const [amountGiven, setAmountGiven] = useState('');
  const [showChangeCalculator, setShowChangeCalculator] = useState(false);

  const subtotal = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const amountNum = parseFloat(amountGiven) || 0;
  const change = amountNum - total;

  const handlePayment = () => {
    if (order.length === 0) {
      alert('Please add items to the order first');
      return;
    }

    // If change calculator is shown and amount is entered, validate it's sufficient
    if (showChangeCalculator && amountGiven && amountNum < total) {
      alert('Amount given is less than total bill');
      return;
    }

    onPayment({
      items: order,
      subtotal,
      tax,
      total,
      amountGiven: showChangeCalculator && amountGiven ? amountNum : total,
      change: showChangeCalculator && amountGiven ? change : 0,
    });
    setAmountGiven('');
    setShowChangeCalculator(false);
  };

  return (
    <div className="payment-panel">
      <h2>Payment</h2>

      <div className="payment-section">
        <div className="payment-row">
          <span className="label-text">Total Bill:</span>
          <span className="amount">₹{total.toFixed(2)}</span>
        </div>

        <div className="change-calculator-toggle">
          <button
            onClick={() => setShowChangeCalculator(!showChangeCalculator)}
            className="toggle-btn"
          >
            {showChangeCalculator ? 'Hide' : 'Show'} Change Calculator
          </button>
        </div>

        {showChangeCalculator && (
          <>
            <div className="payment-row">
              <label htmlFor="amountGiven">Amount Given:</label>
              <input
                id="amountGiven"
                type="number"
                value={amountGiven}
                onChange={(e) => setAmountGiven(e.target.value)}
                placeholder="Enter amount received"
                className="amount-input"
              />
            </div>

            <div className="payment-row">
              <span className="label-text">Change to Return:</span>
              <span className={`amount ${change >= 0 ? 'positive' : 'negative'}`}>
                ₹{change.toFixed(2)}
              </span>
            </div>
          </>
        )}
      </div>

      <div className="payment-buttons">
        <button onClick={handlePayment} className="pay-btn">
          {showChangeCalculator && amountGiven ? 'Complete Payment' : 'Complete Order'}
        </button>
        <button onClick={onClearOrder} className="clear-btn">
          Clear Order
        </button>
      </div>
    </div>
  );
}
