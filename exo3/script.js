"use strict"; // slide 52

// slide 52
const SEUIL = 10;

// slides 40 et 41 tableau d'objets 
const students = [
    { id: 1000, nom: 'JOHN' ,prenom: 'DOE', moyenne: 14, absences: 5 },
    { id: 2000, nom: 'BOB' ,prenom: 'CARLTON', moyenne: 7, absences: 1 },
    { id: 3000, nom: 'RAYANE',prenom:'SMITH', moyenne: 13, absences: 3 }
];

// slide 46 
function deliberation() {
    // slide 45 boucle for..of
    for (const student of students) {
        // slide 43 ternaire
        const resultat = estAdmis(student.moyenne) ? "ADMIS" : "AJOURNÉ";
        console.log(`${student.id}: ${resultat}`); // slides 34 et 38 : console.log, backticks
    }
}

// slide 46 
function estAdmis(moyenne) {
    return moyenne >= SEUIL; // slide 42 opérateur >=
}
