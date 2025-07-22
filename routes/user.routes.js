import express from 'express';
import { createUser } from '../controllers/user.controller.js';
import { createUserSchema } from '../utils/user.validation.js';
import { validate } from '../middlewares/validate.js';

const router = express.Router();

router.post('/', validate(createUserSchema), createUser);

export default router;
