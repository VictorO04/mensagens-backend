import prisma from "../../lib/prisma.js";

export default class MensagemModel {
    static async buscarMensagens() {
        return prisma.mensagem.findMany();
    }
}