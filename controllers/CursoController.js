import Curso from "../models/Curso.js";

class CursoController{

    salvar = function (req, res){
        const {descricao, horas, status} = req.body
        Curso.create({descricao, horas, status: 1}).then((categoria)=>{
            return res.status(200).json({msg: 'Curso '+Curso.descricao+' criado com sucesso'})
        }).catch((err)=>{
            return res.status(500).json(err)
        })
    }//Fim do Salvar

    consultar = async function (req, res){
        try{
            const cursos = await Curso.findAll({
                where: {
                    status: 1
                }
            })
            res.status(200).json(cursos)
        }catch(err){
            res.status(500).json(err)
        }
    }

    editar = async function (req, res){
        const id = req.body.id
        const {descricao, horas, status} = req.body
        const curso = await Curso.findByPk(id)
        try{
            await curso.update({descricao})
            res.status(201).json({message: 'Curso editada com sucesso!'})
        }catch(err){
            res.status(500).json(err)
        }
    }

    excluir = async function (req, res){
        try{
            const id = req.params.id;
            const cursos = await Curso.findByPk(id)
            await curso.update({status: 0})
            res.status(201).json({message: 'Curso removida com sucesso!'})
        }catch(err){
            res.status(500).json(err)
        }

    }

}

export default new CursoController();