const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();

// Configure Mustache as the view engine
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

// Set the directory for your views (where your mustache files are located)
app.set('views', __dirname + '/views');

// Route to serve index.mustache
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
