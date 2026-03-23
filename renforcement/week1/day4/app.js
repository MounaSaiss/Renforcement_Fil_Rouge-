let catalogue = [
    {
        id: 1,
        nom: 'Stylo bille bleu',
        cat: 'ecriture',
        prix: 1.20,
        stock: 150,
        note: 4.2
    },
    {
        id: 2,
        nom: 'Stylo bille rouge',
        cat: 'ecriture',
        prix: 1.20,
        stock: 0,
        note: 4.0
    },
    {
        id: 3,
        nom: 'Stylo gel noir',
        cat: 'ecriture',
        prix: 2.50,
        stock: 60,
        note: 4.7
    },
    {
        id: 4,
        nom: 'Cahier A4 200p',
        cat: 'papier',
        prix: 5.50,
        stock: 45,
        note: 4.8
    },
    {
        id: 5,
        nom: 'Cahier A5 100p',
        cat: 'papier',
        prix: 3.20,
        stock: 80,
        note: 4.3
    },
    {
        id: 6,
        nom: 'Bloc-notes A5',
        cat: 'papier',
        prix: 2.80,
        stock: 30,
        note: 3.9
    },
    {
        id: 7,
        nom: 'Surligneur jaune',
        cat: 'ecriture',
        prix: 1.80,
        stock: 0,
        note: 4.5
    },
    {
        id: 8,
        nom: 'Surligneur rose',
        cat: 'ecriture',
        prix: 1.80,
        stock: 20,
        note: 4.3
    },
    {
        id: 9,
        nom: 'Ciseaux bureau',
        cat: 'bureau',
        prix: 6.50,
        stock: 8,
        note: 3.7
    },
    {
        id: 10,
        nom: 'Agrafeuse',
        cat: 'bureau',
        prix: 9.90,
        stock: 5,
        note: 4.1
    },
    {
        id: 11,
        nom: 'Post-it jaunes',
        cat: 'papier',
        prix: 4.20,
        stock: 60,
        note: 4.6
    },
    {
        id: 12,
        nom: 'Agenda 2025',
        cat: 'agenda',
        prix: 12.0,
        stock: 15,
        note: 4.7
    },
    {
        id: 13,
        nom: 'Marqueur permanent',
        cat: 'ecriture',
        prix: 3.10,
        stock: 35,
        note: 4.4
    },
    {
        id: 14,
        nom: 'Regle 30cm',
        cat: 'bureau',
        prix: 1.50,
        stock: 90,
        note: 3.8
    },
    {
        id: 15,
        nom: 'Compas de precision',
        cat: 'bureau',
        prix: 8.90,
        stock: 12,
        note: 4.6
    },
];


function ajouterProduit(catalogue, produit) {
    const newId = Math.max(...catalogue.map(p => p.id)) + 1;
    const product = [...catalogue, { id: newId, ...produit }];
    return product;
}
console.log(ajouterProduit(catalogue, { nom: 'Taille-crayon', cat: 'bureau', prix: 1.10, stock: 200, note: 4.0 }));

function updateProduct(catalogue, id, modifications) {
    const product = catalogue.map(p => p.id === id ? { ...p, ...modifications } : p);
    return product;
}
console.log(updateProduct(catalogue, 3, { prix: 10, stock: 50 }));

function supprimeProduct(catalogue, id) {
    const product = catalogue.filter(p => p.id !== id);
    return product;
}
console.log(supprimeProduct(catalogue, 2));

function getProductById(catalogue, id) {
    const product = catalogue.find(p => p.id === id);
    return product;
}
console.log(getProductById(catalogue, 5));

// Partie 2 EX 1

function rechercherProduits(catalogue, filtres = {}) {
    let res = catalogue;
    if (filtres.texte)
        res = res.filter(produit => produit.nom.toLowerCase().includes(filtres.texte.toLowerCase()));

    if (filtres.prixMin)
        res = res.filter(produit => produit.prix >= filtres.prixMin);

    if (filtres.prixMax)
        res = res.filter(produit => produit.prix <= filtres.prixMax);

    if (filtres.enStock)
        res = res.filter(produit => produit.stock > 0);

    if (filtres.noteMin) {
        res = res.filter(produit => produit.note >= filtres.noteMin);
    }

    return res;
}
console.log(rechercherProduits(catalogue, { enStock: true, noteMin: 4.5 }));
console.log(rechercherProduits(catalogue, { texte: 'stylo', enStock: true }));
console.log(rechercherProduits(catalogue, {}));


// Exercice 3 -- Tri flexible + Challenge enchainage 
// Implementez trierProduits(catalogue, cle, ordre) -- cle : 'prix'|'note'|'nom'|'stock', ordre : 
// 'asc'|'desc', sans muter l'original 
function trieProduits(catalogue, cle, order) {
    const sorted = [...catalogue].sort((a, b) => {
        if (order === 'asc') {
            if (a[cle] < b[cle]) return -1;
            if (a[cle] > b[cle]) return 1;
            return 0;
        } else {
            if (a[cle] > b[cle]) return -1;
            if (a[cle] < b[cle]) return 1;
            return 0;
        }
    });
    return sorted;
}


console.log(trieProduits(rechercherProduits(catalogue, { cat: 'ecriture', enStock: true }), 'note', 'desc'));
console.log(trieProduits(rechercherProduits(catalogue, { prixMin: 2, prixMax: 7, noteMin: 4 }), 'prix', 'asc'));
console.log(trieProduits(rechercherProduits(catalogue, { enStock: true }), 'prix', 'asc').slice(0, 5));

// PARTIE 3 -- Calculs metier avec reduce 
// Exercice 4 -- Stats globales en un seul  reduce 

// { 
//   totalProduits     : 15, 
//   produitsEnStock   : 12, 
//   produitsEnRupture : 3, 
//   valeurStockTotale : somme(prix * stock), 
//   prixMoyen         : moyenne des prix (2 decimales), 
//   produitLePlusCher : { nom, prix }, 
//   produitMieuxNote  : { nom, note } 
// }
function statsGlobales(catalogue) {
    const resultat = catalogue.reduce((acc, product) => {
        acc.totalProduits += 1;
        if (product.stock > 0) {
            acc.produitsEnStock += 1;
        }
        if (product.stock === 0) {
            acc.produitsEnRupture += 1;
        }
        acc.valeurStockTotale += product.prix * product.stock;
        acc.prixMoyen = valeurStockTotale / totalProduits;
        if (product.prix > acc.produitLePlusCher.prix) {
            acc.produitLePlusCher = {
                nom: product.nom,
                prix: product.prix
            };
        }
        if (product.note > acc.produitMieuxNote.note) {
            acc.produitMieuxNote = {
                nom: product.nom,
                note: product.note
            };
        }
        return acc;
    }, {
        totalProduits: 0,
        produitsEnStock: 0,
        produitsEnRupture: 0,
        valeurStockTotale: 0,
        prixMoyen: 0,
        produitLePlusCher: { nom: "", prix: -Infinity },
        produitMieuxNote: { nom: "", note: -Infinity }
    });
}

