import express from 'express';
const router = express.Router();
import Aluno from '../controllers/AlunoController.js';

router.post('/', Aluno.cadastrar)
//router.get('/', Usuario.consultar)
// router.put('/', Usuario.editar)
// router.delete('/:id', Usuario.excluir)

export default router;