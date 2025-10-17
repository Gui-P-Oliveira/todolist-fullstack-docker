import sqlite3 from "sqlite3";
import { open } from "sqlite";


const setupDatabase = async () => {
    try{
        const db = await  open({
            filename: './database.db',
            driver: sqlite3.Database
        });

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