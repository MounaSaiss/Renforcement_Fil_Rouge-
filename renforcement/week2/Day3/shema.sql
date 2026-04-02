-- Requêtes à écrire :
-- 1. Afficher le nom et l'email de tous les utilisateurs de type 'client'
-- 2. Afficher tous les plats dont le prix est inférieur à 15€, triés du moins cher au plus cher
-- 3. Compter le nombre de commandes par statut ('livré', 'en cours', 'annulé')
-- 4. Afficher les 3 restaurants avec la meilleure note moyenne (ORDER BY + LIMIT)
-- 5. Calculer le chiffre d'affaires total et le panier moyen de toutes les commandes livrées
-- 6. Afficher tous les plats dont le nom contient le mot 'poulet' (LIKE)

-- Exercice 1
Select utilisateur.nom, utilisateur.email
From utilisateur
where
    utilisateur.type = 'client';

Select plats.nom, plats.prix
from plats
where
    plats.prix < 15 ordetr by plats.prix ASC;

select commandes.statut, Count(*) As nomber
From commandes
Group by
    commandes.STATUS

Select nom, note_moy From restaurants order by note_moy DESC Limit 3;

Select *, Sum(total) as CA from commandes WHERE status = 'livré';

SELECT nom.plats from plats WHERE nom like '%poulet%';

-- Requêtes à écrire :
-- 7. Afficher le nom du client et le total pour chaque commande (INNER JOIN commandes +
-- utilisateurs)
-- 8. Afficher le nom du restaurant et le nombre de commandes reçues, même pour les
-- restaurants sans commande (LEFT JOIN)
-- 9. Lister toutes les commandes livrées avec le nom du client, le nom du livreur et le nom du
-- restaurant
-- 10. Afficher les plats commandés au moins une fois avec leur quantité totale vendue (JOIN +
-- GROUP BY + SUM)
-- 11. Trouver les clients qui ont commandé plus de 3 fois, avec leur nombre de commandes
-- (JOIN + GROUP BY + HAVING)
-- 12. BONUS : Afficher le top 3 des livreurs les mieux notés (jointure sur notations +
-- commandes + utilisateurs)

SELECT utilisateurs.nom, commandes.total
From utilisateurs AS u
    INNER join commendes c ON c.client_id = u.id;

Select restaurants.nom, Count(c.id) AS nmbr_c
FROM restaurants AS r
    LEFT JOIN commandes c ON c.restaurant_id = r.id
Group by
    r.id,
    r.nom

SELECT commendes.id, utilisateurs.nom AS client, utilisateurs.nom AS livreur, restaurants.nom
FROM
    commandes c
    INNER JOIN restaurants r ON c.restaurants_id = r.id
    INNER JOIN utilisateurs u ON c.client_id = u.id
    INNER JOIN utilisateurs u ON c.livreur_id = u.id;

SELECT plats.nom, SUM(lignes_commande.quantite)
FROM plats AS p
    INNER JOIN lignes_commande l ON l.plat_id = plats.id
GROUP BY
    p.id,
    p.nom

--  11. Trouver les clients qui ont commandé plus de 3 fois, avec leur nombre de commandes
-- (JOIN + GROUP BY + HAVING)

SELECT utilisateurs.nom, COUNT(commandes.id) AS nmbr_com
From commandes as c
    INNER JOIN utilisateurs as u ON c.client_id = u.id
GROUP BY
    c.id
Having
    nmbr_com > 3;

-- - 12. BONUS : Afficher le top 3 des livreurs les mieux notés (jointure sur notations +
-- commandes + utilisateurs)

SELECT utilisateurs.nom
FROM
    commandes as c
    INNER JOIN utilisateurs u ON c.livreur_id = u.id
    INNER JOIN notations ON n.commande_id = c.id
ORDER BY note DESC
LIMIT 3;