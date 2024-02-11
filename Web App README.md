# Overview

As a software engineer seeking to enhance my skills and knowledge, I developed a web application called Heindel Carvings. This web app is designed to showcase wood carvings for sale from an Alaskan artist studio called Heindel Carvings. Through this project, I aimed to gain experience in web development using Node.js and Express.js, as well as practice creating dynamic web pages and handling user interactions.

To start the test server on your computer, you need to navigate to the project directory in your terminal and run the command `node server.js`. This will start the server, and you can access the first page of the app by opening a web browser and navigating to `http://localhost:3000`.

The purpose of writing this software was to gain practical experience in building a dynamic web application using Node.js and Express.js. Additionally, I wanted to create a functional e-commerce website that showcases products and allows users to add items to their cart, enter payment and shipping information, and proceed to checkout.

[Software Demo Video](http://youtube.link.goes.here)

# Web Pages

The web app consists of the following pages:

1. **Home Page (`/`)**: This page displays a list of wood carvings available for sale. Each carving is dynamically created based on the data stored in the server. Users can click on a carving to view its details.

2. **Carving Details Page (`/carving/:id`)**: This page displays detailed information about a specific wood carving selected by the user. The content is dynamically generated based on the carving's data retrieved from the server.

3. **Shopping Cart Page (`/cart`)**: This page displays the items currently in the user's shopping cart. Users can remove items from the cart or proceed to the payment page.

4. **Payment Page (`/payment`)**: This page allows users to enter their card and shipping information before proceeding to checkout. After submitting the payment information, the user is redirected to the checkout page.

5. **Checkout Page (`/checkout`)**: This page summarizes the user's order and allows them to review their information before finalizing the purchase.

The web app transitions between these pages based on user interactions such as clicking on a carving to view details, adding or removing items from the cart, and completing the payment process.

# Development Environment

I used the following tools to develop the software:

- **Visual Studio Code**: Integrated development environment (IDE) for writing and debugging code.
- **Node.js**: JavaScript runtime environment for executing server-side code.
- **Express.js**: Web application framework for Node.js used to build the server-side logic and handle HTTP requests.
- **EJS (Embedded JavaScript)**: Templating language used to generate dynamic HTML content on the server-side.

The programming language used for development was JavaScript. Additionally, I utilized various Node.js libraries, including Express.js, body-parser, and EJS, to simplify server-side development and handle HTTP requests and responses effectively.

# Useful Websites

Here are some websites that I found helpful in this project:

* [MDN Web Docs](https://developer.mozilla.org/en-US/): Comprehensive web development documentation and resources.
* [Express.js Documentation](https://expressjs.com/): Official documentation for the Express.js framework.
* [EJS Documentation](https://ejs.co/): Official documentation for the EJS templating language.
* [Stack Overflow](https://stackoverflow.com/): Community-driven question and answer website for programming-related queries.

# Future Work

In the future, I plan to:

* Implement user authentication and user accounts to allow users to save their cart and view order history.
* Enhance the checkout process with real payment processing integration.
* Improve the overall user interface and experience with additional styling and interactive features.
* Optimize the application for performance and scalability to handle a larger number of users and products efficiently.
