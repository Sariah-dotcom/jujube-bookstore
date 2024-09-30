import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { Book } from './models/bookModel.js';

dotenv.config();

const app = express();
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Define a test route
app.get('/', (req, res) => {
    return res.status(200).send('Jujube');
});

// Route to search for books by title or author
app.get('/books/search', async (req, res) => {
    try {
        const { title, author } = req.query;

        // Check if either title or author is provided in query parameters
        if (!title && !author) {
            return res.status(400).json({
                message: 'Please provide either a title or author to search for.',
            });
        }

        // Build search criteria based on query parameters
        const searchCriteria = {};
        if (title) {
            searchCriteria.title = new RegExp(title, 'i'); // 'i' makes it case-insensitive
        }
        if (author) {
            searchCriteria.author = new RegExp(author, 'i'); // 'i' makes it case-insensitive
        }

        // Search for books in the database
        const books = await Book.find(searchCriteria);

        // Return the search results
        if (books.length > 0) {
            return res.status(200).json(books);
        } else {
            return res.status(404).json({
                message: 'No books found matching the search criteria.',
            });
        }

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to save a new book
app.post('/books', async (req, res) => {
    try {
        // Check if all required fields are filled
        const { title, author, genre, publishYear, price } = req.body;
        if (!title || !author || !genre || !publishYear || !price) {
            return res.status(400).json({
                message: 'All fields are required.',
            });
        }

        // Create a new book object
        const newBook = {
            title,
            author,
            genre,
            publishYear,
            price,
        };

        // Save the new book to the database
        const book = await Book.create(newBook);
        return res.status(201).json(book);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to get all books
app.get('/books', async (req, res) => {
    try{
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch(error){
        console.log(error.message);
    }
});

// Route to get one book
app.get('/books/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const book = await Book.findById(id);
        return res.status(200).json(book);

    } catch(error){
        console.log(error.message);
    }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGOURL)
    .then(() => {
        console.log('App is connected to DB');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

// Start the server
app.listen(5555, () => {
    console.log('Server is running on port 5555');
});
