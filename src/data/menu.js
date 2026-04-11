// Menu items for Arabian Grills & Kababs
export const menuItems = [
  // Kababs
  { id: 1, name: 'Chicken Kabab', category: 'Kabab', image: '/images/chicken-kabab.jpg', options: [{name: 'Half', price: 230}, {name: 'Full', price: 460}] },
  { id: 3, name: 'Seekh Kabab', price: 200, category: 'Kabab', image: '/images/seekh-kabab.jpg' },

  // Grilled Items
  { id: 5, name: 'Grilled Chicken', price: 320, category: 'Grilled', image: '/images/grilled-chicken.jpg' },
    { id: 6, name: 'Al faham Chicken', category: 'Grilled', image: '/images/grilled-beef.jpg', options: [{name: 'Half', price: 230}, {name: 'Full', price: 460}] },

  // Shawarma
    { id: 8, name: 'Chicken Shawarma', price: 150, category: 'Shawarma', image: '/images/chicken-shawarma.jpg' },


  // Biryani
  { id: 10, name: 'Chicken Biryani', price: 250, category: 'Biryani', image: '/images/chicken-biryani.jpg' },

  // Drinks
  { id: 13, name: 'Soft Drink', price: 50, category: 'Drinks', image: '/images/soft-drink.jpg' },
  { id: 14, name: 'Water Bottle', price: 20, category: 'Drinks', image: '/images/water-bottle.jpg' },
  { id: 15, name: 'Iced Tea', price: 60, category: 'Drinks', image: '/images/iced-tea.jpg' },
  { id: 16, name: 'Lassi', price: 80, category: 'Drinks', image: '/images/lassi.jpg' },
];

export const categories = ['All', 'Kabab', 'Grilled', 'Shawarma', 'Biryani', 'Drinks'];
