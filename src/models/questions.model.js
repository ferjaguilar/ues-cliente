import mongoose from 'mongoose';
const Schema = mongoose.Schema;


let questionsSchema = new Schema({
   email: {type:String, required:true},
    created_at: {type:Date, default:Date.now()}
});

export default mongoose.model('Questions', questionsSchema);

