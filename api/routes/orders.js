const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /orders'
    });
});

//201 status code is used when a new item is created
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Order was created'
    });
});

//get a specific order
router.get('/:orderId', (req, res, next) =>{ 
    res.status(200).json({
        message: 'Order details',
        id: req.params.orderId
    });
});

module.exports = router;