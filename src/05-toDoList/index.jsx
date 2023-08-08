import React, { useState } from "react";

// Composant pour afficher chaque prénom
const PrenomItem = ({ prenom, onRemove, onToggleStrikethrough }) => {
  return (
    <div>
      {/* Si le prénom est barré, appliquer le style 'line-through' sinon aucun style */}
      <p 
        style={{ textDecoration: prenom.strikethrough ? 'line-through' : 'none' }}
        onClick={() => onToggleStrikethrough(prenom.id)}
      >
        {prenom.text}
      </p>
      {/* Bouton pour supprimer le prénom */}
      <button onClick={() => onRemove(prenom.id)}>Supprimer</button>
    </div>
  );
}

// Composant principal de formulaire
const Formulaire = () => {
  // Etat pour le champ de saisie du prénom
  const [user, setUser] = useState({ prenom: '' });
  // Etat pour stocker la liste des prénoms
  const [prenoms, setPrenoms] = useState([]);

  // Destructuration pour extraire 'prenom' de 'user'
  const { prenom } = user;

  // Gestionnaire pour suivre les modifications du champ de saisie
  const handleChange = ({ target: { name, value } }) => {
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  }

  // Gestionnaire pour soumettre le formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // Seulement ajouter le prénom si sa longueur est >= 3
    if(prenom.length >= 3){
      setPrenoms(prevPrenoms => [...prevPrenoms, { id: Date.now(), text: prenom, strikethrough: false }]);
      setUser({ prenom: '' });
    }
  }

  // Gestionnaire pour supprimer un prénom
  const handleRemove = id => {
    setPrenoms(prevPrenoms => prevPrenoms.filter(prenom => prenom.id !== id));
  }

  // Gestionnaire pour barrer/débarrer un prénom
  const handleToggleStrikethrough = id => {
    setPrenoms(prevPrenoms => prevPrenoms.map(prenom => {
      if (prenom.id === id) {
        return { ...prenom, strikethrough: !prenom.strikethrough };
      }
      return prenom;
    }));
  }

  return (
    <div>
      {/* Afficher chaque prénom en utilisant le composant PrenomItem */}
      {prenoms.map(prenom => (
        <PrenomItem 
          key={prenom.id} 
          prenom={prenom} 
          onRemove={handleRemove} 
          onToggleStrikethrough={handleToggleStrikethrough} 
        />
      ))}

      {/* Formulaire pour ajouter un nouveau prénom */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          id="prenom" 
          name="prenom"  
          placeholder="ajoute un emoji" 
          onChange={handleChange}  
          value={prenom}
        />
        <button>valider</button>
      </form>
    </div>
  );
}

export default Formulaire;
