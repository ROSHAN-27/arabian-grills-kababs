# Arabian Grills & Kababs - POS System

A complete React-based Point of Sale (POS) web application for restaurant order management, billing, and kitchen operations.

## Features

✅ **Menu Management** - Browse and search menu items with category filters
✅ **Billing System** - Add items to order, manage quantities, and view order totals
✅ **Payment Processing** - Accept payments and calculate change
✅ **Receipt Printing** - Print bills with complete order details
✅ **Order History** - View all completed orders with local storage persistence
✅ **Kitchen Display System** - Kitchen staff interface to view and manage orders
✅ **Sales Dashboard** - Real-time sales statistics and analytics
✅ **Responsive Design** - Works on desktop, tablet, and mobile devices
✅ **Local Storage** - All data is saved in browser's local storage

## Project Structure

```
src/
├── components/
│   ├── MenuList.jsx          # Menu display with search and filters
│   ├── OrderTable.jsx        # Order items management table
│   ├── PaymentPanel.jsx      # Payment calculation section
│   └── Receipt.jsx           # Receipt display and print
├── pages/
│   ├── BillingPage.jsx       # Main billing interface
│   ├── OrdersPage.jsx        # Order history view
│   ├── Dashboard.jsx         # Sales statistics dashboard
│   └── KitchenDisplay.jsx    # Kitchen staff interface
├── data/
│   └── menu.js               # Menu items data and categories
├── utils/
│   └── storage.js            # Local storage utilities
├── styles/
│   ├── MenuList.css
│   ├── OrderTable.css
│   ├── PaymentPanel.css
│   ├── Receipt.css
│   ├── BillingPage.css
│   ├── OrdersPage.css
│   ├── Dashboard.css
│   └── KitchenDisplay.css
├── App.jsx                   # Main application component
├── App.css                   # App styles
├── main.jsx                  # React DOM render
└── index.css                 # Global styles
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup Steps

1. **Navigate to the project folder:**
   ```bash
   cd "Arabian Grills & Kababs"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - The application will typically run on `http://localhost:5173`
   - Vite will display the local URL in the terminal

## Usage

### Main Features by Page

#### 💳 Billing Page (Default)
- Browse menu items in grid layout
- Search items by name
- Filter by category (Kabab, Grilled, Shawarma, Biryani, Drinks)
- Click "Add" button to add items to order
- Manage quantities with +/- buttons
- Remove items from order
- View running total with tax calculation
- Enter payment amount and view change
- Complete payment to generate receipt
- Print receipt for customer

#### 🍳 Kitchen Display
- View all pending orders in real-time
- See order number, time, and items
- Mark orders as completed
- Track completed orders separately
- Refresh to see new orders

#### 📋 Order History
- View all completed orders sorted by newest first
- See order details including items, quantities, and totals
- View order date and time
- Clear entire order history (with confirmation)

#### 📊 Dashboard
- View today's total sales amount
- See total number of orders completed
- Calculate average order value
- Refresh statistics in real-time

## Menu Items

Default menu includes:

**Kabab:**
- Chicken Kabab - ₹180
- Mutton Kabab - ₹220
- Seekh Kabab - ₹200
- Fish Kabab - ₹210

**Grilled Items:**
- Grilled Chicken - ₹320
- Grilled Mutton - ₹380
- Grilled Fish - ₹350

**Shawarma:**
- Chicken Shawarma - ₹150
- Mutton Shawarma - ₹180

**Biryani:**
- Chicken Biryani - ₹250
- Mutton Biryani - ₹320
- Fish Biryani - ₹300

**Drinks:**
- Soft Drink - ₹50
- Water Bottle - ₹20
- Iced Tea - ₹60
- Lassi - ₹80

## Customization

### Adding New Menu Items

Edit `src/data/menu.js`:

```javascript
export const menuItems = [
  { id: 1, name: 'Item Name', price: 100, category: 'Category' },
  // Add more items...
];
```

### Modifying Tax Rate

Edit `src/components/OrderTable.jsx` and `src/pages/BillingPage.jsx`:

Change `const tax = subtotal * 0.05;` to your desired rate (e.g., 0.10 for 10%)

### Changing Colors

Edit `src/App.css` in the `:root` section:

```css
:root {
  --primary-color: #d4604a;      /* Main brand color */
  --secondary-color: #f39c12;    /* Accent color */
  --success-color: #27ae60;      /* Success/positive color */
  --danger-color: #e74c3c;       /* Danger/negative color */
  /* ... more colors */
}
```

## Data Storage

All data is stored in the browser's **Local Storage**:
- **Key:** `pos_orders` - All completed orders
- **Key:** `pos_next_order_id` - Next order number to assign

**Note:** Data persists even after closing the browser but will be cleared if browser cache is cleared.

### Clear All Data

Click "Clear History" button on the Orders page (requires confirmation).

## Build for Production

To create a production-ready build:

```bash
npm run build
```

This generates an optimized build in the `dist/` folder.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Fast React Vite development environment
- Optimized component rendering
- Local storage caching
- Responsive grid layouts
- Print-optimized receipt layout

## Tips for Best Experience

1. **Use Full Screen:** Better viewing of menu and order details
2. **Desktop Resolution:** Recommended for billing workstation (1024x768 minimum)
3. **Tablet/Mobile:** Perfect for kitchen display or mobile order entry
4. **Print Setup:** Configure printer before first print
5. **Data Backup:** Export/backup order history periodically if data is critical

## Keyboard Shortcuts

- Press Tab to navigate between form fields
- Press Enter to submit payment
- Use Arrow keys in number fields to adjust quantities

## Troubleshooting

**Issue:** Port 5173 already in use
```bash
npm run dev -- --port 5174
```

**Issue:** Menu items not appearing
- Check `src/data/menu.js` for correct item objects
- Verify browser console for errors (F12)

**Issue:** Orders not saving
- Check browser's Local Storage is enabled
- Try clearing cache and restarting
- Verify browser isn't in private/incognito mode

**Issue:** Print not working
- Check if pop-ups are allowed in browser
- Try different browser if issue persists
- Ensure JavaScript is enabled

## Future Enhancements

Potential features for future versions:
- User authentication and roles
- Multi-table management
- Online ordering integration
- Payment gateway integration
- Inventory tracking
- Analytics and reports
- SMS notifications
- Customer loyalty program
- Delivery management
- Offline mode support

## Support

For issues or suggestions, please check:
1. Browser console errors (F12 → Console)
2. Ensure all dependencies are installed
3. Try clearing cache and restarting
4. Check Local Storage is not full

## License

This POS System is created for Arabian Grills & Kababs restaurant.

---

**Version:** 1.0.0  
**Last Updated:** April 2026  
**Built with:** React + Vite
