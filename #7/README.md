## 7 - Joueur suivant (8 kyu)
Deux joueurs - black et white - jouent à un jeu qui se compose de plusieurs tours. Si un joueur gagne 
un tour, il commencera également le prochain. S’il perd, c'est l'autre joueur qui commencera. A partir de 
la couleur du joueur actuel et du résultat du tour (true ou false), déterminez qui débutera le prochain 
tour.

```` javaScript

whoseMove("black",false) => "white"
whoseMove("white",true) => "white"
whoseMove("white",false) => "black"

````