import express from 'express';
import Inscriptions from '../models/general.model';
const router = express.Router();

// ? Add new incription
router.post('/new-inscripcion', async(req, res)=>{
    let body = req.body;
    try {
        let inscriptionDB = await Inscriptions.create(body);
        let personInfo = await Inscriptions.find({DUI: inscriptionDB.DUI});
        res.json({status: 'OK', personInfo});
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error',
            error
        });
    }
});




module.exports = router;