---
title: Extraction PJ
publishDate: 2023-03-02 00:00:00
img: /portfolio/assets/raw.webp
img_alt: Logo GMAIL Pièce Jointe
description: |
  Pour une opération de facturation, j'ai développé des programmes permettant l'exportation et le trie de pièces jointes ciblées dans un drive.
tags:
  - Gmail
  - Dev
  - Python
---

Ma mission était de concevoir et d'implémenter des scripts Python visant à automatiser divers processus liés à la gestion des emails et des fichiers joints, afin d'optiser la récupération de milliers de fichiers pour un contrôle de facturation des clients.

La première étape de ce projet consistait à développer le script de récupération. Celui-ci avait pour objectif de récupérer les pièces jointes des emails d'une boîte mail spécifiée, en les transférant vers un répertoire local désigné. J'ai veillé à configurer la boîte mail en activant le protocole IMAP et en autorisant l'accès aux applications moins sécurisées. Par la suite, j'ai lancé le script pour automatiser le processus de récupération des pièces jointes, contribuant ainsi à une gestion plus efficace des données.

Dans la deuxième étape, j'ai travaillé sur le script de lecture des fichiers, conçu pour traiter les fichiers de type .xls, .xlsx et .csv. Ce script recherchait spécifiquement le champ "APLDUC" (permettant d'identifier les clients) dans ces fichiers afin d'effectuer une série de tests et de déplacer les fichiers en conséquence. Les fichiers contenant un champ "APLDUC" étaient déplacés vers un répertoire spécifique pour traitement ultérieur, tandis que les autres étaient déplacés vers un répertoire distinct pour une évaluation manuelle ultérieure.

Enfin, j'ai également développé le script d'envoi sur un drive, qui permettait de récupérer des fichiers à partir d'un espace de stockage en ligne spécifié et de les importer localement. Ce script a été configuré pour télécharger uniquement les fichiers de type .xls, .xlsx et .csv, afin de limiter les transferts inutiles de données.

Mon implication dans ce projet m'a permis de démontrer mes compétences en programmation Python, en automatisation de tâches et en gestion de données, tout en contribuant à améliorer l'efficacité opérationnelle de l'entreprise.
