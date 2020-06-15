import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let evaluationSchema = new Schema({
    items: [
        {
            anios: {type:Number},
            disponibilidad: {type:Number},
            conocimiento: {type:Number},
            powerpoint: {type:Number},
            eduDistancia: {type:Number},
            LMS: {type:Number},
            responsabilidad: {type:Number},
            comunicacion:{type:Number},
            investigacion: {type:Number},
            interactuar: {type:Number}
        }
    ],
    total_score: {type: Number, required:[true, 'Score is required']},
    IdGeneral: {type: Schema.Types.ObjectId, ref: 'Inscriptions' ,required:[true, 'ID is required'], autopopulate: true}
});

evaluationSchema.plugin(require('mongoose-autopopulate'));

export default mongoose.model('Evaluation', evaluationSchema);
