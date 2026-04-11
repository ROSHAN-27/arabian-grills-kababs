// Menu items for Arabian Grills & Kababs
export const menuItems = [
  // Kababs
  { id: 1, name: 'Chicken Kabab', category: 'Kabab', image: '/images/chicken-kabab.jpg', options: [{name: '250gm', price: 100}, {name: '500gm', price: 200}, {name: '750gm', price: 300}, {name: '1000gm', price: 400}] },
  { id: 3, name: 'Seekh Kabab', price: 200, category: 'Kabab', image: '/images/seekh-kabab.jpg' },

  // Grilled Items
  { id: 5, name: 'Grilled Chicken', category: 'Grilled', image: '/images/grilled-chicken.jpg', options: [{name: 'Half', price: 230}, {name: 'Full', price: 460}] },
    { id: 6, name: 'Al faham Chicken', category: 'Grilled', image: '/images/grilled-chicken.jpg', options: [{name: 'Half', price: 230}, {name: 'Full', price: 460}] },

  // Kolkata Kati Rolls
    { id: 8, name: 'Chicken Roll', price: 80, category: 'Kolkata Kati Rolls', image: '/images/chicken-shawarma.jpg' },
    { id: 9, name: 'Paneer Roll', price: 70, category: 'Kolkata Kati Rolls', image: '/images/chicken-shawarma.jpg' },
    { id: 17, name: 'Egg Roll', price: 60, category: 'Kolkata Kati Rolls', image: '/images/chicken-shawarma.jpg' },
    { id: 18, name: 'Egg Chicken Roll', price: 90, category: 'Kolkata Kati Rolls', image: '/images/chicken-shawarma.jpg' },



  // Biryani
  { id: 10, name: 'Chicken Biryani', price: 250, category: 'Biryani', image: '/images/chicken-biryani.jpg' },

  // Drinks
  { id: 13, name: 'Soft Drink', price: 50, category: 'Drinks', image: '/images/soft-drink.jpg' },
  { id: 14, name: 'Water Bottle', price: 20, category: 'Drinks', image: '/images/water-bottle.jpg' },
  { id: 15, name: 'Iced Tea', price: 60, category: 'Drinks', image: '/images/iced-tea.jpg' },
  { id: 16, name: 'Lassi', price: 80, category: 'Drinks', image: '/images/lassi.jpg' },
];

export const categories = ['All', 'Kabab', 'Grilled', 'Kolkata Kati Rolls', 'Biryani', 'Drinks'];
