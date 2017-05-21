import mongoose from 'mongoose'

var Schema = mongoose.Schema;

export default mongoose.model('book',
    new Schema({
        name: { type: String },
        author: { type: String },
        isbn: { type: String }
    })
)