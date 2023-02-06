const express = require('express');
const path = require('path');


//this creates an express application
const app = express();
const port = 3000;

//incoming requests come through here and return responses
// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'It works'
//     });

// });

// app.get('/', (req, res) => {
//     //res.sendFile(path.join(__dirname, 'public'));
//     res.sendFile(path.join(__dirname, '/index.html'));
//     res.sendFile(path.join(__dirname, '/styles.css'));
    
// });

app.use(express.static("public"));
app.listen(port);

module.exports = app;