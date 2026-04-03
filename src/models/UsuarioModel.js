import bcrypt from "bcrypt";
import prisma from "../../lib/prisma.js";

export default class UsuarioModel {
    constructor({ id = null, nome, email, senha = null, anonimo = false, dataCadastro = null }) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.anonimo = anonimo;
        this.dataCadastro = dataCadastro;
    }

    async criarUsuario() {
        const senhaHash = await bcrypt.hash(this.senha, 10);

        return prisma.usuario.create({
            data: {
                nome: this.nome,
                email: this.email,
                senha: senhaHash,
                anonimo: this.anonimo
            },
            select: {
                id: true,
                nome: true,
                email: true,
                anonimo: true,
                dataCadastro: true
            }
        });
    }

    static async buscarUsuarios() {
        return prisma.usuario.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                anonimo: true,
                dataCadastro: true
            }
        });
    }

    static async buscarPorEmail(email) {
        return prisma.usuario.findUnique({
            where: { email }
        });
    }
}