import Aluno from "../models/Aluno.js";

class AlunoController {

    cadastrar = async (req, res) => {
        let nome = req.body.nome
        let email = req.body.email
        let telefone = req.body.telefone;
        let cpf = req.body.cpf;
        let status = req.body.status;


        let dados = {
            nome: nome,
            email: email,
            telefone: telefone,
            cpf: cpf,
            status: status,
        }

        Aluno.create(dados).then(function (aluno) {
            res.status(201).json({message: 'Usuário '+aluno.nome+' cadastrado com sucesso!'});
        }).catch(function (error) {
            res.status(500).json(error);
        })

    }//Fim do cadastrar

     consultar = async (req, res) => {
        try{
            const alunos = await Aluno.findAll()
            return res.status(200).json(alunos);
        }catch(err){
            return res.status(500).json(err);
        }
    }//Fim do Consultar

    editar = async (req, res) => {
        try{
            
            const id = req.body.id
            let {nome, email, telefone, cpf, status} = req.body;

            const aluno = await Aluno.findByPk(id)
            if(!aluno){
                return res.status(500).json({message: 'Aluno não encontrado!'})
            }
            
            await aluno.update({nome, email, username, password})
            return res.status(200).json({message: 'Aluno atualizado com sucesso!'});
        }catch(err){
            return res.status(500).json(err);
        }
    }//Fim do Editar

    excluir = async (req, res) => {
        try{
            const id = req.params.id;
            const aluno = await Aluno.findByPk(id)
            if(!aluno){
                return res.status(500).json({message:'Aluno não encontrado!'})
            }
            await aluno.destroy()
            return res.status(200).json({message: 'Aluno excluído com sucesso!'})
        }catch(err){
            return res.status(500).json(err);
        }
    }//Fim do Excluir

}

export default new AlunoController();