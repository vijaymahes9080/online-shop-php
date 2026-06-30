// Local Database State Management using localStorage

// Initial default database data if not already present
const defaultProducts = [
  { id: 1, name: 'নিবিড় গণিত', price: 200, image: 'book_1.jpg' },
  { id: 2, name: 'অঙ্ক ভাইয়া', price: 176, image: 'book_2.jpg' },
  { id: 3, name: 'ভাল্লাগে না', price: 170, image: 'book_3.jpg' },
  { id: 4, name: 'আমার এক নদীর জীবন', price: 229, image: 'book_4.jpg' },
  { id: 12, name: 'Red Queen Novel', price: 5, image: 'red_queen.jpg' },
  { id: 17, name: 'Bash And LUCY', price: 200, image: 'bash_and_lucy-2.jpg' },
  { id: 18, name: 'BE WELL BEE', price: 80, image: 'be_well_bee.jpg' },
  { id: 19, name: 'Red Queen', price: 700, image: 'red_queen.jpg' },
  { id: 20, name: 'The Word Of Abstract Art', price: 300, image: 'the_world.jpg' },
  { id: 21, name: 'Happy Lemon', price: 33, image: 'the_happy_lemon.jpg' },
  { id: 22, name: 'The Girl Of INK & Stars', price: 300, image: 'the_girl_of_ink_and_stars.jpg' }
];

const defaultUsers = [
  { id: 1, name: 'Vijay Mahes', email: 'admin@gmail.com', password: 'admin', user_type: 'admin' },
  { id: 2, name: 'Test User', email: 'user@gmail.com', password: 'user', user_type: 'user' }
];

// Initialize localStorage DB
function initDB() {
  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(defaultProducts));
  }
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(defaultUsers));
  }
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
  }
  if (!localStorage.getItem('orders')) {
    localStorage.setItem('orders', JSON.stringify([]));
  }
  if (!localStorage.getItem('messages')) {
    localStorage.setItem('messages', JSON.stringify([]));
  }
}

// Call initialization
initDB();

// ---------------- PRODUCTS ----------------
function getProducts() {
  return JSON.parse(localStorage.getItem('products')) || [];
}

function saveProducts(products) {
  localStorage.setItem('products', JSON.stringify(products));
}

function addProduct(name, price, image) {
  const products = getProducts();
  const id = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
  products.push({ id, name, price: parseFloat(price), image });
  saveProducts(products);
  return true;
}

function deleteProduct(id) {
  let products = getProducts();
  products = products.filter(p => p.id !== parseInt(id));
  saveProducts(products);
  return true;
}

// ---------------- USERS & AUTH ----------------
function getUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function registerUser(name, email, password, user_type = 'user') {
  const users = getUsers();
  const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
  if (exists) return { success: false, message: 'User already exists!' };

  const id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  users.push({ id, name, email, password, user_type });
  saveUsers(users);
  return { success: true, message: 'Registered successfully!' };
}

// Simple MD5 simulation or plaintext (plain text is perfect for static demo login)
function loginUser(email, password) {
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  if (user) {
    sessionStorage.setItem('current_user', JSON.stringify(user));
    return { success: true, user };
  }
  return { success: false, message: 'Incorrect email or password!' };
}

function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem('current_user'));
}

// Handles user-box info display and bindings
function updateHeaderNav() {
  const user = getCurrentUser();
  const userBtn = document.querySelector('#user-btn');
  const userBox = document.querySelector('.header .header-2 .user-box');
  const cartNumberSpan = document.querySelector('.header .header-2 a[href="cart.html"] span');
  
  if (user) {
    if (userBox) {
      userBox.querySelector('p:nth-child(1) span').textContent = user.name;
      userBox.querySelector('p:nth-child(2) span').textContent = user.email;
    }
    if (cartNumberSpan) {
      cartNumberSpan.textContent = `(${getCartCount(user.id)})`;
    }
  } else {
    if (cartNumberSpan) {
      cartNumberSpan.textContent = '(0)';
    }
  }
}

function logoutUser() {
  sessionStorage.removeItem('current_user');
  window.location.href = 'login.html';
}

function checkAuth(roleRequired = null) {
  const user = getCurrentUser();
  if (!user) {
    window.location.href = 'login.html';
    return null;
  }
  if (roleRequired && user.user_type !== roleRequired) {
    window.location.href = user.user_type === 'admin' ? 'admin_page.html' : 'home.html';
    return null;
  }
  return user;
}

// ---------------- CART ----------------
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function getCartCount(userId) {
  const cart = getCart();
  return cart.filter(item => item.user_id === userId).reduce((sum, item) => sum + item.quantity, 0);
}

function getUserCart(userId) {
  const cart = getCart();
  return cart.filter(item => item.user_id === userId);
}

function addToCart(userId, productName, productPrice, productImage, quantity = 1) {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(item => item.user_id === userId && item.name === productName);
  
  if (existingItemIndex > -1) {
    return { success: false, message: 'Already added to cart!' };
  } else {
    const id = cart.length > 0 ? Math.max(...cart.map(c => c.id)) + 1 : 1;
    cart.push({
      id,
      user_id: userId,
      name: productName,
      price: parseFloat(productPrice),
      image: productImage,
      quantity: parseInt(quantity)
    });
    saveCart(cart);
    return { success: true, message: 'Product added to cart!' };
  }
}

function updateCartItemQuantity(cartId, quantity) {
  const cart = getCart();
  const item = cart.find(item => item.id === parseInt(cartId));
  if (item) {
    item.quantity = parseInt(quantity);
    saveCart(cart);
    return true;
  }
  return false;
}

function deleteCartItem(cartId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== parseInt(cartId));
  saveCart(cart);
  return true;
}

function clearUserCart(userId) {
  let cart = getCart();
  cart = cart.filter(item => item.user_id !== userId);
  saveCart(cart);
  return true;
}

// ---------------- ORDERS ----------------
function getOrders() {
  return JSON.parse(localStorage.getItem('orders')) || [];
}

function saveOrders(orders) {
  localStorage.setItem('orders', JSON.stringify(orders));
}

function placeOrder(userId, name, number, email, method, address, productsList, totalPrice) {
  const orders = getOrders();
  const id = orders.length > 0 ? Math.max(...orders.map(o => o.id)) + 1 : 1;
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const mm = months[today.getMonth()];
  const yyyy = today.getFullYear();
  const placed_on = `${dd}-${mm}-${yyyy}`;

  orders.push({
    id,
    user_id: userId,
    name,
    number,
    email,
    method,
    address,
    total_products: productsList,
    total_price: parseFloat(totalPrice),
    placed_on,
    payment_status: 'pending'
  });

  saveOrders(orders);
  clearUserCart(userId);
  return true;
}

function getUserOrders(userId) {
  const orders = getOrders();
  return orders.filter(o => o.user_id === userId);
}

function updateOrderStatus(orderId, status) {
  const orders = getOrders();
  const order = orders.find(o => o.id === parseInt(orderId));
  if (order) {
    order.payment_status = status;
    saveOrders(orders);
    return true;
  }
  return false;
}

// Delete an order
function deleteOrder(orderId) {
  let orders = getOrders();
  orders = orders.filter(o => o.id !== parseInt(orderId));
  saveOrders(orders);
  return true;
}

// ---------------- MESSAGES ----------------
function getMessages() {
  return JSON.parse(localStorage.getItem('messages')) || [];
}

function saveMessages(messages) {
  localStorage.setItem('messages', JSON.stringify(messages));
}

function addMessage(userId, name, email, number, messageContent) {
  const messages = getMessages();
  const id = messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1;
  messages.push({
    id,
    user_id: userId,
    name,
    email,
    number,
    message: messageContent
  });
  saveMessages(messages);
  return true;
}

function deleteMessage(messageId) {
  let messages = getMessages();
  messages = messages.filter(m => m.id !== parseInt(messageId));
  saveMessages(messages);
  return true;
}

// Helper to show dynamic message alert overlays
function showNotification(messageText) {
  const oldMessage = document.querySelector('.message');
  if (oldMessage) oldMessage.remove();
  
  const div = document.createElement('div');
  div.className = 'message';
  div.innerHTML = `
     <span>${messageText}</span>
     <i class="fas fa-times" onclick="this.parentElement.remove();"></i>
  `;
  document.body.prepend(div);
  setTimeout(() => div.remove(), 4000);
}
