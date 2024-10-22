

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Config.css'; // Import du fichier CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'prof' && password === '123') {
      navigate('/professeur'); // Redirige vers la section professeur
    } else if (username === 'etu' && password === '12345') {
      navigate('/etudiant'); // Redirige vers la section étudiant
    } else {
      alert('Identifiants invalides.'); // Affiche un message d'erreur
    }
  };

  return (
    <div className="login-container">
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Nom dutilisateur :</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
        {/* Lien Mot de passe oublié */}
        <a href="/forgot-password" className="forgot-password">Mot de passe oublié ?</a>
      </form>
    </div>
  );
};

export default Login;
