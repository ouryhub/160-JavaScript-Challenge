
whoseMove = function(joueur,bool){
    nextPlayer = ""
    if(joueur == 'white' && bool){
        nextPlayer = 'White'
    }
    else if(joueur == 'white' && bool == false){
        nextPlayer = 'Black'
    }
    if(joueur == 'black' && bool){
        nextPlayer = 'Black'
    }
    else if(joueur == 'black' && bool == false){
        nextPlayer = 'White'
    }

    return console.log(nextPlayer);
}

whoseMove("black",false) 
whoseMove("white",true) 
whoseMove("white",false)

