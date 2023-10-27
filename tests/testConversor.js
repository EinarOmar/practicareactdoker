import { Selector } from 'testcafe';

fixture`Calculadora de divisas`.page`https://practicacondevops.vercel.app/`;

test('Prueba 1: Conversión correcta', async (t) => {
  // Ingresar un valor en el campo de entrada
  await t.typeText('input[type="number"]', '75');

  // Seleccionar una moneda (por ejemplo, Dólares Canadienses)
  await t
    .click('select')
    .click(Selector('option').withText('CAD (Dólares Canadienses)'));

  // Hacer clic en el botón de conversión
  await t.click('button');

  // Realizar el cálculo manual (75 MXN * 0.064) y verificar que el resultado sea igual
  await t.expect(Selector('div').withText('4.89').exists).ok();
});
