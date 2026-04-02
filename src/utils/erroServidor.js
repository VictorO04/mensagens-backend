const erroServidor = (res, error) => {
    console.error(error);

    res.status(500).json({
        erro: "Erro interno do servidor"
    });
}

export default erroServidor;