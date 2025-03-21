import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Effectue une requête à ton serveur Express
    fetch('/')
      .then(res => res.text())
      .then(data => {
        console.log(data); // Affiche "Hello, CraftyPro!" dans la console
      })
      .catch(error => console.error('Error:', error)); // Gestion des erreurs
  }, []); // L'effet s'exécute une seule fois après le premier rendu

  return (
    <div className="App">
      <h1>Bienvenue sur CraftyPro</h1>
      <p>La plateforme de mise en relation entre prestataires et clients.</p>
    </div>
  );
}

export default App;
