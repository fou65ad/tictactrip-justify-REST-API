// config.js
module.exports = {
  'secret': 'tictac', // le secret pour le JWT
  'expire':86400,   // durée de validité du token jwt, 86400 = 24 heures
  'nbrMots': 632,      // nombre de mots autorisés par unité de temps (par jour et par token) : exemple 80 000
  'duree' : 30     // durée de consommation de nbrMots en secondes ,exemple : pour une journée 24*60*60  
 
};




