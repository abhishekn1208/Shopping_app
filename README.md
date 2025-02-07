# Shopping Cart and Purchase Flow with User Authentication and Server Integration.

This project is a fully functional shopping cart and purchase flow system built using React, Vite, Redux, useEffect, and Axios. It includes user authentication, product listing, product details page, shopping cart management, purchase functionality, and server integration via webhooks.

Features
User Authentication:

Login functionality with username (email) and password.
Uses the Reqres API for login authentication (https://reqres.in/api/login).
After successful login, a token is stored for future authenticated requests.
Product Listing Page (PLP):

Display a list of available products with name, price, and a button to view more details.
Dynamically updates the shopping cart icon to reflect the number of items in the cart.
Product Details Page (PDP):

View detailed information about the product (e.g., description, images, specifications).
Add products to the shopping cart.
Shopping Cart:

View a list of items added to the cart, including product name, quantity, and total price.
Adjust the quantity of each product in the cart, with the total price updating dynamically.
Making a Purchase:

Buy the products in the cart.
Sends relevant purchase data (user info, purchased items, total price) to a server using a webhook URL obtained from Webhook.site.
Error Handling:

Clear error messages for issues such as insufficient stock or failed purchase.
Navigation:

Easy navigation between PLP, PDP, and shopping cart screens.
Technologies Used
React (for building the UI components)
Vite (for fast development and bundling)
Redux (for state management)
useEffect (for handling side effects and API calls)
Axios (for making HTTP requests)

Installation
Prerequisites
Ensure you have Node.js and npm installed.

Install Node.js if not already installed.
Steps
Clone the repository:

bash
Copy
git clone https://github.com/yourusername/shopping-cart-app.git
Navigate to the project directory:

bash
Copy
cd shopping-cart-app
Install the dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm run dev
This will start the Vite development server and the app will be accessible at http://localhost:3000.

How to Use
Login:

Open the app, and you will be prompted to log in.
Enter the following credentials to log in:
Email: eve.holt@reqres.in
Password: cityslicka
Viewing Products:

After logging in, you will be redirected to the Product Listing Page (PLP), where you can view all available products.
Viewing Product Details:

Click on any product to view its detailed information on the Product Details Page (PDP).
Adding Products to Cart:

On the PDP, click the "Add to Cart" button to add the product to your cart.
The cart icon will dynamically update to reflect the number of items in your cart.
Viewing and Adjusting Cart Items:

Navigate to the shopping cart screen to view your added products.
You can increase or decrease the quantity of any item in the cart, and the total price will update automatically.
Making a Purchase:

Once you're satisfied with the items in your cart, click the "Buy" button to make a purchase.
After the purchase, relevant purchase data will be sent to a server via a webhook.

API Integration
Login API:
POST request to https://reqres.in/api/login with email and password to authenticate the user.
On success, receive a token that will be used for future requests.
Webhook Integration:
After making a successful purchase, data is sent to https://webhook.site/ (or any webhook URL of your choice).
The data includes:
User information
Items in the cart
Total purchase price
Error Handling
If an error occurs during any action (login, adding to cart, or purchase), the following errors will be displayed:

Login Errors: Invalid username or password.
Cart Errors: Issues such as insufficient stock.
Purchase Errors: Failure to process the payment or complete the order.

Components:
1.Navbar
This component serves as the main navigation bar for the e-commerce application. It provides the following features:

Displays the shop’s logo and name.
Provides navigation links to key sections like:
Products: Links to the product listing page.
Cart: Links to the shopping cart page and displays the total number of items in the cart.
Login/Logout: Allows users to log in if unauthenticated or log out if authenticated.
Features
1. Navigation Links:
Products: Takes the user to the products page.
Cart: Directs the user to the shopping cart page, showing the number of items currently in the cart.
Login/Logout: If the user is not logged in, they are shown a Login button; if logged in, the button changes to Log out.
2. Cart Item Counter:
The number of items in the shopping cart is dynamically calculated and displayed next to the Cart link.
3. User Authentication Handling:
The Navbar uses localStorage to determine whether the user is authenticated based on a stored token.
If the user is logged in, the Navbar displays a "Log out" link, and if logged out, the "Login" link is shown.
On logout, the authentication token is removed from localStorage and the user is redirected to the login page.

How It Works
Authentication:

When the component loads, it checks if the user has a valid authentication token stored in localStorage. If present, the Log out button is displayed; otherwise, the Login button is shown.
When the user clicks Log out, the token is removed from localStorage, and they are redirected to the login page.
Cart Item Counter:

The component accesses the cart state using useSelector from Redux.
It calculates the total number of items in the cart by summing up the quantity of each item and displays this number next to the Cart link.
Navigation:

The component uses React Router's Link component to navigate between pages:
"/" for the products page.
"/cart" for the shopping cart page.
"/login" for the login page.

2.Product Page:
The ProductPage component is responsible for displaying a list of products, fetching product data from an API, and providing functionality for users to add products to their shopping cart or view more details about a product.

Features
1. Product Listing
The component fetches product data from an API (https://fakestoreapi.com/products).
Each product is displayed with the following details:
Product image.
Product name.
Product price.
2. Add to Cart
A button to add the product to the shopping cart.
The button dispatches an action (addToCart) with the product information to update the Redux store.
3. View More Details
A "View More" button is provided to navigate to a detailed view of the selected product.
4. Loading and Error States
Displays a loading message while data is being fetched.
Displays an error message if there is an issue fetching product data.

How It Works
Fetching Product Data:

When the component mounts, it triggers the fetchProductData function to fetch data from the API.
It uses axios to send a GET request to https://fakestoreapi.com/products.
If successful, the product data is stored in the state and displayed on the page.
If there’s an error, an error message is displayed.
Displaying Products:

The products are displayed in a grid layout with details such as the name, price, and image.
Each product card also has two buttons:
Add to Cart: Adds the product to the shopping cart.
View More: Navigates to a product details page using React Router.
Loading State:

If the data is being fetched, a loading message is shown. If there's an error during the fetch, an error message is displayed.
Add to Cart:

When the Add to Cart button is clicked, the selected product is dispatched to the Redux store using the addToCart action, and the cart is updated.
Navigation:

The View More button navigates to a detailed product page using react-router-dom.
