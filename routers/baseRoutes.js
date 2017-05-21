import bookRouter from './bookRouter.js';

export default function(app,db) {
    let root = '/api';

    app.get("/", (req,res) => {
        res.send("welcome to my api")
    })

    app.use(root, bookRouter(db)); 
    //include other routers here...
}