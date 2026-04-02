import express from "express";
import dotenv from "dotenv";
import mensagensRoutes from "./routes/mensagemRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORTA = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.json({
        mensagem: "API ligada"
    });
});

app.use("/api/mensagens", mensagensRoutes);

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não encontrada"
    });
})


app.listen(PORTA, () => {
    console.log(`Servidor aberto em: http://localhost:${PORTA}`);
});