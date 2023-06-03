import mysql2 from "mysql2/promise";

async function Conexao() {
    if (global.connection && global.state !== 'disconnected') {
        return global.connection;
    }

    const connection = await mysql2.createConnection({
        host: "db_mysql",
        user: "root",
        password: "masterkey",
        port: 3306,
        //database: "db_ativ04"
    });

    
    global.connection = connection;
    console.info("MySQL Connected!");
    return connection;
}

export default Conexao;