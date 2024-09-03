const askNumberPlayer1 = require('./script');


test('retour premiere fonction ok', () => {
    let popUp = 2
  expect(askNumberPlayer1()).toBe(popUp);
});