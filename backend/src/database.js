import sqlite3 from "sqlite3";
import { open } from "sqlite";


const setupDatabase = async () => {
    try{
        // 1. Lê o caminho da variável de ambiente 'DATABASE_PATH'
        // 2. Se não for definida, usa '/app/data/database.db' como padrão
        const dbPath = process.env.DATABASE_PATH || '/app/data/database.db';

        console.log(`Tentando conectar ao banco de dados em: ${dbPath}`);

        const db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        })        

        await db.exec(`
            CREATE TABLE IF NOT EXISTS todos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                task TEXT NOT NULL,
                completed BOOLEAN DEFAULT 0
            );
        `);

        console.log("Conectado ao banco de dados e tabela 'todos' pronta.");

        return db;
    } catch (error) {
        console.error("Erro ao configurar o db:", error.message);
        process.exit(1);
    }
}

const dbPromise = setupDatabase();

export default dbPromise;