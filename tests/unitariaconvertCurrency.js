import { convertCurrency } from "../src/App";

test("Prueba Unitaria 2: Verificar que la función de conversión funcione correctamente", () => {
  const exchangeRates = {
    USD: 0.049,
    EUR: 0.042,
    GBP: 0.036,
    JPY: 5.52,
    CAD: 0.064,
    AUD: 0.07,
    CHF: 0.045,
  };

  // Prueba la conversión con un valor válido
  expect(convertCurrency(100, "USD", exchangeRates)).toBe(4.1);

  // Prueba la conversión con un valor no válido
  expect(convertCurrency(0, "EUR", exchangeRates)).toBe(0);

  // Prueba la conversión con un valor vacío
  expect(convertCurrency("", "GBP", exchangeRates)).toBe(0);

  // Prueba la conversión con una moneda no válida
  expect(convertCurrency(50, "XYZ", exchangeRates)).toBe(0);
});
