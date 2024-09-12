import express from 'express';
import recieptsRouter from './reciepts.mjs';

const router = express.Router();
router.use('/reciepts', recieptsRouter);



export default router;