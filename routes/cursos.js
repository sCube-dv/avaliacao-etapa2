import express from 'express'
const router = express.Router()
import Curso from '../controllers/CursoController.js'

router.post('/', Curso.salvar)
router.get('/', Curso.consultar)
router.put('/', Curso.editar)
router.delete('/:id', Curso.excluir)

export default router