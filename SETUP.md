# Setup & Deployment Guide

## Quick Start (5 Minutes)

### 1. Install Dependencies
```bash
npm install
```
This installs all required packages listed in `package.json`:
- React 18.2.0
- React DOM 18.2.0
- React Router DOM 6.20.0
- Vite 5.0.8

### 2. Start Development Server
```bash
npm run dev
```

You'll see output like:
```
VITE v5.0.8  ready in 234 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

### 3. Open in Browser
Click the URL or open: `http://localhost:5173/`

## File Structure Explained

```
Arabian Grills & Kababs/
│
├── package.json              # Project configuration & dependencies
├── vite.config.js           # Vite build configuration
├── index.html               # HTML entry point
├── .gitignore              # Git ignore rules
├── README.md               # Project documentation
│
└── src/                    # Source code directory
    ├── main.jsx            # React app entry point
    ├── App.jsx             # Main app component with navigation
    ├── App.css             # App-wide styles
    ├── index.css           # Global styles and CSS variables
    │
    ├── components/         # Reusable components
    │   ├── MenuList.jsx           # Menu grid with search/filter
    │   ├── OrderTable.jsx         # Order items table
    │   ├── PaymentPanel.jsx       # Payment input & calculation
    │   └── Receipt.jsx            # Receipt display & print
    │
    ├── pages/              # Full page components
    │   ├── BillingPage.jsx        # Main POS interface
    │   ├── KitchenDisplay.jsx     # Kitchen staff view
    │   ├── OrdersPage.jsx         # Order history
    │   └── Dashboard.jsx          # Sales statistics
    │
    ├── data/               # Data files
    │   └── menu.js                # Menu items & categories
    │
    ├── utils/              # Utility functions
    │   └── storage.js             # Local storage functions
    │
    └── styles/             # Component-specific CSS
        ├── MenuList.css
        ├── OrderTable.css
        ├── PaymentPanel.css
        ├── Receipt.css
        ├── BillingPage.css
        ├── OrdersPage.css
        ├── Dashboard.css
        └── KitchenDisplay.css
```

## Component Architecture

### App Component (Main)
- Manages page navigation
- Routes between: Billing, Kitchen, Orders, Dashboard
- Provides navbar with navigation buttons

### Pages

**BillingPage.jsx**
- Combines MenuList, OrderTable, and PaymentPanel
- Manages order state
- Handles payment processing
- Displays receipt on completion

**KitchenDisplay.jsx**
- Shows pending orders for kitchen staff
- Allows marking orders as completed
- Displays completed orders separately

**OrdersPage.jsx**
- Lists all historical orders
- Filters today's orders
- Allows clearing order history

**Dashboard.jsx**
- Displays total sales
- Shows order count
- Calculates average order value

### Components

**MenuList.jsx**
- Grid display of menu items
- Search functionality
- Category filtering
- Add item button

**OrderTable.jsx**
- Table of items in current order
- Quantity controls
- Item removal
- Running total calculations

**PaymentPanel.jsx**
- Amount input field
- Payment amount display
- Change calculation
- Payment button

**Receipt.jsx**
- Displays formatted receipt
- Print functionality
- Shows order details

## Data Flow

```
App
└── Current Page
    ├── BillingPage
    │   ├── MenuList → onAddItem → setOrder
    │   ├── OrderTable → onUpdateQuantity/onRemoveItem → setOrder
    │   ├── PaymentPanel → onPayment → storage.saveOrder()
    │   └── Receipt → Display & Print
    │
    ├── KitchenDisplay → storage.getOrders()
    │
    ├── OrdersPage → storage.getOrders().reverse()
    │
    └── Dashboard → storage.getSalesStats()
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts Vite development server with hot reload
- Port: http://localhost:5173 (or next available)
- Auto-refresh on file changes
- Fast development experience

### Build for Production
```bash
npm run build
```
Creates optimized production build in `dist/` folder
- Minified JavaScript and CSS
- Optimized assets
- Ready to deploy

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally to test before deployment

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Connect Vercel to your repository
3. Automatic deployment on push
4. Free hosting for public projects

### Option 2: Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically

### Option 3: Traditional Web Server
1. Run `npm run build`
2. Copy `dist/` folder contents to web server
3. Configure server to serve `index.html` for all routes

### Option 4: Docker Deployment
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## Configuration

### Change Restaurant Name
Edit `src/App.jsx` and update navbar title:
```jsx
<h1>🍖 Your Restaurant Name POS</h1>
```

### Modify Menu Items
Edit `src/data/menu.js`:
```javascript
export const menuItems = [
  { id: 1, name: 'Item Name', price: 100, category: 'Category' },
];
```

### Adjust Tax Rate
Edit `src/components/OrderTable.jsx`:
```javascript
const tax = subtotal * 0.05; // Change 0.05 to your rate
```

### Customize Colors
Edit `src/App.css`:
```css
:root {
  --primary-color: #d4604a;
  --secondary-color: #f39c12;
  --success-color: #27ae60;
  --danger-color: #e74c3c;
}
```

## Local Storage Data Structure

Orders stored in `pos_orders`:
```json
{
  "orderNumber": 1001,
  "items": [
    {
      "id": 1,
      "name": "Item Name",
      "price": 100,
      "quantity": 2
    }
  ],
  "subtotal": 200,
  "tax": 10,
  "total": 210,
  "amountGiven": 250,
  "change": 40,
  "timestamp": "2026-04-10T14:30:00",
  "date": "4/10/2026",
  "time": "2:30:00 PM"
}
```

## Environment Variables

Currently not required, but can be added for:
- API endpoints
- Deployment configuration
- Third-party integrations

Create `.env` file:
```
VITE_API_URL=http://api.example.com
VITE_RESTAURANT_NAME=Arabian Grills & Kababs
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Browser Storage Limits

- Chrome: ~10MB per domain
- Firefox: ~10MB per domain
- Safari: ~5MB per domain
- Edge: ~10MB per domain

For storing thousands of orders, consider:
1. Archiving old orders to JSON file
2. Using IndexedDB instead of localStorage
3. Server-side database

## Performance Optimization

The app includes:
- Code splitting (automatic with Vite)
- CSS minification (production build)
- React strict mode (development)
- Optimized renders with React hooks
- Responsive grid layouts
- Print media queries

## Troubleshooting Common Issues

### Issue: npm install fails
```bash
# Clear npm cache
npm cache clean --force

# Try install again
npm install
```

### Issue: Port 5173 is in use
```bash
npm run dev -- --port 5174
```

### Issue: Changes not reflecting
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check console for errors (F12)

### Issue: Orders not saving
- Check Local Storage is enabled
- Verify browser isn't in private mode
- Check if storage quota exceeded (F12 → Application → Storage)

### Issue: Print not working
- Check pop-up blocker settings
- Try Ctrl+P after receipt displays
- Test in different browser

## Testing

To test the POS system:

1. **Add Items Test:**
   - Click multiple items
   - Verify quantities increment
   - Check totals update

2. **Payment Test:**
   - Add items
   - Enter payment amount
   - Verify change calculation
   - Complete payment

3. **Receipt Test:**
   - Complete a payment
   - View receipt
   - Test print function

4. **Order History Test:**
   - Complete multiple orders
   - Navigate to Orders page
   - Verify all orders display

5. **Dashboard Test:**
   - Check sales total
   - Verify order count
   - Refresh statistics

## Maintenance

### Regular Tasks
- Review and backup orders periodically
- Monitor Local Storage usage
- Update dependencies quarterly: `npm update`
- Test on different browsers/devices

### Security Considerations
- Data is only in browser Local Storage
- No data sent to external servers
- No authentication required (add if needed)
- Consider adding password protection for kitchen/admin

### Backup Strategy
1. Regularly export orders
2. Use browser DevTools to copy Local Storage
3. Consider server-side backup for critical data

## Production Checklist

Before going live:
- [ ] Update restaurant name and branding
- [ ] Add all menu items with correct prices
- [ ] Test payment calculation
- [ ] Test receipt printing
- [ ] Verify on multiple devices
- [ ] Test in target browsers
- [ ] Set up regular backups
- [ ] Document custom modifications
- [ ] Train staff on usage
- [ ] Create backup plan

---

**Ready to deploy?** Contact your hosting provider or follow one of the deployment options above.
