# FORMATION RIGHTCOM ACADEMY: UTILISATION DE REDUX DANS UNE APPLICATION REACT

Par Emeric Gnonhoue

## Partie 1: Introduction à Redux dans React

Redux est une bibliothèque de gestion d'état pour les applications JavaScript, particulièrement populaire avec React. Elle aide à gérer l'état global de l'application de manière prévisible et centralisée.

### Concepts clés de Redux :

Store : Un objet qui contient l'état global de l'application.

Actions : Des objets qui décrivent les changements à apporter à l'etat.

Reducers : Des fonctions pures qui spécifient comment l'état change en réponse aux actions.

Dispatch : Une méthode pour envoyer des actions au store.

### Cas d'utilisation de Redux dans React :

**1- Applications avec un état complexe** : Lorsque l'état de l'application devient difficile à gérer avec les outils de base de React (useState, useContext).

**2- Partage d'état entre composants non liés** : Quand des composants éloignés dans l'arborescence ont besoin d'accéder aux mêmes données.

**3- Gestion de données asynchrones** : Pour gérer les appels API et les mises à jour d'état qui en résultent.

**4- Séparation des préoccupations** : Redux permet de séparer la logique de gestion d'état de la logique de rendu des composants.

**5- Débogage et journalisation** : Redux facilite le suivi des changements d'état et le débogage avec des outils comme Redux DevTools.

## Partie 2: Exercices pratiques

### Exercice 1 : Configuration de base de Redux dans React

Configurez Redux dans une application React simple.

### `npm install redux react-redux @reduc-toolkit`

1- Exécutez la commande ci-dessus pour installer redux.

2- Créez un fichier utils/store.js
