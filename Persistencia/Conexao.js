import mysql2 from "mysql2/promise";

async function Conexao() {
    if (global.connection && global.state !== 'disconnected') {
        return global.connection;
    }

    const connection = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        password: "masterkey",
        database: "db_ativ04"
    });

    global.connection = connection;
    console.info("MySQL Connected!");
    return connection;
}

export default Conexao;