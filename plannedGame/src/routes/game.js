import express from 'express';
import controller from '../controllers/game';

const router = express.Router();

router.get('/game', controller.get);

export default router;
