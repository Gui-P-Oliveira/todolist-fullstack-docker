import express from 'express';
import todoController from '../controllers/todoController.js';

const router = express.Router();

router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);
router.patch('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;