const isValidDate = require('./script');

test('les prochains palindromes sont bons', () => {
    expect(isValidDate("28/02/2024")).toBe(true);
  });
