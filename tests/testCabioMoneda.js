import { Selector } from 'testcafe';

fixture`Calculadora de divisas`
  .page`https://practicacondevops.vercel.app/`;

test('Prueba 2: Cambio de moneda y reinicio del resultado', async (t) => {
    // Ingresar un valor en el campo de entrada
    await t.typeText('input[type="number"]', '50');

    // Seleccionar una moneda diferente (por ejemplo, Yenes)
    await t
      .click('select')
      .click(Selector('option').withText('JPY (Yenes)'));

    // Hacer clic en el botón de conversión
    await t.click('button');

    // Esperar a que el elemento con data-test="result" aparezca en el DOM
    await t.expect(Selector('[data-test="result"]').exists).ok();

    // Obtener el texto del elemento
    const resultText = await Selector('[data-test="result"]').innerText;

    // Extraer el valor numérico (por ejemplo, 276.00)
    const numericValue = parseFloat(resultText);

    // Verificar que el valor numérico sea mayor o igual a 0
    await t.expect(numericValue).gte(0);

    // Seleccionar otra moneda (por ejemplo, Dólares)
    await t
      .click('select')
      .click(Selector('option').withText('USD (Dólares)'));

    // Esperar a que el elemento con data-test="result" aparezca en el DOM nuevamente
    await t.expect(Selector('[data-test="result"]').exists).ok();

    // Obtener el texto del elemento después de cambiar la moneda
    const resultTextAfterCurrencyChange = await Selector('[data-test="result"]').innerText;

    // Verificar que el resultado se haya reiniciado a 0
    await t.expect(resultTextAfterCurrencyChange).eql('0 USD');
});
