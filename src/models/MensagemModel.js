import prisma from "../../lib/prisma.js";

export default class MensagemModel {
    constructor ({id = null, titulo, texto, likes = 0, dataPublicacao = null, usuarioId, usuario}) {
        this.id = id;
        this.titulo = titulo;
        this.texto = texto;
        this.likes = likes;
        this.dataPublicacao = dataPublicacao;
        this.usuarioId = usuarioId;
        this.usuario = usuario;
    }
    static async buscarMensagens() {
        const mensagens = await prisma.mensagem.findMany({
            include: {
                usuario: {
                    select: {
                        nome: true
                    }
                }
            }
        });

        return mensagens.map((m) => new MensagemModel(m)); 
    }
}