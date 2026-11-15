"use strict"; // slide 52

// slide 46 : fonction
function f1() {
    // slides 39 et 52 : tableau, const
    const etudiants = ['Etudiant1', 'Etudiant2', 'Etudiant3'];

    // slide 45 : boucle for..of
    for (const etudiant of etudiants) {
        console.log(etudiant); // slide 34 : console.log
    }
}

// slide 46 : fonction
function f2() {
    // slides 40 et 52 : objet, const
    const etudiant = {
        nom: 'John',
        prenom: 'DOE',
        age: 30
    };
    console.log(etudiant); // slide 34 : console.log
}

// slide 46 : fonction
function f3() {
    // slides 41 et 52 : tableau d'objets, const
    const etudiants = [
        { nom: 'nom1', prenom: 'prenom1', age: 21 },
        { nom: 'nom2', prenom: 'prenom2', age: 22 },
        { nom: 'nom3', prenom: 'prenom3', age: 23 }
    ];

    // slide 45 : boucle for..of
    for (const etudiant of etudiants) {
        console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`); // slides 34 et 38 : console.log, backticks
    }
}
