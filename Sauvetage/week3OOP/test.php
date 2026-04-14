<?php
// 1. Déclarez une variable $prenom avec votre prénom 
$prenom = "Mouna";
// 2. Déclarez une variable $age avec votre âge 
$age = 20;
// 3. Affichez : "Bonjour, je m'appelle [prénom] et j'ai [âge] ans." 
echo "Bonjour , je m'apelle $prenom et j'ai $age ans";


// Écrivez la condition qui affiche 'Majeur' si l'âge est >= 18, 'Mineur' sinon. 

if($age>=18){
    echo "Majeur";
}
else {
    echo "Mineur";  
}

// Exercice 3 — Boucle for 
// Écrivez une boucle qui affiche les nombres de 1 à 10.
for($i=1;$i<=10;$i++){
    echo $i ."";
}

