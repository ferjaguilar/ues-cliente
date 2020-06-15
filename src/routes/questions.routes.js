import express from 'express';
import Questions from '../models/questions.model';
const router = express.Router();

// ? Add new question
router.post('/new-question', async(req, res)=>{
    let body = req.body;
    try {
        let questionDB = await Questions.create(body);
        res.json({status: 'Ok', questionDB});
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error',
            error
        });
    }

});

router.get('/all-questions', async(req, res)=>{
    try {
        let questionsDB = await Questions.find();
        res.json({status: 'Ok', questionsDB});
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error',
            error
        });
    }
});

module.exports = router;