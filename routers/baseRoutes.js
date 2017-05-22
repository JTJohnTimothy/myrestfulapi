import bookRouter from './bookRouter.js';

export default function(app) {
    let root = '/api';

    app.get("/", (req,res) => {
        res.send("welcome to my api")
    })

    app.use(root, bookRouter()); 
    //include other routers here...
}