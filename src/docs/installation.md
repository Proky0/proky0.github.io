# Installation d'un Script FiveM

## Prérequis
Avant de commencer, assurez-vous d'avoir les éléments suivants :
- Un serveur FiveM fonctionnel.
- Les permissions nécessaires pour accéder aux fichiers du serveur.
- Le script que vous souhaitez installer (généralement un fichier `.zip` ou un dossier).

## Étapes d'installation

### 1. Télécharger le script
- Téléchargez le script depuis une source fiable.
- Décompressez le fichier `.zip` si nécessaire.

### 2. Ajouter le script au serveur
- Accédez au répertoire `resources` de votre serveur FiveM.
- Copiez le dossier du script dans le répertoire `resources`.

### 3. Modifier le fichier `server.cfg`
- Ouvrez le fichier `server.cfg` situé à la racine de votre serveur.
- Ajoutez la ligne suivante pour démarrer le script :
    ```cfg
    ensure nom_du_script
    ```
    Remplacez `nom_du_script` par le nom exact du dossier du script.

### 4. Redémarrer le serveur
- Redémarrez votre serveur FiveM pour appliquer les modifications.

## Vérification
- Connectez-vous à votre serveur et vérifiez que le script fonctionne correctement.
- Consultez la console du serveur pour détecter d'éventuelles erreurs.

## Résolution des problèmes
- Si le script ne fonctionne pas, vérifiez les logs du serveur.
- Assurez-vous que toutes les dépendances nécessaires sont installées.
- Consultez la documentation du script pour des instructions spécifiques.

## Notes supplémentaires
- Gardez toujours une sauvegarde de votre serveur avant d'ajouter de nouveaux scripts.
- Téléchargez uniquement des scripts provenant de sources fiables pour éviter les problèmes de sécurité.
