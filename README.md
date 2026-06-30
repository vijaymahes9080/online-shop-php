# 📚 Boi Mela - Online Book Shop

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PHP Version](https://img.shields.io/badge/PHP-%3E%3D%207.4-8892BF.svg)](https://www.php.net/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-blue.svg)](https://www.mysql.com/)
[![HTML5](https://img.shields.io/badge/HTML5-Structure-orange.svg)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Styling-blue.svg)](https://www.w3.org/Style/CSS/)

Boi Mela is a modern, feature-rich web-based Online Book Shop designed for literature enthusiasts. This application provides an intuitive shopping experience for users to browse, search, and purchase books, along with a comprehensive administrative control panel for managing products, orders, users, and customer messages.

![Boi Mela Banner](images/boimela_banner.png)

## 📋 Table of Contents
- [Introduction](#-boi-mela---online-book-shop)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Directory Structure & Pages](#-directory-structure--pages)
  - [User Pages](#user-pages)
  - [Admin Pages](#admin-pages)
- [Database Setup](#-database-setup)
- [Installation & Usage](#-installation--usage)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact Information](#-contact-information)
- [Screenshots & Visuals](#-screenshots--visuals)

---

## ✨ Features

### 👤 User Interface
- **User Authentication:** Secure registration and login flows ([register.php](register.php) / [index.php](index.php)).
- **Book Catalog:** Browse books by categories with pagination and details ([shop.php](shop.php)).
- **Live Search:** Fast search function to locate specific book titles ([search_page.php](search_page.php)).
- **Shopping Cart:** Add, update quantities, or remove books dynamically ([cart.php](cart.php)).
- **Checkout Flow:** Purchase books with address inputs and details ([checkout.php](checkout.php)).
- **PayPal Sandbox Integration:** Demo payment method allowing virtual checkouts via PayPal ([orders.php](orders.php)).
- **PDF Invoice Download:** Generate and download professional PDF invoices for orders powered by TCPDF ([print.php](print.php)).
- **User Reviews & Authors:** Dedicated sections showcasing top authors and customer feedback ([about.php](about.php)).
- **Contact Forms:** Quick feedback and inquiry submissions to admins ([contact.php](contact.php)).

### 🔑 Admin Dashboard
- **Analytics & Metrics:** View summaries of total orders, pending/completed status, and messages ([admin_page.php](admin_page.php)).
- **Inventory Management:** Add new books (titles, description, pricing, images, categories) and update inventory ([admin_products.php](admin_products.php)).
- **Order Tracking:** Track all customer orders, modify payment statuses, or cancel transactions ([admin_orders.php](admin_orders.php)).
- **User Control:** View registered customers and delete accounts when needed ([admin_users.php](admin_users.php)).
- **Message Center:** Read and manage feedback submissions from customers ([admin_contacts.php](admin_contacts.php)).

---

## 🛠️ Technologies Used
- **Backend:** PHP 7.4+ (Native session handling & procedural mysqli connection)
- **Database:** MySQL 5.7+
- **Frontend:** HTML5, CSS3, JavaScript, FontAwesome Icons (CDN)
- **Libraries:** [TCPDF](TCPDF/) (Integrated for PDF invoice generation)
- **Payment Gateway:** PayPal REST API (Sandbox mode)

---

## 📂 Directory Structure & Pages

### User Pages
- [index.php](index.php) / [login.php](login.php) / [register.php](register.php) - Authentication and entry points.
- [home.php](home.php) - Bookstore welcome page with slider, promotions, and new arrivals.
- [about.php](about.php) - Store background story, customer reviews, and featured authors.
- [shop.php](shop.php) - Complete inventory listing with details.
- [search_page.php](search_page.php) - Specific search form and result container.
- [cart.php](cart.php) - Current cart items, subtotals, and update options.
- [checkout.php](checkout.php) - Delivery details, summary, and order confirmation.
- [orders.php](orders.php) - User order status history, PayPal checkout triggers, and invoice links.
- [print.php](print.php) - Backend endpoint converting order details into PDF invoices.
- [sendmail.php](sendmail.php) - Helper script for contact mail functions.

### Admin Pages
- [admin_page.php](admin_page.php) - Overall site statistics and navigation dashboard.
- [admin_products.php](admin_products.php) - Management grid for adding and editing book details.
- [admin_orders.php](admin_orders.php) - Comprehensive order validation and status updates.
- [admin_users.php](admin_users.php) - Listing of registered admin/customer accounts.
- [admin_contacts.php](admin_contacts.php) - Messaging inbox for customer feedback.

---

## 🗄️ Database Setup
The application uses MySQL to store all details. The schema is preconfigured in [vijay_book_shop.sql](vijay_book_shop.sql).

### Tables:
- `users` - Client and admin credentials.
- `products` - Book information including title, author details, image paths, and pricing.
- `cart` - Temporary sessions of items selected by customers.
- `orders` - Order history, shipping addresses, transaction IDs, and billing amounts.
- `message` - Contact submissions and inquiries.

---

## 🚀 Installation & Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/vijaymahes9080/online-shop-php.git
   cd online-shop-php
   ```

2. **Set up the Database:**
   - Open **phpMyAdmin** on your local server environment (e.g., XAMPP/WAMP).
   - Create a database named `vijay_book_shop`.
   - Import the [vijay_book_shop.sql](vijay_book_shop.sql) file into the database.

3. **Configure Database Connection:**
   - Verify connection settings in [config.php](config.php):
     ```php
     $conn = mysqli_connect('localhost', 'root', '', 'vijay_book_shop');
     ```

4. **Run the Project:**
   - Move the directory to your web server root (`htdocs` or `www`).
   - Start Apache and MySQL services.
   - Access the site in your browser at `http://localhost/online-shop-php/`.

---

## 🤝 Contributing
Contributions to the Boi Mela website are highly appreciated! 
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/NewFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/NewFeature`).
5. Open a Pull Request.

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact Information
- **Author:** Vijay Mahes
- **GitHub:** [vijaymahes9080](https://github.com/vijaymahes9080)
- **Email:** [vijaypradhap2004@gmail.com](mailto:vijaypradhap2004@gmail.com)

---

## 📸 Screenshots & Visuals

Here is a preview of the Boi Mela online shop:

### Repository Banner
![Boi Mela Banner](images/boimela_banner.png)

### Book Showcase Grid
![Boi Mela Showcase](images/boimela_showcase.png)


<!-- contribution checkpoint 1 -->

<!-- contribution checkpoint 2 -->

<!-- contribution checkpoint 3 -->

<!-- contribution checkpoint 4 -->

<!-- contribution checkpoint 5 -->

<!-- contribution checkpoint 6 -->
