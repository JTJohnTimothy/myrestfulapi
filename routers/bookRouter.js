import express from 'express';
import bookModel from '../models/bookModel';
import bookController from '../controllers/bookController';

export default function() {
    let bookRouter = express.Router();

    bookRouter.route('/books')
        .get(bookController(bookModel).getBooks)
    bookRouter.route('/book/:bookId')
        .get(bookController(bookModel).getBook)
    bookRouter.route('/book')
        .post(bookController(bookModel).addBook)
    bookRouter.route('/book/:bookId')
        .put(bookController(bookModel).updBook)
    bookRouter.route('/book/:bookId')
        .delete(bookController(bookModel).delBook)

    return bookRouter;
}