const express = require('express');
const path = require('path');
//this creates an express application
//const host = 'localhost';
const app = express();
// const port = 3000;
//morgan is a logging package for node js
const morgan = require('morgan');


app.use(morgan('dev'));

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

//incoming requests come through here and return responses
// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works'
//     });

// });

//first argument is a filter that filters out the types of requests to handle
//second argument is the handler for those types of requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//since the two lines above are supposed to handle the requests to their
//respective routes, if whatever reason the request doesn't go through these routes,
//the app.use below will handle the requests

app.use((req, res, next) => {

    //error object
    const error = new Error();

    //set error status code 
});

// app.get('/', (req, res) => {
//     //res.sendFile(path.join(__dirname, 'public'));
//     res.sendFile(path.join(__dirname, '/index.html'));
//     res.sendFile(path.join(__dirname, '/styles.css'));
    
// });

// app.use(express.static("public"));
// app.listen(port);

module.exports = app;