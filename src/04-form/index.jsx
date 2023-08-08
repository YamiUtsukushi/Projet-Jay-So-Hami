import React, { useState } from 'react';

function MyForm() {
    const [inputs, setInputs] = useState({
        prenom: '',
        motDePasse: ''
    });
    const [affiche, setAffiche] = useState({ prenom: null, motDePasse: null });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { prenom, motDePasse } = inputs;

        if (prenom.trim().length >= 3 && motDePasse.length >= 9) {
            setAffiche(inputs);
            console.log("Succès !");
        } else {
            if (prenom.trim().length < 3) {
                console.log("Le prénom doit avoir au moins 3 caractères.")
                alert("Le prénom doit avoir au moins 3 caractères.");
            }
            if (motDePasse.length < 9) {
                console.log("Le mot de passe doit avoir au moins 9 caractères.")
                alert("Le mot de passe doit avoir au moins 9 caractères.");
            }
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="prenom-input">
                        Prénom:
                        <input 
                            type="text" 
                            id="prenom-input"
                            name="prenom"
                            value={inputs.prenom} 
                            onChange={handleChange} 
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="motDePasse-input">
                        Mot de passe:
                        <input 
                            type="password" 
                            id="motDePasse-input"
                            name="motDePasse"
                            value={inputs.motDePasse} 
                            onChange={handleChange} 
                        />
                    </label>
                </div>
                <button type="submit">Envoyer</button>
            </form>

            {affiche.prenom && (
                <div>
                    <div>Prénom : {affiche.prenom}</div>
                    <div>Mot de passe : {affiche.motDePasse}</div>
                </div>
            )}
        </div>
    );
}

export default MyForm;
