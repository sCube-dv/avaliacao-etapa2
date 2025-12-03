import banco from '../config/banco.js'
import Curso from './Curso.js';

const Aluno = banco.sequelize.define('tb_alunos', {
    id:{
        type: banco.Sequelize.UUID,
        primaryKey: true,
        defaultValue: banco.Sequelize.UUIDV4,
    },
    nome:{
        type: banco.Sequelize.STRING(100),
    },
    email:{
        type: banco.Sequelize.STRING(100),
    },
    telefone:{
        type: banco.Sequelize.STRING(20),
    },
    cpf:{
        type: banco.Sequelize.STRING(20),
    },
    status:{
        type: banco.Sequelize.INTEGER,
    }
})

Aluno.belongsTo(Curso,{
    foreignKey:'curso_id',
    constraint: true,
    as: 'curso',
})

export default Aluno;