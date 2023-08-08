/**
 * @JSX
 * extension de javascript crée par React, utilise la syntaxe sous
 * forme de tags directement dans le code javascript,
 * ce qui permet de combiner HTML et JS facilement.
 * On peut appliquer des expressions javascript directement dans note JSX avec des accolades.
 * JSX stands for JavaScript XML.
 */

/*
 * @Exemple
 * On a bien créer un composant Exemple pas exemple.
 * Par convention il faut mettre une majuscule à nos composants JSX !
 */
const Exemple = () => {
    /**
     * créer un state pour chaque ces cinq @.
     * @prenom String
     * @nom String
     * @nombre Number
     * @prix integer
     * @boolean Boolean
     */
  
    /**
     * @array Objet
     * @arrayCollection Objet
     */
    const arrayFruits = ['pomme', 'banane', 'fraise']
  
    const arrayCollection = [
      {
        id: 0,
        prenom: 'Ippo',
        technique: 'dumsfer roll',
        stamina: 23192,
        strength: 2898
      },
      {
        id: 1,
        prenom: 'Challenger',
        technique: 'jab',
        stamina: 24516,
        strength: 2356
      }
    ];
  
    const prenom = 'Chrystal';
    const nom = 'Bastid';
    const nombre = 2;
    const prix = 15;
    const boolean = true;
  
    return (
      <div>
        {/* Exemple 1 pour des maths */}
  
        <p>
          Exemple 1 (Soustraire 50 - 8 pour savoir combien de pommes il reste) :
          il me reste {80-8} pommes
        </p>
  
        <p>Exemple 2 (Afficher la variable prenom) : {prenom} </p>
  
        <p>Exemple 3 (faite en sorte que le prenom s'affiche tout en minuscules): {prenom.toLowerCase()} </p>
  
        <p>Exemple 4 (Concaténer la variable nom et prenom) : {nom} {prenom} </p>
  
        <p>
          Exemple 5 (condition : si notre variable boolean est égal à true on
          affiche quelle est égale à true sinon on affiche une chaine vide) :  {boolean ? 'elle est égale a true' : ''}
        </p>
  
        <p>
          Exemple 6 (condition : si notre variable boolean est égal à true et que
          notre variable nombre est strictement égale à 2 on afffiche tout est ok,
          sinon on affiche une chaine vide) : {boolean || nombre ==10 ? "tout est ok" : ""}
        </p>
  
        <p>
          Exemple 7 (condition : si notre variable boolean est égal à true ou que
          notre variable nombre est strictement égale à 10 on afffiche tout est
          ok, sinon on affiche une chaine vide) : {boolean || nombre ==10 ? "tout est ok" : ""}
        </p>
  
        <p>
          Exemple 8 (condition : si notre variable prix est supérieur à 10, on
          affiche "le prix est supérieur à dix" sinon "le prix est inférieur à
          dix" ) : {prix > 10 && "le prix est sup a 10"}
        </p>
  
        <p>Exemple 9 (afficher le fruit de notre arrayFruits) :  </p>
        {arrayFruits[0]}
  
        <p>
          Exemple 10 (Itérer notre arrayFruits avec la function map et affichez
          tout son contenu dans une balise p) :
        </p>
        {arrayFruits.map((fruits, index) =>(
            <p>key={index}>{fruits}</p>
        ))}
  
        {/**
         * @map
         * passe sur chaque élément d'un tableau et renvoie un nouveau tableau.
         */}
  
        {/* ... */}
  
        <p>
          Exemple 8 (itération arrayCollection et afficher toutes les informations
          de Ippo) :
        </p>
  
        {/* ... */}
      </div>
    )
  }
  /**
   * @export default
   * Permet d'exporter notre composant, pour pouvoir le réutiliser.
   */
  export default Exemple