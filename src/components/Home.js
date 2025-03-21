import React, { useEffect, useState } from 'react';

function Home() {
  const [message, setMessage] = useState(''); // État pour stocker le message

  useEffect(() => {
    // Effectue la requête à l'API Express
    fetch('/')
      .then(res => res.text())
      .then(data => setMessage(data)) // Stocke la réponse dans l'état 'message'
      .catch(error => console.error('Error:', error)); // Gestion des erreurs
  }, []); // L'effet s'exécute une seule fois après le premier rendu

  return (
    <div className="home">
      <h1>Bienvenue sur CraftyPro</h1>
      <p>Nous vous aidons à trouver des prestataires pour tous vos besoins !</p>
    </div>
  );
}

export default Home;
