const express = require('express');
const cors = require('cors');
const { nasaRoute } = require('./routes/nasaRoute');

const app = express();
const port = 8080;


app.use(express.json());

// Enable CORS with specific options
const corsOptions = {
    origin: 'http://localhost:4200', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
  };
  
app.use(cors(corsOptions));

// route for NASA API
app.use('/api',nasaRoute);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
