import express from 'express';
import controller from '../controllers/group';

const router = express.Router();

router.get('/group', controller.get);

export default router;
