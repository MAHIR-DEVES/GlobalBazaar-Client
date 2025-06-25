# GlobalBazaar - E-commerce Frontend

🌐 Global Bazaar Live Site: https://windy-cast.surge.sh

![React](https://img.shields.io/badge/React-18.x-blue)
![Vite](https://img.shields.io/badge/Vite-4.x-yellow)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-cyan)

This repository contains the **frontend** of GlobalBazaar, an e-commerce
platform built with React, Vite, and TailwindCSS.

## ✨ Key Features

- **Product Catalog** with filtering by category
- **Shopping Cart** functionality
- **JWT Authentication** (Login/Register)
- **Order Management**
- **Responsive Design** for all devices

## 🛠 Tech Stack

- **Frontend**: React.js
- **Styling**: TailwindCSS + DaisyUI
- **State Management**: React Query / Context API
- **Routing**: React Router DOM
- **Build Tool**: Vite

## 🚀 Setup Instructions

### Prerequisites

1. Node.js (v18+)
2. Yarn or npm

### Installation

```bash
# 1. Clone the repository
git clone <frontend-repo-url>
cd globalbazaar-frontend

# 2. Install dependencies
yarn install  # or npm install

# 3. Configure environment variables
Create a .env file with:
VITE_API_BASE_URL=http://localhost:3000
```

### Running the App

```bash
yarn dev  # or npm run dev
```

App will run at: [http://localhost:5173](http://localhost:5173)

## 📂 Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable components
├── contexts/        # Context providers
├── hooks/           # Custom hooks
├── pages/           # Page components
├── routes/          # App routing
├── services/        # API service functions
├── styles/          # Global styles
└── utils/           # Utility functions
```

## 🔗 API Integration

The frontend communicates with these backend endpoints:

### Authentication

```js
POST / jwt; // Gets JWT token
```

### Products

```js
GET /get-allProducts         // All products
GET /singleProduct/:id       // Single product details
GET /filterCategory?category=:category  // Filter by category
```

### Orders

```js
POST /orders                // Create new order
GET /getAllOrder/:email     // Get user's orders
DELETE /orders/:id          // Cancel order
```

## 🌟 Additional Features

- **Marquee Animation** for featured products
- **Quantity Update** system
- **Toast Notifications** for user actions
- **Loading Skeletons** for better UX

## 📜 License

MIT License

---

**Note for Developers**:

- Always use environment variables for API base URLs
- Implement proper error handling for API calls
- Follow React best practices for component structure
