import Curso from "../models/Curso.js";

class CursoController{

    salvar = function (req, res){
        const {descricao, horas, status} = req.body
        Categoria.create({descricao, horas, status: 1}).then((categoria)=>{
            return res.status(200).json({msg: 'Categoria '+categoria.descricao+' criada com sucesso'})
        }).catch((err)=>{
            return res.status(500).json(err)
        })
    }//Fim do Salvar

}

export default new CursoController();