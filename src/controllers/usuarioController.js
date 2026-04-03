import UsuarioModel from "../models/UsuarioModel.js";
import erroServidor from "../utils/erroServidor.js";

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.buscarUsuarios();

        res.json({
            mensagem: "Usuários encontrados com sucesso",
            dados: usuarios
        });
    } catch (error) {
        erroServidor(res, error);
    }
}