
import { Selector } from 'testcafe';

fixture`Currency Calculator Test`
  .page`http://localhost:3000`; // Cambia esto por la URL de tu aplicación

test('Conversión de moneda', async t => {
  const input = Selector('input');
  const select = Selector('select');
  const button = Selector('button');
  const result = Selector('div').withText('0 USD'); // Asegúrate de que la prueba refleje el resultado inicial

  await t
    .typeText(input, '100')
    .click(button)
    .expect(result.textContent).eql('4.90 USD');
});

test('Cambio de moneda', async t => {
  const select = Selector('select');
  const result = Selector('div').withText('0 USD');
  
  await t
    .click(select)
    .click(Selector('option').withText('EUR (Euros)'))
    .expect(result.textContent).eql('0 EUR');
});

test('Reiniciar resultado al cambiar moneda', async t => {
  const input = Selector('input');
  const select = Selector('select');
  const button = Selector('button');
  const result = Selector('div').withText('0 USD');
  
  await t
    .typeText(input, '100')
    .click(button)
    .expect(result.textContent).eql('4.90 USD')
    .click(select)
    .click(Selector('option').withText('EUR (Euros)'))
    .expect(result.textContent).eql('0 EUR');
});
