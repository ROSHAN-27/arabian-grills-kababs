import { useRef } from 'react';
import '../styles/Receipt.css';

export default function Receipt({ order, orderNumber, date, time, subtotal, tax, total, amountGiven, change, onPrint }) {
  const receiptRef = useRef();

  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Receipt - Order #${orderNumber}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            width: 400px;
            margin: 20px auto;
            padding: 20px;
          }
          .receipt {
            border: 1px solid #000;
            padding: 20px;
            text-align: center;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 10px;
          }
          .header img {
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 8px;
          }
          .title {
            font-size: 20px;
            font-weight: bold;
          }
          .order-info {
            font-size: 12px;
            margin-bottom: 20px;
            border-bottom: 1px dashed #000;
            padding-bottom: 10px;
          }
          .items {
            text-align: left;
            margin-bottom: 20px;
            font-size: 12px;
          }
          .item-row {
            display: flex;
            justify-content: space-between;
            margin: 5px 0;
          }
          .summary {
            border-top: 1px dashed #000;
            border-bottom: 1px dashed #000;
            padding: 10px 0;
            margin-bottom: 10px;
            font-size: 12px;
          }
          .summary-row {
            display: flex;
            justify-content: space-between;
            margin: 5px 0;
          }
          .total {
            font-weight: bold;
            font-size: 14px;
          }
          .payment-info {
            font-size: 12px;
            margin-top: 20px;
            text-align: left;
          }
          .thank-you {
            margin-top: 20px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="receipt">
          <div class="header">
            <div class="title">Arabian Grills & Kababs</div>
          </div>
          
          <div class="order-info">
            Order #${orderNumber}<br/>
            Date: ${date}<br/>
            Time: ${time}
          </div>

          <div class="items">
            <strong>Items:</strong><br/>
            ${order.map(item => `
              <div class="item-row">
                <span>${item.name} x${item.quantity}</span>
                <span>₹${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            `).join('')}
          </div>

          <div class="summary">
            <div class="summary-row">
              <span>Subtotal:</span>
              <span>₹${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
              <span>Tax (5%):</span>
              <span>₹${tax.toFixed(2)}</span>
            </div>
            <div class="summary-row total">
              <span>Total:</span>
              <span>₹${total.toFixed(2)}</span>
            </div>
          </div>

          <div class="payment-info">
            Amount Given: ₹${amountGiven.toFixed(2)}<br/>
            Change: ₹${change.toFixed(2)}
          </div>

          <div class="thank-you">
            Thank You! Visit Again
          </div>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();

    // Call the onPrint callback if provided
    if (onPrint) {
      onPrint();
    }
  };

  return (
    <div className="receipt-container">
      <div ref={receiptRef} className="receipt">
        <div className="receipt-header">
          <div>
            <h1>Arabian Grills & Kababs</h1>
            <p className="tagline">Fine Dining</p>
          </div>
        </div>

        <div className="receipt-order-info">
          <div>Order #: <strong>{orderNumber}</strong></div>
          <div>Date: {date}</div>
          <div>Time: {time}</div>
        </div>

        <div className="receipt-items">
          <h3>Items Ordered</h3>
          <table className="receipt-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {order.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price}</td>
                  <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="receipt-summary">
          <div className="receipt-row">
            <span>Subtotal:</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="receipt-row">
            <span>Tax (5%):</span>
            <span>₹{tax.toFixed(2)}</span>
          </div>
          <div className="receipt-row total">
            <span>Total:</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <div className="receipt-row">
            <span>Amount Given:</span>
            <span>₹{amountGiven.toFixed(2)}</span>
          </div>
          <div className="receipt-row">
            <span>Change:</span>
            <span>₹{change.toFixed(2)}</span>
          </div>
        </div>

        <div className="receipt-footer">
          <p>Thank You for Your Order!</p>
          <p>Visit Again Soon</p>
        </div>
      </div>

      <button onClick={handlePrint} className="print-btn">
        🖨️ Print Bill
      </button>
    </div>
  );
}
