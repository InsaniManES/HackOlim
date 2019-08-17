const express = require('express');
const connectDB = require('./config/mongoDB');
const passport = require('./config/google-passport');

const app = express();
app.use(passport.initialize());
app.use(passport.session());

// Connect Database
connectDB();

//examine
//var session = require('express-session'),
//bodyParser = require('body-parser');
//app.use(express.static('public'));
//app.use(session({ secret: 'cats' }));
//app.use(bodyParser.urlencoded({ extended: false }));

// Init Middleware
app.use(express.json({ extended: false })); // to use req.body

//app.get('/', (req, res) => res.send('API Running')); // GET request - http://localhost:5000/

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/languages', require('./routes/api/languages'));
//app.use('/api/words', require('./routes/api/words'));

const path = require('path');
const router = express.Router();
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

//var passport = require('passport');

app.use('/', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
