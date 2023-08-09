import React from "react";

class Enfant extends React.Component {

    // Méthode pour gérer la modification du titre.
    handleChangeTitle = () => {
        // Cette méthode utilise les 'props' pour appeler une fonction du composant Parent.
        // Elle appelle la méthode 'updateParentTitle' du composant Parent 
        // et lui passe la nouvelle valeur du titre.
        this.props.updateParentTitle("Titre mis à jour depuis Enfant");
    }


    render() {
        return (
            <div>
                {/* Lorsque le bouton est cliqué, la méthode 'handleChangeTitle' est appelée, 
                    ce qui déclenchera à son tour la mise à jour de l'état du composant Parent. */}
                <button onClick={this.handleChangeTitle}>
                    Changer le titre du Parent
                </button>
            </div>
        );
    }
}


export default Enfant;
