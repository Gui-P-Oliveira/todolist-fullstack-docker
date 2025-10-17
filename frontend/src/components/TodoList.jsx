import TodoItem from "./TodoItem";
import { List, Typography, Box, CircularProgress } from "@mui/material";

function TodoList({ loading, error, todos, onToggle, onDelete }) {
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Typography color="error" align="center" sx={{ mt: 4 }}>
                Erro: {error}
            </Typography>
        );
    }

    return (
        <List>
            {todos.length > 0 ? (
                todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))

            ) : (
                <Typography align="center" sx={{ color: 'grey.500', mt: 4}}>
                    Nenhuma tarefa encontrada. Adicione uma!
                </Typography>
            )}
        </List>
    );
}

export default TodoList;