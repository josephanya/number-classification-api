import express from 'express';
import NumberController from '../controllers/number.controller';
import { validateNumberParam } from '../middlewares/validation.middleware';

const router = express.Router();

router.get(
    '/classify-number',
    validateNumberParam,
    NumberController.checkNumber
);

export default router;