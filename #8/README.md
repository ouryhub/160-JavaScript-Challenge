# POURBOIRE
Écrivez une fonction qui calcule combien vous devez donner de pourboire en fonction du montant total de 
la facture et du service. Vous devez tenir compte des notes suivantes:
• Terrible: 0%
• Poor: 5%
• Good: 10%
• Great: 15%
• Excellent: 20%
L’avis sur le service doit être insensible à la casse. Si un avis non reconnu est entré, vous devez renvoyer 
"Rating not recognised".
Parce que vous êtes une personne sympathique, vous arrondissez toujours à la valeur supérieure, quel 
que soit le service.

```javaScript
    calculateTip(20, "ExcellEnt") => 4 // Excellent service, vous donnez 20% de 20 = 4
    calculateTip(26.95, "goOd") => 3 // Bon service, 10% de 26.95 arrondi à 3
    calculateTip(20, "hi") 

````