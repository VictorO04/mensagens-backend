import bcrypt from "bcrypt";
import prisma from "../../lib/prisma.js";

export default class UsuarioModel {
    constructor({ id = null, nome, email, anonimo = false, dataCadastro = null }) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.anonimo = anonimo;
        this.dataCadastro = dataCadastro;
    }

    async criarUsuario(senha) {
        const senhaHash = await bcrypt.hash(senha, 10);

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

    static async buscarUsuarioPorId(id) {
        const usuario = await prisma.usuario.findUnique({
            where: { id },
            select: {
                id: true,
                nome: true,
                email: true,
                anonimo: true,
                dataCadastro: true
            }
        });

        if (!usuario) {
            return null;
        }

        return new UsuarioModel(usuario);
    }

    static async buscarPorEmail(email) {
        return prisma.usuario.findUnique({
            where: { email }
        });
    }
}