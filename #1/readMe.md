# Personne dans le Bus
Un bus se déplace en ville, il prend et/ou dépose certaines personnes à chaque arrêt.
Vous recevez une liste d’entiers. Chaque élément comporte le nombre de personnes qui 
montent dans le bus (le premier élément) et le nombre de personnes qui en sortent (le 
deuxième élément).
Le 2e nombre du premier élément de la liste vaut toujours 0 car le bus est vide en arrivant 
au premier arrêt de bus. Votre tâche consiste à renvoyer le nombre de personnes encore 
dans le bus après le dernier arrêt. 
## Test de votre Fonction
number([[10,0],[3,5],[5,8]]) => 5
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) => 17
number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) => 21
