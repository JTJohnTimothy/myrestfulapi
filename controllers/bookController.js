//import baseController from './baseController';
//class extends baseController

import bookModel from '../models/bookModel';

export default class bookController {

    getBooks(req,res) {
        bookModel.find((err, results) => {
            if (err) res.send(500,"bookRouter err getallbooks", err)
            res.json(results);
        });
    }

    getBook(req,res) {
        bookModel.findById(req.params.bookId,(err, results) => {
            res.json(results);
        })
    }

    addBook(req,res){
        var book = new bookModel(req.body);
        book.save();
        res.send(book);
    }

    delBook(req,res){
        bookModel.findByIdAndRemove(req.params.bookId, (err, results) => {
            if (err) res.send(500,"bookRouter err delete book", err)
            res.json(results);
        })
    }

    updBook(req,res){
        //const book = {name: "MathBook", author: "Jane Doe", isbn: "1234567"}
        var book = {
            name : req.body.name,
            author : req.body.author,
            isbn : req.body.isbn
        }
        bookModel.findByIdAndUpdate(req.params.bookId, book, (err, results) => {
            if (err) res.send(500,"bookRouter err update book", err)
            res.json(results);
        })
    }
}