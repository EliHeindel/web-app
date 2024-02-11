const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Dummy data for wood carvings
const carvings = [
    { id: 1, name: 'Bear Carving', price: 50 },
    { id: 2, name: 'Eagle Carving', price: 75 },
    { id: 3, name: 'Salmon Carving', price: 60 }
];

// Dummy data for cart items
const cart = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Home page
app.get('/', (req, res) => {
    res.render('index', { carvings });
});

// Carving details page
app.get('/carving/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const carving = carvings.find(c => c.id === id);
    if (!carving) {
        res.status(404).send('Carving not found');
    } else {
        res.render('carving', { carving });
    }
});

// Shopping cart page
app.get('/cart', (req, res) => {
    res.render('cart', { cart });
});

// Handle form submission to add item to cart
app.post('/cart', (req, res) => {
    const { id } = req.body;
    const carving = carvings.find(c => c.id === parseInt(id));
    if (carving) {
        cart.push(carving);
        console.log(`Added ${carving.name} to cart`);
        res.redirect('/cart');
    } else {
        res.status(404).send('Carving not found');
    }
});

// Payment page
app.get('/payment', (req, res) => {
    res.render('payment');
});

// Handle form submission from payment page
app.post('/payment', (req, res) => {
    // Process payment and shipping information here
    // Redirect to checkout page after processing
    res.redirect('/checkout');
});

// Checkout page
app.get('/checkout', (req, res) => {
    res.render('checkout', { cart });
});

// Handle form submission from checkout page
app.post('/checkout', (req, res) => {
    // Process order and finalize purchase here
    // Clear cart after purchase
    cart.length = 0;
    res.send('Order confirmed!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

