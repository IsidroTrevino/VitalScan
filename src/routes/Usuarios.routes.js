import {Router} from 'express'
import { loginUser, formPost } from '../controllers/Usuarios.controller.js';
const router = Router()

router.post('/login', loginUser);
router.post('/form', formPost);

export default router;