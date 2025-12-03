import Aluno from "../models/Aluno.js";
import Curso from "../models/Curso.js";


await Aluno.sync();
await Curso.sync();