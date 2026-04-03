import UsuarioModel from "../models/UsuarioModel.js";
import erroServidor from "../utils/erroServidor.js";
import idValido from "../utils/idValido.js";

export const postUsuario = async (req, res) => {
    try {
        const body = req.body;

        if (!body  || Object.keys(body).length === 0) {
            return res.status(400).json({
                erro: "Está faltando o corpo da requisição"
            });
        }
        
        const camposObrigatorios = ["nome", "email", "senha"];
        const faltando = camposObrigatorios.filter((c) => body[c] === undefined || body[c] === null || body[c] === "");
        if (faltando.length > 0) {
            return res.status(400).json({
                erro: `Campos faltando: ${faltando.join(", ")}`
            });
        }

        const { nome, email, senha, anonimo } = body;

        if(!email.includes("@")) {
            return res.status(400).json({
                erro: "Email inválido"
            });
        }
        
        const usuarioExistente = await UsuarioModel.buscarPorEmail(email);
        if (usuarioExistente) {
            return res.status(400).json({
                erro: "Email já está em uso"
            });
        }

        const novoUsuario = new UsuarioModel({ nome, email, anonimo });
        const usuario = await novoUsuario.criarUsuario(senha);

        res.status(201).json({
            mensagem: "Usuário criado com sucesso",
            usuario
        });
    } catch (error) {
        erroServidor(res, error);
    }
}

export const getUsuarios = async (req, res) => {
    try {
        const usuarios = await UsuarioModel.buscarUsuarios();

        res.json({
            mensagem: "Usuários encontrados com sucesso",
            usuarios
        });
    } catch (error) {
        erroServidor(res, error);
    }
}

export const getUsuario = async (req, res) => {
    try {
      const id = Number(req.params.id);

      if (!idValido(id)) {
        return res.status(400).json({
            erro: "Digite um ID válido"
        });
      }

      const usuario = await UsuarioModel.buscarUsuarioPorId(id);

      if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
      }

      res.status(200).json({
        mensagem: "Usuário encontrado com sucesso",
        usuario
      });
    } catch (error) {
        erroServidor(res, error);
    }
}