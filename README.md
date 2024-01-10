# README #

Bonjour à toi mon lapin ! 
Bienvenue sur le dépôt des utilitaires du ZaxThème. Celui-ci est indispensable et doit être importée au début du projet.

### Installation ###

- Télécharger la version 12.0.0 de Dawn qui se trouve dans les [releases de son repo GitHub](https://github.com/Shopify/dawn/releases) et mettre ce dossier de côté pour le moment.
- Copier/coller le contenu du repo [AxUtilities](https://github.com/Zerance131/sp-cli-component-utilities) dans celui de ton projet (sans les fichiers qui lui sont propres : README.md et le dossier .git)
- Mettre à jour l'url du store dans le package.json (store_name)
- Lancer la commande `npm i`
- Commiter les changements avec le message suivant : "[+] AxUtilities"
- Sans remplacer les fichiers existants, copier/coller tous les dossiers suivants qui proviennent de la version de Dawn que tu as téléchargée :
    - templates
    - snippets
    - sections
    - locales
    - assets
    - config
    - layout
- Lancer la commande `npm run build`
- Commiter les changements avec le message suivant : "[+] Theme Init"
- Have fun ! 🥂

### Les commandes de bases ###

* ```npm run build``` (compile une fois pour la prod)
* ```npm run dev``` (compile et watch votre travail)
* ```npm run pull``` (shopify theme pull)
* ```npm run push``` (shopify theme push)
* ```npm run serve``` (shopify theme dev)
