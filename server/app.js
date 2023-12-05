// requiring the dependencies
const express = require('express');
const dotenv = require('dotenv');
const app = express();


// Requiring the dbConnection file
require('./database/dbConnection');

// **************requiring the env file
dotenv.config({ path: './config.env' });

// ************ requiring the router module
app.use(require('./router/authentications'));

// Main Server location
app.get('/', (req, res) => {
    res.send('Hello from Server App.js')
})

// Initialzing the SERVER Port number
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`SERVER is running at Port ${PORT}`);
})