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

}

export default new AlunoController();