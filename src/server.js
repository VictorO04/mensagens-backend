import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORTA = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.json({
        mensagem: "API ligada"
    });
});

app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não encontrada"
    });
})

app.listen(PORTA, () => {
    console.log(`Servidor aberto em: http://localhost:${PORTA}`);
});