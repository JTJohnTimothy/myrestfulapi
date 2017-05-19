import express from 'express';

export default function() {
    let bookRouter = express.Router();
    
    //call controller per route

    bookRouter.route('/books')
        .get((req,res) => {
            res.json({msg: "this is a collection of books"})
        })

    bookRouter.route('/book/bookId')
        .get((req,res) => {
            res.json({msg: "this is just 1 book"})
        })

    bookRouter.route('/book/update')
        .get((req,res) => {
            res.json({msg: "this is update book"})
        })

    bookRouter.route('/book/delete')
        .get((req,res) => {
            res.json({msg: "this is delete book"})
        })

    return bookRouter;
}