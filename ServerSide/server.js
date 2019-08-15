const express = require('express');
const connectDB = require('./config/mongoDB');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false })); // to use req.body

app.get('/', (req, res) => res.send('API Running')); //GET request - http://localhost:5000/

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/words', require('./routes/api/words'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
