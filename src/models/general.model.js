import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let inscriptionSchema = new Schema({
    name: {type: String, required: [true, 'Name is required']},
    last_name: {type:String, required: [true, 'Last name is required']},
    DUI: {type:String, require:[true, 'DUI is required']},
    NIT: {type:String, required:[true, 'NIT is required']},
    date_birth: {type:Date, required:[true, 'Date of birth is required']},
    profession: [
        {
            name_profession: {type: String, required:true},
            institution: {type:String, required:true},
            year: {type:Number, require:true}
        }
    ],
    mastery: [
        {
            name_mastery: {type:String, require:true},
            institution: {type:String, require:true},
            year: {type:Number, require:true}
        }
    ],
    characteristic: {type: Array, required:[true, 'characteristic is required']},
    experience: [
        {
            name_institution: {type:String, require:true},
            subject: {type:String, require:true},
            year: {type:Number, require:true}
        }
    ],
    cellphone: {type:Number, required:[true, 'cellPhone is required']},
    workphone: {type:Number, required:[true, 'Work phone is required']},
    homephone: {type:Number, required:[true, 'Home phone is required']},
    address: {type:String, required: [true, 'Address is required']}
});

export default mongoose.model('Inscriptions', inscriptionSchema);