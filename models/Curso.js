import banco from '../config/banco.js'

const Curso = banco.sequelize.define('tb_cursos', {
    id:{
        type: banco.Sequelize.UUID,
        primaryKey: true,
        defaultValue: banco.Sequelize.UUIDV4,
    },
    descricao:{
        type: banco.Sequelize.STRING(100),
    },
    horas:{
        type: banco.Sequelize.INTEGER,
    },
    status:{
        type: banco.Sequelize.INTEGER,
    }
})

export default Curso;