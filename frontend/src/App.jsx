import { useState, useEffect } from 'react';
import api from './api';
import TodoList from './components/TodoList';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await api.getTodos();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const handleCreateTodo = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    try {
      const newTodo = await api.createTodo(input);
      setTodos([...todos, newTodo]);
      setInput('');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleToggleTodo = async (id, completed) => {
    try {
      const updatedTodo = await api.updateTodo(id, completed);
      setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await api.deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, color: 'white' }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Minhas Tarefas
      </Typography>

      <Box component="form" onSubmit={handleCreateTodo} sx={{ display: 'flex', gap: 1, mb: 4 }}>
        <TextField
          variant="outlined"
          label="Adicionar nova tarefa..."
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          InputLabelProps={{ style: { color: '#9e9e9e' } }}
          sx={{ 
            input: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#9e9e9e' },
              '&:hover fieldset': { borderColor: 'white' },
            },
          }}
        />
        <Button type="submit" variant="contained" endIcon={<AddIcon />}>
          Adicionar
        </Button>
      </Box>

      <TodoList 
        loading={loading}
        error={error}
        todos={todos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </Container>
  );
}

export default App;