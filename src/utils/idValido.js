const idValido = (id) => {
    return typeof id === "number" && Number.isInteger(id) && id > 0;
}

export default idValido;