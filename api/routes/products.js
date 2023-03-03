//this products.js route should handle any URLs where /products is at the end

const express = require('express');

//comes with express, helps us handle routes
const router = express.Router();

//since this route file handles /products URLs, there is no need to 
//specify it again here since doing so would yield /products/products
//the second argument is the actual handler of the route
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) =>{ 
    res.status(201).json({
        message: 'Handling POST requests to /products'
    });
});

//varibles are set up with a colon and then the variable name which you will be able to extract
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    if(id === 'special') {
        res.status(200).json({
            message: 'You are the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }

});

//update endpoint
router.patch('/:productId', (req, res, next) =>{ 
    res.status(200).json({
        message: 'Updated product!'
    });
});

//delete endpoint for handling delete requests to this /products/productID URL
router.delete('/:productId', (req, res, next) =>{ 
    res.status(200).json({
        message: 'Deleted product!'
    });
});

//this line makes the router variable with all the handlers
//available to other classes

module.exports = router;