import express from 'express';
import bookModel from '../models/bookModel';

export default function(db) {
    let bookRouter = express.Router();
    let bookTable =  db.collection('books');   

    bookRouter.route('/books')
        .get((req,res) => {
            bookModel.find((err, results) => {
                if (err) res.status(500).send("bookRouter err getallbooks", err)
                res.json(results);
            });
        })

    bookRouter.route('/book/:bookId')
        .get((req,res) => {
            bookModel.findById(req.params.bookId,(err, results) => {
                res.json(results);
            })
        })

    bookRouter.route('/book')
        .post((req,res) => {
            const book = {name: "ScienceBook", author: "John Doe", isbn: "1234567"}
            bookTable.insert(book, (err, results) => {
                if (err) res.status(500).send("bookRouter err insert books", err)
                res.json(results);
            });
        })

    bookRouter.route('/book/:bookId')
        .put((req,res) => {
            const book = {name: "MathBook", author: "Jane Doe", isbn: "1234567"}
            bookModel.findByIdAndUpdate(req.params.bookId, book, (err, results) => {
                if (err) res.status(500).send("bookRouter err update book", err)
                res.json(results);
            })
        })

    bookRouter.route('/book/:bookId')
        .delete((req,res) => {
            bookModel.findByIdAndRemove(req.params.bookId, (err, results) => {
                if (err) res.status(500).send("bookRouter err delete book", err)
                res.json(results);
            })
        })

    return bookRouter;
}