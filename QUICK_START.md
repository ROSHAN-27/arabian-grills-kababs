# 🚀 QUICK START GUIDE

**Get your POS system running in 3 minutes!**

---

## ⚡ 3-Minute Setup

### Step 1: Open Terminal (1 minute)
```bash
# Navigate to project directory
cd "Arabian Grills & Kababs"

# Verify you're in right directory (you should see package.json)
dir
```

### Step 2: Install Dependencies (1 minute)
```bash
npm install
```

**What this does:**
- Downloads React, Vite, and other packages
- Creates `node_modules` folder (takes ~30-60 seconds)
- Sets up everything needed to run the app

### Step 3: Start the Application (1 minute)
```bash
npm run dev
```

**You'll see:**
```
VITE v5.0.8  ready in 234 ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

### Step 4: Open in Browser
- Click the URL: `http://localhost:5173/`
- Or copy/paste into browser address bar
- **Done!** POS system is running 🎉

---

## 🎯 First Steps to Try

### 1. Add Items to Order
1. Click on any menu item (e.g., "Chicken Kabab")
2. Click "Add" button
3. See it appear in the right panel
4. Click multiple times to increase quantity

### 2. Complete a Payment
1. Add 2-3 items
2. Scroll down to Payment section
3. Enter amount (e.g., 500)
4. See change calculate automatically
5. Click "Complete Payment"
6. View receipt

### 3. Print Receipt
1. After completing payment, receipt displays
2. Click "🖨️ Print Bill" button
3. Print dialog opens
4. Click print or save as PDF

### 4. Check Order History
1. Click "📋 Orders" tab
2. See all past orders
3. View order details

### 5. View Dashboard
1. Click "📊 Dashboard" tab
2. See today's sales stats
3. Click refresh to update

### 6. Kitchen Display
1. Click "🍳 Kitchen" tab
2. See pending orders
3. Click "✅ Mark as Completed"
4. Watch completed orders move to separate section

---

## 📱 POS System Pages

| Page | Tab | Purpose |
|------|-----|---------|
| **Billing** | 💳 | Main POS - Take orders & payments |
| **Kitchen** | 🍳 | Kitchen staff - View & manage orders |
| **Orders** | 📋 | View order history & analytics |
| **Dashboard** | 📊 | Sales statistics & metrics |

---

## 🛠️ Troubleshooting

### Problem: "npm: command not found"
**Solution:**
- Install Node.js from nodejs.org
- Restart terminal after installation
- Try `npm install` again

### Problem: Port 5173 already in use
**Solution:**
```bash
npm run dev -- --port 5174
```

### Problem: Nothing appears in browser
**Solution:**
- Wait 10 seconds for app to load
- Check browser console (F12 → Console)
- Try refreshing page (Ctrl+R)
- Hard refresh (Ctrl+Shift+R)

### Problem: Items not appearing on menu
**Solution:**
- Open browser DevTools (F12)
- Check Console tab for errors
- Verify `src/data/menu.js` file exists
- Restart `npm run dev`

### Problem: Print dialog doesn't open
**Solution:**
- Check if pop-ups are blocked
- Disable pop-up blocker for this site
- Try Ctrl+P instead of Print button
- Test in different browser

---

## 📝 Menu Items Available

**16 items pre-loaded:**

Kabab:
- Chicken Kabab (₹180)
- Mutton Kabab (₹220)
- Seekh Kabab (₹200)
- Fish Kabab (₹210)

Grilled:
- Grilled Chicken (₹320)
- Grilled Mutton (₹380)
- Grilled Fish (₹350)

Shawarma:
- Chicken Shawarma (₹150)
- Mutton Shawarma (₹180)

Biryani:
- Chicken Biryani (₹250)
- Mutton Biryani (₹320)
- Fish Biryani (₹300)

Drinks:
- Soft Drink (₹50)
- Water Bottle (₹20)
- Iced Tea (₹60)
- Lassi (₹80)

---

## 💡 Tips & Tricks

### Search Menu
- Type in search box to filter items
- Search works on item names
- Try: "Chicken", "Biryani", "Kabab"

### Filter by Category
- Click category buttons to filter
- "All" shows everything
- Categories: Kabab, Grilled, Shawarma, Biryani, Drinks

### Adjust Quantities
- Click + to add more items
- Click - to reduce quantity
- Totals update automatically

### Payment Shortcut
- After entering amount, press Enter
- Button click also works

### Test with Sample Data
- Add 3-4 items
- Enter payment amount
- Complete payment
- Order saved to history
- Data persists even after refresh!

---

## 📊 What Gets Saved?

✅ **Automatically Saved:**
- All completed orders
- Order numbers (auto-incrementing)
- Date & time of each order
- Items, prices, quantities
- Payment amounts
- Customer change

✅ **Where Saved:**
- Browser's Local Storage
- Data persists across sessions
- Survives browser refresh
- Survives computer sleep

❌ **Not Saved:**
- Current incomplete order (resets on refresh)
- Browser history

---

## 🔧 Common Customizations

### Change Restaurant Name
1. Open `src/App.jsx`
2. Find line: `<h1>🍖 Arabian Grills & Kababs POS</h1>`
3. Replace with your restaurant name
4. Save file
5. Browser auto-refreshes

### Add New Menu Item
1. Open `src/data/menu.js`
2. Add new item in array:
```javascript
{ id: 17, name: 'Biryani Special', price: 350, category: 'Biryani' }
```
3. Save file
4. Item appears immediately in menu

### Change Tax Rate
1. Open `src/components/OrderTable.jsx`
2. Find: `const tax = subtotal * 0.05;`
3. Change 0.05 to your rate (0.10 = 10%, 0.12 = 12%)
4. Save file
5. Tax updates on orders

### Change Color Scheme
1. Open `src/App.css`
2. Edit colors in `:root` section
3. Change hex colors to your preference
4. Save file
5. Colors update across app

---

## 🌐 Access from Other Devices

**On Same Network:**

1. Find your computer's IP address
   ```bash
   ipconfig
   # Look for IPv4 Address (e.g., 192.168.1.100)
   ```

2. On other device, visit:
   ```
   http://192.168.1.100:5173
   ```

3. POS works on tablet, phone, other computer

**Use Cases:**
- Kitchen display on tablet
- Cashier on main PC
- Manager dashboard on mobile

---

## 🔄 Development Workflow

1. **Start app:** `npm run dev`
2. **Make changes** in code editor
3. **App auto-refreshes** in browser
4. **See changes immediately**
5. **Stop app:** Ctrl+C in terminal

---

## 📦 Project Files (Where to Find Things)

| What | Where |
|------|-------|
| Menu items | `src/data/menu.js` |
| Main POS page | `src/pages/BillingPage.jsx` |
| Kitchen display | `src/pages/KitchenDisplay.jsx` |
| Order history | `src/pages/OrdersPage.jsx` |
| Dashboard | `src/pages/Dashboard.jsx` |
| Colors/theme | `src/App.css` |
| Order calculations | `src/components/OrderTable.jsx` |
| Payment logic | `src/components/PaymentPanel.jsx` |
| Data storage | `src/utils/storage.js` |

---

## 🎓 Key Concepts

### How Orders Work
1. Customer orders → Items added to order array
2. Quantities managed → +/- buttons update
3. Totals calculated → Subtotal + Tax = Grand Total
4. Payment received → Order saved to Local Storage
5. Order number assigned → Auto-incrementing from 1001

### How Data Persists
- When order completed → Saved to browser's Local Storage
- Not deleted on refresh → Data stays until manually cleared
- Survives closing browser → Open app tomorrow, data still there
- Each device separate → Mobile and desktop have different storage

### How Kitchen Works
- New order created → Shows in Kitchen Display
- Kitchen staff marks done → Moves to completed section
- Multiple orders visible → Grid shows all pending

### How Dashboard Works
- Tracks today's orders → Only counts from today
- Calculates totals → All amounts for today
- Shows average → Total ÷ Number of orders

---

## 🚨 Important Notes

### Data Backup
- **Save important data** to file periodically
- **Screenshot orders** if critical
- **Note: Browser cache clear = data loss**

### Security
- No data sent to internet
- Everything stays on this computer/device
- Private and secure
- Add password protection if needed

### Performance
- App is very fast
- Works smooth on older computers
- Optimized for cashier workflow
- Responsive on tablets too

---

## 🎉 You're Ready!

Your POS system is ready to use. Start taking orders!

**Next steps:**
1. Customize menu items (add/remove as needed)
2. Train staff on the interface
3. Test payment workflow
4. Setup printing with your printer
5. Start using for real orders!

---

## 📞 Need Help?

| Issue | Check |
|-------|-------|
| App won't start | Terminal errors? Node installed? |
| Menu not showing | Browser console (F12) for errors |
| Orders not saving | Local Storage enabled? Not private mode? |
| Print not working | Pop-ups allowed? Printer connected? |
| Performance slow | Close other apps? Clear cache? |

---

**Happy Selling! 🍖🎉**

---

*Version 1.0.0 - Arabian Grills & Kababs POS System*  
*Created: April 10, 2026*
