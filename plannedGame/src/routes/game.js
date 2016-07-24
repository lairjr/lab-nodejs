import express from 'express';
import controller from '../controllers/game';

const router = express.Router();

router.get('/game/:groupid', controller.getByGroupId);

export default router;
