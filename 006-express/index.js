const express      = require('express');
const { v4: uuid } = require('uuid');

const Store = require('./store');
const Book  = require('./Book');

const store = new Store();

const app = express();
app.use(express.json());

app.get('/api/user/login', (req, res) => {
    res.status(201);
    res.json({ id: 1, mail: 'test@mail.ru' });
});

app.get('/api/books', (req, res) => {
    res.json(store.getBooks());
});

app.get('/api/books/:id', (req, res) => {
    const { id } = req.params;
    const book   = store.getBookById(id);

    if (book) {
        res.json(book);
    }
    else {
        res.status(404);
        res.json('404 | страница не найдена');
    }

});

app.post('/api/books/', (req, res) => {
    const { title, authors } = req.body;

    if (title && authors) {
        const newBook = new Book(req.body);
        store.addBook(newBook);

        res.status(201);
        res.json(newBook);
    }
    else {
        res.status(400);
        res.json('400 | Bad request | Не задано обязательное поле title или authors');
    }
});

app.put('/api/books/:id', (req, res) => {
    const { id }             = req.params;
    const { title, authors } = req.body;

    if (!title || !authors) {
        res.status(400);
        res.json('400 | Bad request | Не задано обязательное поле title или authors');
        return;
    }

    const book = store.updateBook(req.body, id);
    if (book) {
        res.json(book);
    }
    else {
        res.status(404);
        res.json('404 | страница не найдена');
    }
});

app.delete('/api/books/:id', (req, res) => {
    const books  = store.getBooks();
    const { id } = req.params;
    const idx    = store.getIndex(id);

    if (idx !== -1) {
        books.splice(idx, 1);
        res.json('ok');
    }
    else {
        res.status(404);
        res.json('404 | страница не найдена');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);