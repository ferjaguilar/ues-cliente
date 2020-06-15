import express from 'express';
import Evaluation from '../models/evaluation.model';
const router = express.Router();

// ?Add new evaluation
router.post('/new-evaluation', async (req, res)=>{
 let body = req.body;
 try {
    let evaluationDB = await Evaluation.create(body);
    res.json({status: 'OK', evaluationDB});
 } catch (error) {
    return res.status(500).json({
        message: 'Ocurrio un error',
        error
    });
 }
});


router.get('/all-evaluations', async(req, res)=>{
   try {
      let evaluationsDB = await Evaluation.find();
     
      res.json({status: 'OK', evaluationsDB});
   } catch (error) {
      return res.status(500).json({
         message: 'Ocurrio un error',
         error
     });
   }
});











module.exports = router;

