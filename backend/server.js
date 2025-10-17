import express from "express";
import cors from "cors";
import todoRoutes from "./src/routes/todoRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor backend rodando na porta ${PORT}`);
})