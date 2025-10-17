import dbPromise from "../database.js";

const db = await dbPromise;

async function findAll() {
    return db.all('SELECT * FROM todos');
}

async function create(task) {
    const result = await db.run('INSERT INTO todos (task) VALUES (?)', [task]);
    return db.get('SELECT * FROM todos WHERE id = ?', [result.lastID]);
}

async function update(id, completed) {
    const result = await db.run('UPDATE todos SET completed = ? WHERE id = ?', [completed, id]);
    if (result.changes === 0) return null; 
    return db.get('SELECT * FROM todos WHERE id = ?', [id]);
}

async function destroy(id) {
    const result = await db.run('DELETE FROM todos WHERE id = ?', [id]);
    return result.changes; 
}

const TodoModel = {
    findAll,
    create,
    update,
    destroy
};

export default TodoModel;