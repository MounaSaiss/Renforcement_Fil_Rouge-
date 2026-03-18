// Documentation for the app.js file in the reinforcement week 1 day 3 project.
// 1.1  Créer un objet et accéder aux propriétés
const fiche = {
    prenom: 'Bob',
    nom: 'Dupont',
    age: 34,
    ville: 'Lyon'
};
console.log(fiche.nom + fiche.prenom)


function getProp(obj, cle) {
    return obj.hasOwnProperty(cle) ? obj[cle] : 'Inconnu';
}
console.log(getProp(fiche, 'ville'));
console.log(getProp(fiche, 'salaire'));


function renommerCle(obj, ancienne, nouvelle) {
    return obj[ancienne] = nouvelle
}
console.log(renommerCle(fiche, 'ville', 'marakech'))
console.log(fiche)

// 1.2  Object.keys(), Object.values(), Object.entries()
const inventaire = {
    stylo: { prix: 1.5, stock: 200 },
    cahier: { prix: 3.5, stock: 85 },
    regle: { prix: 0.8, stock: 0 },
    compas: { prix: 8.5, stock: 12 },
};
const produitName = Object.keys(inventaire);
const produit = Object.entries(inventaire);
console.log(produitName);
console.log(produit)

let Somme = 0;
let stock = 0;
produit.forEach(([nom, details]) => {
    Somme += details.prix * details.stock;
    stock += details.stock;
});
console.log(`Valeur totale: ${Somme}, Stock total: ${stock}`)

function prixSeuls(obj) {
    return
    Object.fromEntries(Object.entries(obj).map(([nom, details]) => [nom, details.prix]));
}
console.log(prixSeuls(inventaire))

// 1.3  Déstructuration d'objets 
const commande = {
    id: 'CMD-001',
    client:
    {
        nom: 'Dupont',
        email: 'dupont@mail.com'
    },
    total: 18.50,
    livree: false
};

const { id, total } = commande;
console.log(id, total)
const { client: { nom } } = commande;
console.log(nom)

const { total: montant, livree: estLivree } = commande;
console.log(commande);

function resumeCommende({ id, client, total }) {
    return `Commande ${id} - ${client.nom} - ${total} EUR.`
}
console.log(resumeCommende(commande))

// 1.4  Tableaux d'objets -- Le cas d'usage central 
let catalogue = [
    { id: 1, nom: 'Stylo bille', prix: 1.20, stock: 150 },
    { id: 2, nom: 'Cahier A4', prix: 3.50, stock: 45 },
    { id: 3, nom: 'Surligneur', prix: 2.10, stock: 80 },
    { id: 4, nom: 'Post-it', prix: 3.80, stock: 60 },
    { id: 5, nom: 'Ciseaux', prix: 6.30, stock: 20 },
];
// ajouterProduit(catalogue, produit) : id auto (max+1), retourne un nouveau tableau
function ajouteProduit(catalogue, nom, prix, stock) {
    const newId = Math.max(...catalogue.map(produit => produit.id)) + 1;
    const newProduit = { id: newId, nom, prix, stock };
    return [...catalogue, newProduit];
}
const nouvaueCatalogue = ajouteProduit(catalogue, 'Règle', 0.80, 100);
console.log(nouvaueCatalogue)


function rechercheParNom(catalogue, terme) {
    return catalogue.filter(produit => produit.nom.toLowerCase().includes(terme.toLowerCase()));
}
console.log(rechercheParNom(catalogue, 'cahier'))


function modifierPrix(catalogue, id, nouveauPrix) {
    const maj = catalogue.map(e =>
        e.id === id ? { ...e, prix: nouveauPrix } : e
    );
    return maj;
}
console.log(modifierPrix(catalogue, 3, 10.50))

function supprimerProduit(catalogue, id) {
    return catalogue.filter(e => e.id !== id)
}
console.log(supprimerProduit(catalogue, 2))

// PARTIE 2 -- Challenges Intermédiaires
// Exercice I1 -- Fusionner des objets sans écrasement 

// Implémentez fusionProfonde(obj1, obj2) : si une clé existe dans les deux et que les deux valeurs 
// sont des objets, ils sont fusionnés récursivement -- pas écrasés. 
function fusionProfonde(obj1, obj2) {
    const result = { ...obj1 };
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            result[key] = fusionProfonde(result[key], obj2[key]);
        } else {
            result[key] = obj2[key];
        }
    }
    return result;
}
console.log(fusionProfonde({ nom: 'Alice' }, { age: 30 }))