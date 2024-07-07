# Amazon Clone

This project is a front-end clone of the popular e-commerce platform Amazon, built using React.js and integrated with Firebase authentication and Stripe payment gateway.

## Features

- **User Authentication**: Utilizes Firebase authentication to allow users to sign up, log in, and log out securely.
- **Product Listing**: Displays various categories of products, including books/toys, fashion/beauty, and electronics.
- **Search Functionality**: Includes a search bar in the header to filter products based on user input.
- **Shopping Cart**: Allows users to add items to their cart and proceed to checkout.
- **Checkout Process**: Simulates a checkout flow using Stripe for processing payments.
- **Responsive Design**: Ensures a seamless user experience across desktop and mobile devices.

## Technologies Used

- React.js
- React Router
- Firebase (Authentication)
- Stripe (Payment Processing)
- HTML5
- CSS3
- JavaScript (ES6+)

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Amitesh220/Amazon-Clone.git
   cd amazon-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project and set up authentication.
   - Update the Firebase configuration in `firebase.js` with your project credentials.

4. Set up Stripe:
   - Create a Stripe account and obtain your API keys.
   - Update the Stripe public key in `App.js` with your Stripe public key.

5. Start the development server:

   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your web browser to view the app.

## Folder Structure

- `src/components`: Contains reusable UI components such as headers, footers, and product cards.
- `src/pages`: Includes main page components like Home, Login, Signup, and Thank You pages.
- `src/context`: Manages global state using React Context API and State Provider.
- `src/firebase.js`: Configures Firebase SDK for authentication.
- `src/App.js`: Main entry point of the application, defining routes and integrating components.

## Contributing

Contributions are welcome! If you have suggestions, enhancements, or find any issues, please feel free to create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
