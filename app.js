const express = require('express');
const path = require('path'); // Add this line to include the path module
const app = express();
const port = 3000;
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes')
require('dotenv').config();

const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI)
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use morgan middleware with 'dev' format for concise output colored by response status
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));



//blog routes
app.use('/blogs',blogRoutes);

app.get('/about', (req, res) => {
  res.render('about', {title:'About'});
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
