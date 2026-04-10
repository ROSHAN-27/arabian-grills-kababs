# Complete File Listing & Quick Reference

## 📁 Full Project Structure

```
Arabian Grills & Kababs/
│
├── 📄 package.json                 # NPM configuration & dependencies
├── 📄 vite.config.js              # Vite build configuration  
├── 📄 index.html                  # HTML entry point
├── 📄 .gitignore                  # Git ignore rules
│
├── 📄 README.md                   # 📖 USER GUIDE (Read this first)
├── 📄 SETUP.md                    # 🔧 SETUP & DEPLOYMENT GUIDE
├── 📄 SUMMARY.md                  # 📋 PROJECT SUMMARY
│
└── 📁 src/                        # SOURCE CODE
    ├── 📄 main.jsx                # React entry point
    ├── 📄 App.jsx                 # Main app component with navigation
    ├── 📄 App.css                 # App styles & theme variables
    ├── 📄 index.css               # Global styles
    │
    ├── 📁 components/             # Reusable React components
    │   ├── MenuList.jsx           # Menu display, search, filter
    │   ├── OrderTable.jsx         # Order management table
    │   ├── PaymentPanel.jsx       # Payment input & calculation
    │   └── Receipt.jsx            # Receipt display & print
    │
    ├── 📁 pages/                  # Full page components
    │   ├── BillingPage.jsx        # Main POS billing interface
    │   ├── KitchenDisplay.jsx     # Kitchen staff display screen
    │   ├── OrdersPage.jsx         # Order history viewer
    │   └── Dashboard.jsx          # Sales statistics dashboard
    │
    ├── 📁 data/                   # Data files
    │   └── menu.js                # Menu items & categories (16 items)
    │
    ├── 📁 utils/                  # Utility functions
    │   └── storage.js             # Local storage management
    │
    └── 📁 styles/                 # Component CSS files
        ├── MenuList.css
        ├── OrderTable.css
        ├── PaymentPanel.css
        ├── Receipt.css
        ├── BillingPage.css
        ├── OrdersPage.css
        ├── Dashboard.css
        └── KitchenDisplay.css
```

## 📊 File Statistics

| Category | Count | Details |
|----------|-------|---------|
| Components | 4 | MenuList, OrderTable, PaymentPanel, Receipt |
| Pages | 4 | BillingPage, KitchenDisplay, OrdersPage, Dashboard |
| Data/Utils | 2 | menu.js, storage.js |
| Styles (CSS) | 9 | Global + 8 component styles |
| Config | 3 | package.json, vite.config.js, index.html |
| Docs | 3 | README.md, SETUP.md, SUMMARY.md |
| **Total** | **28** | **Complete POS system** |

## 🔑 Key Files to Understand

### 1. **README.md** (Start Here!)
- Complete feature overview
- User guide for each page
- Menu items list
- Customization instructions
- Troubleshooting guide

### 2. **SETUP.md** (For Developers)
- Installation steps
- File structure explanation
- Configuration options
- Deployment guide
- Environment setup

### 3. **SUMMARY.md** (Project Overview)
- Completion status
- Features checklist
- Technology stack
- Quick start guide
- Testing checklist

## 🎯 Component Guide

### MenuList.jsx (Component)
**Location:** `src/components/MenuList.jsx`

**What it does:**
- Displays menu items in grid layout
- Search functionality
- Category filtering
- Add to order functionality

**Props:**
- `onAddItem` - Callback when item is added

**Key Features:**
- Real-time search
- 6 category filters (All, Kabab, Grilled, Shawarma, Biryani, Drinks)
- Hover effects on items
- Category pills with active state

### OrderTable.jsx (Component)
**Location:** `src/components/OrderTable.jsx`

**What it does:**
- Displays order items in table format
- Quantity management
- Price calculations
- Item removal

**Props:**
- `order` - Array of order items
- `onUpdateQuantity` - Update quantity callback
- `onRemoveItem` - Remove item callback

**Key Features:**
- +/- quantity buttons
- Real-time total calculation
- Tax calculation (5%)
- Grand total display

### PaymentPanel.jsx (Component)
**Location:** `src/components/PaymentPanel.jsx`

**What it does:**
- Payment amount input
- Change calculation
- Payment processing
- Clear order option

**Props:**
- `order` - Current order
- `onPayment` - Payment callback
- `onClearOrder` - Clear order callback

**Key Features:**
- Input validation
- Change calculation
- Visual feedback (positive/negative)
- Error alerts

### Receipt.jsx (Component)
**Location:** `src/components/Receipt.jsx`

**What it does:**
- Display formatted receipt
- Print receipt to printer
- Show all order details

**Props:**
- `order`, `orderNumber`, `date`, `time`, `subtotal`, `tax`, `total`, `amountGiven`, `change`

**Key Features:**
- Professional receipt layout
- Print button
- Order details summary
- Thermal printer compatible

### BillingPage.jsx (Page)
**Location:** `src/pages/BillingPage.jsx`

**What it does:**
- Main POS interface
- Combines all billing components
- Manages order state
- Handles payment

**Features:**
- Left: Menu grid
- Right: Order table + payment
- Receipt display after payment
- New order button

### KitchenDisplay.jsx (Page)
**Location:** `src/pages/KitchenDisplay.jsx`

**What it does:**
- Kitchen staff interface
- Shows pending orders
- Mark orders complete
- Track completed orders

**Features:**
- Order cards with items
- Large, readable display
- Completion tracking
- Order time display

### OrdersPage.jsx (Page)
**Location:** `src/pages/OrdersPage.jsx`

**What it does:**
- View all completed orders
- Filter by date
- Clear history option

**Features:**
- Card-based order display
- Order details expandable
- Total amounts
- Clear history function

### Dashboard.jsx (Page)
**Location:** `src/pages/Dashboard.jsx`

**What it does:**
- Display sales statistics
- Calculate daily metrics
- Show analytics

**Features:**
- Total sales (₹)
- Order count
- Average order value
- Refresh button

## 🎨 Styling Guide

### CSS Architecture

**Global Styles:** `src/App.css` + `src/index.css`
- Color variables (--primary-color, --secondary-color, etc.)
- Base element styles
- Navbar and footer

**Component Styles:** `src/styles/*.css`
- Each component has dedicated CSS
- Mobile responsive breakpoints at 768px and 1024px
- Consistent spacing and colors

### Color Scheme

```css
--primary-color: #d4604a;      /* Terracotta/Brown */
--secondary-color: #f39c12;    /* Orange */
--success-color: #27ae60;      /* Green */
--danger-color: #e74c3c;       /* Red */
--dark-color: #2c3e50;         /* Dark Blue */
--light-color: #ecf0f1;        /* Light Gray */
--border-color: #bdc3c7;       /* Medium Gray */
```

### Responsive Breakpoints

```css
Desktop: Full 2-column layout
Tablet/Medium (max-width: 1024px): Adjusted spacing
Mobile (max-width: 768px): 1-column stacked layout
Small Mobile (max-width: 480px): Minimal layout
```

## 📦 Data Files

### menu.js
**Location:** `src/data/menu.js`

**Contains:**
- 16 menu items across 5 categories
- Item structure: `{ id, name, price, category }`
- Categories array

**Menu Items:**
```javascript
[
  // Kabab (4 items)
  // Grilled (3 items)
  // Shawarma (2 items)
  // Biryani (3 items)
  // Drinks (4 items)
]
```

**To Add Items:**
```javascript
{ id: 99, name: 'New Item', price: 100, category: 'Category' }
```

## 💾 Local Storage Structure

### Keys Used

1. **`pos_orders`**
   - Stores array of all completed orders
   - Each order contains items, totals, payment info, timestamp

2. **`pos_next_order_id`**
   - Tracks next order number to assign
   - Starts at 1001, increments per order

### Typical Order Object
```json
{
  "orderNumber": 1001,
  "items": [
    { "id": 1, "name": "Chicken Kabab", "price": 180, "quantity": 2 },
    { "id": 13, "name": "Soft Drink", "price": 50, "quantity": 2 }
  ],
  "subtotal": 460,
  "tax": 23,
  "total": 483,
  "amountGiven": 500,
  "change": 17,
  "timestamp": "2026-04-10T14:30:45.123Z",
  "date": "4/10/2026",
  "time": "2:30:45 PM"
}
```

## 🔧 Customization Quick Guide

### Change Restaurant Name
**File:** `src/App.jsx` (Line ~8)
```jsx
// Change from:
<h1>🍖 Arabian Grills & Kababs POS</h1>
// To:
<h1>🍖 Your Restaurant Name POS</h1>
```

### Add/Remove Menu Items
**File:** `src/data/menu.js`
```javascript
export const menuItems = [
  { id: 17, name: 'New Item', price: 300, category: 'Kabab' },
  // Add more items
];
```

### Change Tax Rate
**Files:** 
- `src/components/OrderTable.jsx` (Line ~12)
- `src/pages/BillingPage.jsx` (Line ~53)

```javascript
// Change from:
const tax = subtotal * 0.05;  // 5%
// To:
const tax = subtotal * 0.10;  // 10%
```

### Change Colors
**File:** `src/App.css` (Line ~10-20)
```css
:root {
  --primary-color: #your-color-1;
  --secondary-color: #your-color-2;
  --success-color: #your-color-3;
  --danger-color: #your-color-4;
}
```

### Add New Menu Category
**File:** `src/data/menu.js`
1. Add category to `categories` array
2. Add items with new category name
3. Items automatically appear in filter

## 🚀 Quick Commands

```bash
# Install dependencies
npm install

# Start development (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🖥️ System Requirements

**Minimum:**
- Node.js 14+
- npm 6+
- Modern browser (Chrome, Firefox, Safari, Edge)
- 2 GB RAM
- 500 MB disk space

**Recommended:**
- Node.js 18+
- npm 9+
- Recent browser version
- 4 GB RAM
- 1 GB disk space

## 📱 Browser Support

| Browser | Desktop | Mobile | Status |
|---------|---------|--------|--------|
| Chrome | ✅ | ✅ | Fully supported |
| Firefox | ✅ | ✅ | Fully supported |
| Safari | ✅ | ✅ | Fully supported |
| Edge | ✅ | ✅ | Fully supported |
| IE 11 | ❌ | ❌ | Not supported |

## 🔗 File Dependencies

```
App.jsx
├── BillingPage.jsx
│   ├── MenuList.jsx (uses data/menu.js)
│   ├── OrderTable.jsx
│   ├── PaymentPanel.jsx
│   └── Receipt.jsx
├── KitchenDisplay.jsx (uses utils/storage.js)
├── OrdersPage.jsx (uses utils/storage.js)
└── Dashboard.jsx (uses utils/storage.js)
```

## ✅ Implementation Checklist

- [x] React + Vite setup
- [x] 4 Components created
- [x] 4 Pages created
- [x] Menu data (16 items)
- [x] Local storage utilities
- [x] Responsive CSS (8 files)
- [x] Search functionality
- [x] Category filters
- [x] Order management
- [x] Payment calculation
- [x] Receipt printing
- [x] Order history
- [x] Kitchen display
- [x] Sales dashboard
- [x] Mobile responsive
- [x] Documentation (3 files)

---

**Last Updated:** April 10, 2026  
**Version:** 1.0.0  
**Status:** ✅ PRODUCTION READY
