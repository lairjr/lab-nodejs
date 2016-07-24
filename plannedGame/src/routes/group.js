import express from 'express';
import controller from '../controllers/group';

const router = express.Router();

router.get('/group', controller.get);
router.get('/group/:groupid', controller.getById);

export default router;
