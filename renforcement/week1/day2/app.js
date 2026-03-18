// DEBUTANTE
// Ex1
let taches = [];
taches.push('Coder', 'Tester', 'Deployer');
taches.unshift('Analyser');
const X = taches.pop();
console.log('X') = 'Deployer';
const Y = taches.unshift();
console.log('Y') = 'Analyser';

splice(1, 0, 'Documenter');
splice(2, 1, 'Revue de code')
console.log(taches);

// Ex2
const prenoms = ['Alice', 'Bob', 'Clara', 'David', 'Eva'];
prenoms.forEach((nom, index) => {
    console.log(`[${index + 1}] . ${nom}`);
});

prenoms.forEach((nom, index) => {
    console.log(`[${index + 1}] . ${nom}.=>${nom.length}`);
});

prenoms.forEach((nom, index) => {
    let length = nom.length;
    if (length > 3) {
        console.log(`[${index + 1}] . ${nom}`);
    }
});

// Ex3

const temperatures = [0, 15, 22, 35, -5, 100];
const fahrenheit = temperatures.map(p => p * (9 / 5 + 32));
console.log(fahrenheit);

// 1.4  filter() -- Filtrer
// EX4
// const mots = ['chat','cheval','chien','lion','chameau','cobra','loup','chevre'];
const start = mots.filter(a => a.startsWith("ch"))
console.log(start)

const mots = ['chat', 'cheval', 'chien', 'lion', 'chameau', 'cobra', 'loup', 'chevre'];

const longs = mots.filter(mot => {
    return typeof mot === "string" && mot.length > 5;
});
console.log(longs)

const motsFilter = mots.filter(mot => {
    return typeof mot === "string" && mot.length > 5 && mot.startsWith("ch");
});
console.log(motsFilter)

// 1.5  find() et findIndex() -- Rechercher 
// EX5
const catalogue = [
    { ref: 'A01', nom: 'Stylo bille', prix: 1.20 },
    { ref: 'A02', nom: 'Cahier A4', prix: 3.50 },
    { ref: 'A03', nom: 'Surligneur', prix: 2.10 },
    { ref: 'A04', nom: 'Post-it', prix: 3.80 },
    { ref: 'A05', nom: 'Ciseaux', prix: 6.30 },
];
const produit = catalogue.find(p => p.ref === 'A03');
console.log(produit);
const index = catalogue.findIndex(p => p.nom === 'Cahier A4');
console.log(index);
const product = catalogue.find(p => p.ref === 'A99');
console.log(product)

// 1.6  reduce() -- Agreger
// EX6
const notes = [14, 8, 17, 11, 15, 9, 18, 12];
const somme = notes.reduce((acc, n) => acc + n, 0);
console.log(somme);

const nb = notes.length
const moyenne = somme / nb
console.log(moyenne)

const max = notes.reduce((acc, n) => n > acc ? n : acc, notes[0])
console.log(max)

// 1.7  sort() -- Trier
const scores = [45, 12, 78, 3, 99, 56, 23, 67];

scores.sort((a, b) => b - a)
scores.slice(1, 3)
console.log(scores)

scores.sort((a, b) => a - b)
console.log(scores)

const noms = ['Zoe', 'Alice', 'Marc', 'Bob', 'Yasmine', 'Chloe'];
noms.sort((a, b) => a.localeCompare(b));
console.log(noms);

// 1.8  Spread operator et Destructuration 
// EX8
const fruits = ['pomme', 'poire']
const legumes = ['carotte', 'tomate']
const fusion = [...fruits, ...legumes];
console.log(fusion)

const copiePanier = [...fusion]
copiePanier.push('cerise')
console.log(copiePanier)

const nmbrs = [3, 1, 4, 1, 5, 9, 2, 6]
const maximum = Math.max(...nmbrs);
const minimum = Math.min(...nmbrs)
console.log(maximum)
console.log(minimum)

const couleurs = ['rouge', 'vert', 'bleu', 'jaune']
const [premier, deuxiéme, ...reste] = ['rouge', 'vert', 'bleu', 'jaune']
console.log(premier)
console.log(deuxiéme)
console.log(reste)

let x = 10, y = 20;
[x, y] = [y, x]
console.log(x)
console.log(y)

data = [42]
const [val, unite = 'kg'] = data

// INTERMEDIAIRE
// ex1
function nettoyer(tableau) {
    return tableau
        .filter(element => element)
        .filter((element, index, arr) => arr.indexOf(element) === index)
        .sort((a, b) => a - b);
}
console.log(nettoyer([3, 1, 2, 1, 3, 0, '', 5, null, 2]))
console.log(nettoyer([false, 7, 7, '', 8, undefined, 8]))
console.log(nettoyer([0, 0, 0]))
// ex2
function rotate(tableau, n) {
    const lenght = tableau.length;
    n = n % lenght;
    return [...tableau.slice(lenght - n), ...tableau.slice(0, lenght - n)];
}
console.log(rotate([1, 2, 3, 4, 5], 2))
console.log(rotate([1, 2, 3, 4, 5], 0))
console.log(rotate(['a', 'b', 'c'], 1))
console.log(rotate([1, 2, 3, 4, 5], 7))

// EX3
function flatten(tableau) {
    return tableau.reduce((acc, element) => {
        if (Array.isArray(element)) {
            return acc.concat(flatten(element));
        } else {
            return acc.concat(element);
        }
    }, []);
}
console.log(flatten([1, [2, 3], [4, [5, 6]]]))
console.log(flatten([[1, [2]], [[[3]], 4]]))
console.log(flatten([1, 2, 3]))

// EX4
function intersection(a, b) {
    return [...new Set(a)].filter(element => b.includes(element));
}
function difference(a, b) {
    return a.filter(element => !b.includes(element));
}
// EX5

function  groupBy(tableau,cle){
    
}