import {Router} from 'express'
import { obtenerUsuarios } from '../controllers/Usuarios.controller.js';

const router = Router()

router.get('/obtenerUsuarios', obtenerUsuarios);

export default router;