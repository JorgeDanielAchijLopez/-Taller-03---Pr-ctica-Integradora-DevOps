function calcularTotal(precio, cantidad) {
    if (precio < 0) {
        throw new Error("El precio no puede ser negativo");
    }

    return precio * cantidad;
}

function aplicarDescuento(total, porcentaje) {
    // TODO: validar que porcentaje esté entre 0 y 100
    return total - (total * porcentaje / 100);
}

module.exports = {
    calcularTotal,
    aplicarDescuento
};