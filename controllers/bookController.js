//import baseController from './baseController';
//class extends baseController

export default function(bookModel){
    
    var getBooks = (req,res) => {
        bookModel.find((err, results) => {
            if (err) res.status(500).send("bookRouter err getallbooks", err)
            res.json(results);
        });
    }

    var getBook = (req,res) => {
        bookModel.findById(req.params.bookId,(err, results) => {
            res.json(results);
        })
    }

    var addBook = (req,res) => {
        var book = new bookModel(req.body);
        book.save();
        res.send(book);
    }

    var delBook = (req,res) => {
        bookModel.findByIdAndRemove(req.params.bookId, (err, results) => {
            if (err) res.status(500).send("bookRouter err delete book", err)
            res.json(results);
        })
    }

    var updBook = (req,res) => {
        //const book = {name: "MathBook", author: "Jane Doe", isbn: "1234567"}
        console.log(req.body)
        var book = {
            name : req.body.name,
            author : req.body.author,
            isbn : req.body.isbn
        }
        console.log(book);
        bookModel.findByIdAndUpdate(req.params.bookId, book, (err, results) => {
            if (err) res.status(500).send("bookRouter err update book", err)
            res.json(results);
        })
    }
    return {
        getBooks : getBooks,
        getBook : getBook,
        addBook : addBook,
        delBook : delBook,
        updBook : updBook
    };
}