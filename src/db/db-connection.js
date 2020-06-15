import mongoose from 'mongoose';

//* Connection MongoDB //
let uri = 'mongodb+srv://fjrivas:Chocolate@cluster0-p5nlu.mongodb.net/ues-project?retryWrites=true&w=majority';
let config = {useNewUrlParser: true, useUnifiedTopology: true};

async function db(){
    await mongoose.connect(uri, config);
    console.log('MongoDB is connected');
}

db();