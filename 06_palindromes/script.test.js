const isValidDate = require('./script');

test('Pas 32 jours dans le mois', () => {
    expect(isValidDate("32/02/2024")).toBe(false);
  });

  test('Format sans séparateurs', () => {
    expect(isValidDate("32022024")).toBe(false);
  });

    test('Pas 29 jours en février', () => {
      expect(isValidDate("29/02/2024")).toBe(false);
    });

      test('Cette date est un format valide', () => {
        expect(isValidDate("28/02/2024")).toBe(true);
      });

      test('Cette date est un nombre', () => {
        expect(isValidDate(23)).toBe(false);
      });

