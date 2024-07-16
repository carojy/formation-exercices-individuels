const askName =require('./script');

test('le prenom est bien entré par l\'utilisateur', () => {
    expect(askName()).toBe("Bonjour " + nomUtilisatrice);
  });