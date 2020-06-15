import '@babel/polyfill';
import express, { urlencoded, json } from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
const app = express();

//* DB Connection
require('./db/db-connection');

//* Settings
app.set('port', process.env.PORT || 3000);

//* Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(urlencoded({extended: false}));
app.use(json());

//* Public files
app.use(express.static(path.join(__dirname, 'public')));

//* Routes
app.use('/api/general', require('./routes/general.routes'));
app.use('/api/evaluations', require('./routes/evaluation.routes'));
app.use('/api/questions', require('./routes/questions.routes'));

async function main(){
 await app.listen(app.get('port'))
 console.log(`Server running on port ${app.get('port')}`);
}

main();

