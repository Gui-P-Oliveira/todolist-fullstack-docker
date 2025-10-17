import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <ListItem
            sx={{ bgcolor: '#1e1e1e', mb: 1, borderRadius: 1 }}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => onDelete(todo.id)}>
                    <DeleteIcon sx={{ color: '#f44336' }} />
                </IconButton>
            }
        >
            <Checkbox
                edge="start"
                checked={todo.completed}
                onChange={() => onToggle(todo.id, !todo.completed)}
                sx={{ color: '#90caf9', '&.Mui-checked': { color: '#90caf9' } }}
            />
            <ListItemText
                primary={todo.task}
                sx={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? 'grey' : 'white'
                }}
            />
        </ListItem>
    );
}

export default TodoItem;