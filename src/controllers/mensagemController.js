import MensagemModel from "../models/MensagemModel.js";
import erroServidor from "../utils/erroServidor.js";

export const getMensagens = async (req, res) => {
    try {
        const mensagens = await MensagemModel.buscarMensagens();

        res.json({
            mensagem: "Mensagens encontradas com sucesso",
            dados: mensagens
        });
    } catch (error) {
        erroServidor(res, error);
    }
}