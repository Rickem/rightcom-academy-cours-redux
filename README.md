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
### `npm install redux react-redux`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
