const {isValidDate, isPalindrome, getNextPalindromes} = require('./script');


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



test('Cette date n\'est pas un palindrome', () => {
  expect(isPalindrome('20/10/2002')).toBe(false);
});

  test('Cette date est un palindrome', () => {
    expect(isPalindrome('20/02/2002')).toBe(true);
  });



test('Demander les 0 prochains palindromes', () => {
  expect(getNextPalindromes(0)).toStrictEqual([]);
});

  test('Cette date n\'est pas dans le tableau des futurs palindromes', () => {
    expect(getNextPalindromes(1)).toEqual
      (expect.not.stringContaining("20/07/2025"))
  });

    test('Cette date est un palindrome mais pas la prochaine date à partir d\'aujourd\'hui', () => {
      expect(getNextPalindromes(1)).toEqual
        (expect.not.stringContaining("09/02/209"))
    });

      test('Cette est le futur palindrome à partir d\'aujourd\'hui', () => {
        expect(getNextPalindromes(1)).toContain("13/02/2031")
      });