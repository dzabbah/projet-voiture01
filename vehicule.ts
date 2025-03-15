// voiture.ts

// Définition de l'interface Véhicule
interface Vehicule {
    make: string;
    model: string;
    year: number;
    start(): void; // Méthode start qui ne renvoie rien (void)
  }
  
  // Implémentation de la classe Voiture
  class Voiture implements Vehicule {
    make: string;
    model: string;
    year: number;
  
    // Constructeur pour initialiser les propriétés
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Implémentation de la méthode start
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Création d'une instance de la classe Voiture
  const maVoiture = new Voiture("Toyota", "Corolla", 2022);
  
  // Appel de la méthode start
  maVoiture.start();  // Cela doit afficher "Car engine started"
  