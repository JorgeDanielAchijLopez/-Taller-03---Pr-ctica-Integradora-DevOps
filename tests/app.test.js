const {
    calcularTotal,
    aplicarDescuento
} = require("../src/app");

test("calcula correctamente el total", () => {
    expect(calcularTotal(100, 2)).toBe(200);
});

test("aplica correctamente un descuento", () => {
    expect(aplicarDescuento(100, 10)).toBe(90);
});

test("rechaza precios negativos", () => {
    expect(() => calcularTotal(-100, 2))
        .toThrow("El precio no puede ser negativo");
});