import React from "react";
import Enfant from "./enfant"; 

class Parent extends React.Component{

    constructor(props){
        super(props) 

        // Initialisation de l'état du composant.
        this.state = {
            title: "Ma class"
        }

        // La méthode 'bind' est utilisée pour s'assurer que 'this' dans la fonction updateTitle 
        // fait toujours référence à l'instance de la classe Parent, peu importe où elle est appelée.
        this.updateTitle = this.updateTitle.bind(this); 
    }

    // Méthode pour mettre à jour l'état 'title'.
    updateTitle(newTitle) {
        // Utilisation de setState pour mettre à jour l'état de manière asynchrone.
        this.setState({ title: newTitle });
    }

    // La méthode render est responsable de la sortie du composant.
    render(){
        const {title} = this.state; // Destructuration de l'état pour extraire 'title'.

        // Retourne le JSX qui sera affiché.
        // Le composant Enfant reçoit une prop 'updateParentTitle' qui est une fonction 
        // permettant de mettre à jour l'état 'title' du composant Parent.
        return(
            <>
                <h1>{title}</h1> 
                <Enfant updateParentTitle={this.updateTitle} /> 
            </>
        )
    }
}

export default Parent;
