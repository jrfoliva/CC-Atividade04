import Aluno from "../Modelo/Aluno.js";
import Conexao from "./Conexao.js";

export default class AlunoDAO {

    async createDatabase() {
        let estadobd = false;
        const con = await Conexao();
        // Não funcionou utilizando todos os comandos na mesma query, por isso separei.
        await con.query('CREATE DATABASE IF NOT EXISTS db_ativ04;');
        await con.query('USE db_ativ04;');
        const [rows] = await con.query(' SHOW TABLES; ');

        // Caso tenha registro, significa que a tabela foi criada
        if (rows.length === 0) {
            await con.query(`CREATE TABLE IF NOT EXISTS alunos (
                id int not null auto_increment,
                nome varchar(30) not null,      
                ra varchar(11) not null unique,
                curso varchar(50) not null,
                termo int not null,
                constraint pk_alunos primary key(id)
                );`
            );

            const lista = [
                { nome: "Junior Freire Oliva", ra: "10482110183", curso: "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS - EAD", termo: 5 },
                { nome: "Matheus", ra: "11111111111", curso: "DIREITO", termo: 8 },
                { nome: "Veruska", ra: "22222222222", curso: "PEDAGOGIA", termo: 7 }
            ]

            for (const aluno of lista) {
                const sql = " INSERT INTO ALUNOS (nome, ra, curso, termo) values(?,?,?,?); "
                const valor = [aluno.nome, aluno.ra, aluno.curso, aluno.termo];
                await con.query(sql, valor);
            }
            estadobd = true;
        }
        else {
            estadobd = true;
        }
        return estadobd;
    }

    async consulta(id) {
        const con = await Conexao();
        let rows = [];
        let sql = '';
        if (!id) {
            sql = " SELECT * FROM ALUNOS; ";
            rows = await con.query(sql);
        }
        else {
            sql = "SELECT * FROM ALUNOS WHERE ID = ?; ";
            const valor = [id];
            rows = await con.query(sql, valor);
        }

        let listaAlunos = [];

        for (const row of rows[0]) {
            const aluno = new Aluno(row['id'], row['nome'], row['ra'], row['curso'], row['termo']);
            listaAlunos.push(aluno);
        }

        return listaAlunos;
    }
}