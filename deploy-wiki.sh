#!/bin/bash

# Déduction du nom du dossier courant
WIKI_DIR_NAME=$(basename "$(pwd)")
PM2_NAME=$WIKI_DIR_NAME

# Vérification du script build dans package.json
if ! grep -q '"build":' package.json; then
  echo "❌ Le script \"build\" est manquant dans package.json."
  echo "💡 Ajoute ceci dans \"scripts\": \"build\": \"docusaurus build\""
  exit 1
fi

# Build du site
echo "📦 Construction du site Docusaurus ($WIKI_DIR_NAME)..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Erreur lors du build. Annulation du déploiement."
  exit 1
fi

# Redémarrage via PM2
echo "🔁 Redémarrage de PM2 ($PM2_NAME)..."
pm2 restart "$PM2_NAME" > /dev/null 2>&1

if pm2 list | grep -q "$PM2_NAME"; then
  echo "✅ Déploiement terminé pour $WIKI_DIR_NAME !"
else
  echo "❌ PM2 ne trouve pas le processus \"$PM2_NAME\"."
  echo "💡 Lance-le d'abord avec : pm2 start server.js --name $PM2_NAME"
fi
