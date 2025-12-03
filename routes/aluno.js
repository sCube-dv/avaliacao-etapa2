import express from 'express';
const router = express.Router();
import Aluno from '../controllers/AlunoController.js';

router.post('/', Aluno.cadastrar)
router.get('/', Aluno.consultar)
router.put('/', Aluno.editar)
router.delete('/:id', Aluno.excluir)

export default router;