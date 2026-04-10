// Local Storage Utilities
const ORDERS_KEY = 'pos_orders';
const NEXT_ORDER_ID_KEY = 'pos_next_order_id';

export const storage = {
  // Get all orders from localStorage
  getOrders: () => {
    const orders = localStorage.getItem(ORDERS_KEY);
    return orders ? JSON.parse(orders) : [];
  },

  // Save a new order
  saveOrder: (orderData) => {
    const orders = storage.getOrders();
    const orderNumber = storage.getNextOrderNumber();
    
    const newOrder = {
      orderNumber,
      items: orderData.items,
      subtotal: orderData.subtotal,
      tax: orderData.tax,
      total: orderData.total,
      amountGiven: orderData.amountGiven,
      change: orderData.change,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    orders.push(newOrder);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    localStorage.setItem(NEXT_ORDER_ID_KEY, String(orderNumber + 1));
    
    return newOrder;
  },

  // Get next order number
  getNextOrderNumber: () => {
    const nextId = localStorage.getItem(NEXT_ORDER_ID_KEY);
    return nextId ? parseInt(nextId) : 1001;
  },

  // Clear all orders (for demo/testing)
  clearOrders: () => {
    localStorage.removeItem(ORDERS_KEY);
    localStorage.removeItem(NEXT_ORDER_ID_KEY);
  },

  // Get today's orders
  getTodayOrders: () => {
    const today = new Date().toLocaleDateString();
    const orders = storage.getOrders();
    return orders.filter(order => order.date === today);
  },

  // Calculate sales statistics
  getSalesStats: () => {
    const todayOrders = storage.getTodayOrders();
    const totalSales = todayOrders.reduce((sum, order) => sum + order.total, 0);
    const totalOrders = todayOrders.length;
    const averageOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;

    return {
      totalSales: totalSales.toFixed(2),
      totalOrders,
      averageOrderValue: averageOrderValue.toFixed(2),
    };
  },
};
