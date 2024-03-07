// Import the Express framework
const express = require('express');

// Create an Express application
const app = express();

// Import the CORS middleware
const cors = require("cors");



// Set the port number to 5000
const port = 5000;


//middleware
//###########################
// Enable JSON parsing for incoming requests
app.use(express.json()); // req.body
// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

//ROUTES
//Register and Login routes
app.use("/auth", require("./jwtAuth"));





// Define a route for the root URL
app.get('/', (req, res) => res.send('Hello World!'));

// Start the application and listen on port 5000
app.listen(port, () => console.log(`Bucket buddy app listening on port: ${port}`));
