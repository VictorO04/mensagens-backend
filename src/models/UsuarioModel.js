import prisma from "../../lib/prisma.js";

export default class UsuarioModel {
    constructor({ id = null, nome, email, anonimo = false, dataCadastro = null }) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.anonimo = anonimo;
        this.dataCadastro = dataCadastro;
    }

    static async buscarUsuarios() {
        const usuarios = await prisma.usuario.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                anonimo: true,
                dataCadastro: true
            }
        });

        return usuarios.map((u) => new UsuarioModel(u));
    }
}