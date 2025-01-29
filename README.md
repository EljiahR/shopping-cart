# Shopping Cart

This is a React-based shopping cart project that I built as part of [The Odin Project](https://www.theodinproject.com/) to practice working with React, state management, and component-based development.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)  
  - [Installation](#installation)  
  - [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Future Improvements](#future-improvements)  
- [License](#license)  

## Overview

This project helped me get hands-on experience with React, particularly in handling dynamic state changes within a shopping cart. It features product listings, a cart system, and basic routing for navigation. The goal was to create an interactive, user-friendly shopping experience while reinforcing my understanding of React fundamentals.

## Features

- Browse a selection of products.  
- Add and remove items from the cart.  
- View the total price and item count in the cart.  
- Navigate between the home page and cart page using React Router.  

## Technologies Used

- React  
- React Router  
- CSS Modules (or styled components, if applicable)  
- JavaScript (ES6+)  

## Getting Started

### Installation

To run the project locally:  

1. Clone the repository:  

   ```bash
   git clone https://github.com/EljiahR/shopping-cart.git
   cd shopping-cart
2. Install dependencies:

   ```bash
   npm install
3. Start the development server:

   ```bash
   npm start

Usage
The app will open in your browser at http://localhost:3000/.
Browse the available products and add them to the cart.
Click on the cart icon to view and manage your selected items.
Project Structure

```bash
shopping-cart/
├── src/
│   ├── components/   # Reusable components like Navbar, ProductCard, and Cart
│   ├── pages/        # Main pages like Home and Cart
│   ├── assets/       # Images and other static assets
│   ├── App.js        # Main application component
│   ├── index.js      # Entry point of the app
│   ├── styles/       # CSS styles (if applicable)
├── package.json
├── README.md
└── .gitignore
