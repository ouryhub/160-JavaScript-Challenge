## Nettoyage de chaînes
Votre patron a décidé d'économiser de l'argent en achetant un logiciel de reconnaissance de caractères 
pour numériser d'anciens romans dans votre base de données. Il semble que les mots soient bien saisis, 
mais vous remarquez rapidement qu'il y a aussi des nombres dans des endroits aléatoires dans le texte :
stringClean ('! !') => '! !'
stringClean ('123456789') => ''
stringClean("(E3at m2e2!!)") => "(Eat me!!)"
stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3") => "Why can't we 
buy the good software? #cheapskates"
14
Vos collaborateurs vous demandent une solution pour supprimer tous les nombres. Votre programme 
prendra en entrée une chaîne, devra nettoyer tous les caractères numériques, et renverra une chaîne avec 
les espacements, caractères et caractères spéciaux ~#$%^&!@*():; "'., tous intacts  .n