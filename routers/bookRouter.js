import express from 'express';
import bookController from '../controllers/bookController';

export default function() {
    let bookRouter = express.Router();

    var {getBooks,getBook,addBook,updBook,delBook} = new bookController();

    bookRouter.route('/books').get(getBooks)
    bookRouter.route('/book/:bookId').get(getBook)
    bookRouter.route('/book').post(addBook)
    bookRouter.route('/book/:bookId').put(updBook)
    bookRouter.route('/book/:bookId').delete(delBook)

    return bookRouter;
}