import  { useState } from 'react';
import './Professeur.css';

// Composant pour le menu latéral
// eslint-disable-next-line react/prop-types
function Sidebar({ onSelectSection }) {
  return (
    <div className="sidebar">
      <div className="sidebar-item" onClick={() => onSelectSection('reservation')}>Réservation de Classe</div>
      <div className="sidebar-item" onClick={() => onSelectSection('evaluation')}>Évaluation</div>
      <div className="sidebar-item" onClick={() => onSelectSection('eleves')}>Élèves Inscrits</div>
      <div className="sidebar-item" onClick={() => onSelectSection('multimedias')}>Envoi de Multimédias</div>
      <div className="sidebar-item" onClick={() => onSelectSection('notes')}>Publication des Notes</div>
    </div>
  );
}

// Composant pour le contenu principal
// eslint-disable-next-line react/prop-types
function Content({ selectedSection }) {
  switch (selectedSection) {
    case 'reservation':
      return <ReservationDeClasse />;
    case 'evaluation':
      return <Evaluation />;
    case 'eleves':
      return <ElevesInscrits />;
    case 'multimedias':
      return <EnvoiMultimedias />;
    case 'notes':
      return <PublicationNotes />;
    default:
      return <div className="placeholder">Sélectionnez une section dans le menu</div>;
  }
}

// Composant pour la réservation de classe
function ReservationDeClasse() {
  return (
    <div className="card">
      <div className="card-header">Réservation de Classe</div>
      <div className="card-body">
        <button className="primary-button">Réserver une nouvelle classe</button>
      </div>
    </div>
  );
}

// Composant pour l'évaluation
function Evaluation() {
  return (
    <div className="card">
      <div className="card-header">Évaluation</div>
      <div className="card-body">
        <button className="primary-button">Créer une nouvelle évaluation</button>
      </div>
    </div>
  );
}

// Composant pour les élèves inscrits
function ElevesInscrits() {
  return (
    <div className="card">
      <div className="card-header">Élèves Inscrits</div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">Élève 1</li>
          <li className="list-group-item">Élève 2</li>
          <li className="list-group-item">Élève 3</li>
        </ul>
      </div>
    </div>
  );
}

// Composant pour l'envoi de multimédias
function EnvoiMultimedias() {
  return (
    <div className="card">
      <div className="card-header">Envoi de Multimédias</div>
      <div className="card-body">
        <button className="primary-button">Ajouter un fichier multimédia</button>
      </div>
    </div>
  );
}

// Composant pour la publication des notes
function PublicationNotes() {
  return (
    <div className="card">
      <div className="card-header">Publication des Notes</div>
      <div className="card-body">
        <button className="primary-button">Publier les notes</button>
      </div>
    </div>
  );
}

// Composant principal pour le tableau de bord du professeur
function Professeur() {
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="dashboard-container">
      <div className="header">
        <h3 className="page-title">Tableau de Bord Professeur</h3>
        <MenuProfesseur />
      </div>
      <div className="main-content">
        <Sidebar onSelectSection={setSelectedSection} />
        <Content selectedSection={selectedSection} />
      </div>
    </div>
  );
}

// Composant pour le menu du professeur
// Composant pour le menu du professeur
function MenuProfesseur() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Exemple d'image et de nom du professeur
  const professeurImage = './public/images/user-1.png'; // Remplacez cette URL par l'image du professeur
  const professeurNom = 'Sossou karl'; // Remplacez par le nom réel du professeur

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu}>
        <img src={professeurImage} alt="" className="professeur-image" />
        <span className="professeur-nom">{professeurNom}</span>
      </button>
      {menuOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">Modification du mot de passe</div>
          <div className="dropdown-item">Log Out</div>
        </div>
      )}
    </div>
  );
}

export default Professeur;
