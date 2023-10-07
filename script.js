"use script";

let George = 10;

let musique = ["Anissa - Wejdene", "Nancy Mulligan - Ed Sheeran", "Ton invitation - Louise Attaque","The Songcord - Zoe Saldana", "Je suis fils de - Glanost"];
let changement_taxi = 0;


for (let feux_rouges = 30; feux_rouges >= 0; feux_rouges--) {
    m = musique[Math.floor(Math.random() * 10)];
    if (m == musique[0]) {
        changement_taxi ++;
        George --;
        if (George == 0) {
            alert(`Vous avez perdu George est mort il a changer ${changement_taxi} fois de taxi, il lui rester ${feux_rouges} feux rouges`);
            break;
        }
    }
    if (feux_rouges == 0) {
        alert(`Vous avez gagner George à survécu il a changer ${changement_taxi} fois de taxi et il lui reste ${George} point mental`);
    }
}
