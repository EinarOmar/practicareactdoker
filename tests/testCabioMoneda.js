import { Selector } from 'testcafe';

fixture`Calculadora de divisas`.page`https://practicacondevops.vercel.app/`;

test('Prueba 2: Cambio de moneda y reinicio del resultado', async (t) => {
    // Ingresar un valor en el campo de entrada
    await t.typeText('input[type="number"]', '50');
  
    // Seleccionar una moneda diferente (por ejemplo, Yenes)
    await t
      .click('select')
      .click(Selector('option').withText('JPY (Yenes)'));
  
    // Hacer clic en el botón de conversión
    await t.click('button');
  
    // Verificar que el resultado sea mayor que 0
    await t.expect(Selector('div').withText(/\d+\.\d+/).innerText).gte(0);
  
    // Seleccionar otra moneda (por ejemplo, Dólares)
    await t
      .click('select')
      .click(Selector('option').withText('USD (Dólares)'));
  
    // Verificar que el resultado se haya reiniciado a 0
    await t.expect(Selector('div').withText('0').exists).ok();
  });
  