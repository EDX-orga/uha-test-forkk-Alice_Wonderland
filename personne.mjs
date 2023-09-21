
export class Personne {
    constructor({ id, poids, taille }) {
      this.id = id;
      this.poids = poids;
      this.taille = taille;
    }
  
    get IMC() {
      return this.poids / (this.taille ** 2);
    }

    static depuisDonnes(id, poids, taille) {
        return new Personne({ id, poids, taille });
      }


      static depuisJSON(json) {
        const { id, poids, taille} = json;
        return new Personne({ id, poids, taille});

  }
  
}
