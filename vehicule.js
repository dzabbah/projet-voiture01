// voiture.ts
// Implémentation de la classe Voiture
var Voiture = /** @class */ (function () {
    // Constructeur pour initialiser les propriétés
    function Voiture(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implémentation de la méthode start
    Voiture.prototype.start = function () {
        console.log("Car engine started");
    };
    return Voiture;
}());
// Création d'une instance de la classe Voiture
var maVoiture = new Voiture("Toyota", "Corolla", 2022);
// Appel de la méthode start
maVoiture.start(); // Cela doit afficher "Car engine started"
