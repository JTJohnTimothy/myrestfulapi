import app from "../../server.js";
import request from "supertest";

describe("Integration test for all routes", () => {
    var cb = function(done) {
        return function(err, res) {
            if (err) return done(err);
            //console.log(res.body)
            done();
        }
    }

    //should also return "welcome to my api", doesnt work idky TODO
    describe("GET /", () => {
        it("should return 200", done => {
            request(app)
                .get("/")
                .expect(200)
                .end(cb(done))
        })
    })

    describe("GET /api/books", () => {
        it("should return 200", done => {
            request(app)
                .get("/api/books")
                .expect(200)
                .end(cb(done))
        })
    })

    describe("POST /api/book", () => {
        it("should return 200", done => {
            request(app)
                .post("/api/book")
                .set('Accept', 'application/json')
                .send({
                    'name':'TestBook',
                    'author':'Tester',
                    'isbn':'1010101'
                })
                .expect(200)
                .end(function (err, res){
                    if (err) return done(err);
                    //console.log("1",res.body)
                    request(app)
                        .delete(`/api/book/${res.body._id}`)
                        .end(cb(done))
                })
        })
    })

    describe("GET /api/book/:bookId", () => {
        it("should return 200", done => {
            var bookId = "5922769b5dd9fc1ff8491de4";
            request(app)
                .get(`/api/book/${bookId}`)
                .expect(200)
                .end(cb(done))
        })
    })

    describe("PUT /api/book/:bookId", () => {
        it("should return 200", done => {
            var bookId = "5922cc3a757495009020d78f";
            request(app)
                .put("/api/book/:bookId")
                .set('Accept', 'application/json')
                .send({
                    'name':'Testing Book',
                    'author':'Mark the Tester',
                    'isbn':'11111'
                })
                .expect(200)
                .end(cb(done))
        })
    })

    describe("DEL /api/book/:bookId", () => {
        it("should return 200", done => {
            request(app)
                .post("/api/book")
                .set('Accept', 'application/json')
                .send({
                    'name':'TestBook',
                    'author':'Tester',
                    'isbn':'1010101'
                })
                .end(function (err, res){
                    if (err) return done(err);
                    //console.log("1",res.body)
                    request(app)
                        .delete(`/api/book/${res.body._id}`)
                        .expect(200)
                        .end(cb(done))
                })

        })
    })

})