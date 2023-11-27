const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000; // You can choose any port

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Enable parsing of JSON bodies

app.post('/login', (req, res) => {
  try {
    const { username, password } = req.body; // Assuming username and password are in the request body

    if (username === 'username' && password === 'password') {
      res.json({ value: true, msg: 'User is logged in'});
    } else {
      res.json({ value: false, msg: 'Invalid credentials. Please try again.' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ value: false, msg: 'Error during login' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
