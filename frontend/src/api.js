const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/todos';

const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Ocorreu um erro na API.');
    }
    return response.json();
};

const getTodos = async () => {
    const response = await fetch(API_URL);
    return handleResponse(response);
}

const createTodo = async (task) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task }),
    });
    return handleResponse(response);
};

const updateTodo = async (id, completed) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed }),
    });
    return handleResponse(response);
};

const deleteTodo = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if(!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erro ao deletar a tarefa');
    }
};

const api = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};

export default api;

