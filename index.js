import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Api Funcionando!')
})

import teste from './routes/teste.js'
app.use('/teste', teste)

import aluno from './routes/aluno.js'
app.use('/aluno', aluno)

import curso from './routes/cursos.js'
app.use('/cursos', curso)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})