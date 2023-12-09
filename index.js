const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for comments (replace with a database in a real application)
const comments = [];

// Serve HTML file with comment form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submissions
app.post('/submit_comment', (req, res) => {
    // Access form data
    const name = req.body.name;
    const commentText = req.body.comment;

    // Save the comment (in-memory storage, replace with database storage)
    comments.push({ name, comment: commentText });

    // Redirect back to the homepage
    res.redirect('/');
});

// Serve comments API
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
