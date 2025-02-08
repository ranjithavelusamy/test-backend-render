

const express = require('express');
const app = express();

const booksRoutes = require('./routes/books');
const authorsRoutes = require('./routes/authors');

app.use('/books', booksRoutes);
app.use('/authors', authorsRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Book API');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


///react app,vite
//npm create vite@latest

//npx create-react-app reacttest
