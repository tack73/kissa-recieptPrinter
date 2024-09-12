import express from 'express';
import recieptPrint from '../modules/generate-print.mjs';

const router = express.Router();

router.post('/', (req, res) => {
    recieptPrint(req.body).then(() => {
        res.status(200).json({ msg: 'Print Success' });
    }).catch((err) => {
        res.status(500).json({ msg: 'Print Failed' });
    });
});

export default router;