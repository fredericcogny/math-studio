---
id: "tal-continuity-tvi"
locale: "fr"
title: "Continuité et théorème des valeurs intermédiaires"
strand: "Analyse et fonctions"
summary: "Notion de continuité, théorème des valeurs intermédiaires (TVI), corollaire de la stricte monotonie et dichotomie."
objectives:
  - "Justifier la continuité d'une fonction sur un intervalle"
  - "Énoncer et appliquer le TVI pour démontrer l'existence de solutions"
  - "Utiliser le corollaire de la stricte monotonie pour démontrer l'unicité"
prerequisites:
  - "Limites de fonctions et variations"
vocabulary:
  - en: "Intermediate Value Theorem"
    definition: "Pour toute fonction f continue sur [a, b], tout réel k compris entre f(a) et f(b) admet au moins un antécédent c dans [a, b]."
  - en: "Dichotomy algorithm"
    definition: "Méthode numérique consistant à partager successivement un intervalle en deux pour encadrer la solution d'une équation."
flashcards:
  - front: "Quelles sont les deux conditions nécessaires pour garantir l'existence ET l'unicité d'une solution de f(x) = k ?"
    back: "1. f est continue sur [a, b]. 2. f est strictement monotone sur [a, b]."
  - front: "Que signifie graphiquement qu'une fonction est continue sur un intervalle ?"
    back: "Sa courbe représentative peut être tracée d'un seul trait, sans lever le crayon."
exercises:
  - id: "tal-tvi-t1"
    tierTitle: "Application directe"
    prompt: "Pour $f(x)=x^3+x-3$, calculer le couple $(f(1),f(2))$."
    solution: "$f(1)=1+1-3=-1$ et $f(2)=8+2-3=7$ ; le couple est donc $(-1,7)$."
    hints:
      - "Remplacer directement la variable par chacune des bornes dans le polynôme."
  - id: "tal-tvi-t2"
    tierTitle: "Entraînement standard"
    prompt: "Démontrer que $f(x)=x^3+x-3$ admet exactement une racine dans $(1,2)$."
    solution: "Le polynôme $f$ est continu sur $[1,2]$. Comme $f(1)=-1<0<7=f(2)$, le théorème des valeurs intermédiaires garantit l'existence d'au moins une racine dans $(1,2)$. De plus, $f'(x)=3x^2+1>0$ pour tout réel $x$ ; la fonction $f$ est donc strictement croissante et ne peut avoir plus d'une racine. La racine située dans $(1,2)$ est ainsi unique."
    hints:
      - "Utiliser la continuité et les signes opposés aux bornes pour démontrer l'existence."
      - "Utiliser la dérivée pour obtenir la stricte monotonie et l'unicité."
    rubric:
      - "Énonce la continuité sur $[1,2]$ et calcule des valeurs de signes opposés aux bornes."
      - "Applique le théorème des valeurs intermédiaires pour démontrer l'existence."
      - "Établit que $f'(x)>0$ et utilise la stricte croissance pour démontrer l'unicité."
  - id: "tal-tvi-t3"
    tierTitle: "Synthèse"
    prompt: "En partant de $[1,2]$, effectuer trois étapes de dichotomie pour l'unique racine $\\alpha$ de $f(x)=x^3+x-3$. Donner l'intervalle obtenu et sa longueur."
    solution: "$f(1)<0<f(2)$. En $3/2$, $f(3/2)=15/8>0$ ; on conserve donc $[1,3/2]$. En $5/4$, $f(5/4)=13/64>0$ ; on conserve donc $[1,5/4]$. En $9/8$, $f(9/8)=-231/512<0$ ; on conserve donc $[9/8,5/4]$. Sa longueur vaut $5/4-9/8=1/8$."
    hints:
      - "À chaque étape, conserver la moitié dont les valeurs aux bornes sont de signes opposés."
      - "Les milieux successifs sont $3/2$, $5/4$ et $9/8$."
    expected: "[9/8, 5/4], longueur 1/8"
    accepted:
      - "[1,125 ; 1,25], longueur 0,125"
  - id: "tal-tvi-t4"
    tierTitle: "Défi avancé"
    prompt: "Pour des paramètres réels $a$ et $m$, déterminer complètement le nombre de solutions réelles distinctes de $x^3-3ax=m$. La démonstration doit traiter les cas $a\\leq0$ et $a>0$, établir les valeurs des extremums dépendant du paramètre et situer les trois racines lorsqu'elles existent."
    solution: "Posons $g_a(x)=x^3-3ax$. Si $a\\leq0$, alors $g_a'(x)=3(x^2-a)>0$, sauf au point isolé $a=x=0$ ; $g_a$ est strictement croissante de $-\\infty$ à $+\\infty$, donc chaque valeur de $m$ donne exactement une solution réelle. Supposons maintenant $a>0$. Les points critiques sont $-\\sqrt a$ et $\\sqrt a$. La fonction est croissante sur $(-\\infty,-\\sqrt a]$, décroissante sur $[-\\sqrt a,\\sqrt a]$, puis croissante sur $[\\sqrt a,+\\infty)$. Son maximum local vaut $g_a(-\\sqrt a)=2a^{3/2}$ et son minimum local vaut $g_a(\\sqrt a)=-2a^{3/2}$. Il existe donc trois racines distinctes lorsque $|m|<2a^{3/2}$, une dans chaque intervalle de monotonie ; deux racines distinctes, dont une double, lorsque $|m|=2a^{3/2}$ ; et exactement une racine réelle lorsque $|m|>2a^{3/2}$. La continuité garantit l'existence sur chaque branche indiquée et la stricte monotonie y garantit l'unicité."
    hints:
      - "Séparer les cas $a\\leq0$ et $a>0$ avant de résoudre $g_a'(x)=0$."
      - "Pour $a>0$, calculer $g_a$ en $x=\\pm\\sqrt a$."
      - "Appliquer le TVI séparément sur chaque intervalle de stricte monotonie."
    rubric:
      - "Démontre que toute valeur de $m$ donne exactement une solution lorsque $a\\leq0$."
      - "Pour $a>0$, établit les points critiques et les valeurs extrémales $\\pm2a^{3/2}$."
      - "Classe correctement les régimes à trois, deux et une racine et situe les racines selon les branches."
      - "Utilise la continuité pour l'existence et la stricte monotonie pour l'unicité sur chaque branche."
---

# Continuité et théorème des valeurs intermédiaires

La **continuité** est la propriété fondamentale des fonctions dont le graphe ne présente aucune rupture ni aucun saut.

## 1. Définition de la continuité

Une fonction $f$ est **continue en $a$** si :

$$\lim_{x \to a} f(x) = f(a)$$

Toutes les fonctions usuelles (polynômes, exponentielle, sinus, cosinus et racine carrée) sont continues sur leur ensemble de définition.

## 2. Théorème des valeurs intermédiaires (TVI)

Si $f$ est une fonction **continue** sur un intervalle $[a, b]$, alors, pour tout réel $k$ compris entre $f(a)$ et $f(b)$, il existe **au moins un** réel $c \in [a, b]$ tel que :

$$f(c) = k$$

## 3. Corollaire (théorème de la bijection)

Si $f$ est **continue** ET **strictement monotone** sur $[a, b]$, alors, pour tout réel $k$ compris entre $f(a)$ et $f(b)$, l'équation $f(x) = k$ possède une **unique** solution $c \in [a, b]$.
