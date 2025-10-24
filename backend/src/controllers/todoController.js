import TodoModel from "../models/todoModel.js";

const getAllTodos = async (req, res) => {
    try {
        const todos = await TodoModel.findAll();
        res.json(todos.map(todo => ({ ...todo, completed: Boolean(todo.completed) })));
    } catch (error) {
        console.error("Erro ao processar a requisição:", error.message);
        res.status(500).json({ message: 'Erro ao buscar as tarefas.' });
    }
};

const createTodo = async (req, res) => {
    try {
        const { task } = req.body;
        if (!task) {
            return res.status(400).json({ message: 'O nome da tarefa é obrigatório.' });
        }
        const newTodo = await TodoModel.create(task);
        res.status(201).json({ ...newTodo, completed: Boolean(newTodo.completed) });
    } catch (error) {
        console.error("Erro ao processar a requisição:", error.message);
        res.status(500).json({ message: 'Erro ao adicionar a tarefa.' });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { completed } = req.body;

        if (typeof completed !== 'boolean') {
            return res.status(400).json({ message: "O campo 'completed' é obrigatório e deve ser um booleano (true/false)." });
        }

        const updatedTodo = await TodoModel.update(id, completed);

        if (!updatedTodo) {
            return res.status(404).json({ message: 'Tarefa não encontrada.' });
        }

        res.status(200).json({ ...updatedTodo, completed: Boolean(updatedTodo.completed) });
    } catch (error) {
        console.error("Erro ao processar a requisição:", error.message);
        res.status(500).json({ message: 'Erro ao atualizar a tarefa.' });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const changes = await TodoModel.destroy(id);

        if (changes === 0) {
            return res.status(404).json({ message: 'Tarefa não encontrada.' });
        }

        res.status(200).json({ message: 'Tarefa deletada com sucesso.' });
    } catch (error) {
        console.error("Erro ao processar a requisição:", error.message);
        res.status(500).json({ message: 'Erro ao deletar a tarefa.' });
    }
};

const todoController = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
};

export default todoController;