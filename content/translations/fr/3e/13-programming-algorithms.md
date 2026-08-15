---
id: 3e-programming-algorithms
locale: fr
title: Programmation et raisonnement algorithmique
strand: Algorithmique et programmation
summary: Exécuter, concevoir, corriger et justifier des algorithmes avec des variables, des conditions, des boucles, des fonctions et des cas limites.
objectives:
  - Suivre des affectations, des conditions et des boucles
  - Concevoir et corriger des fonctions combinant conditions et boucles
  - Démontrer la correction d'un algorithme à l'aide d'un invariant et de la terminaison
prerequisites:
  - Expressions arithmétiques et division entière
  - Probabilités simples
vocabulary:
  - en: variable
    definition: Emplacement nommé qui contient une valeur susceptible de changer pendant l'exécution d'un algorithme.
  - en: conditional
    definition: Instruction qui choisit le bloc à exécuter selon la valeur d'un test booléen.
  - en: loop
    definition: Structure qui répète un bloc d'instructions.
  - en: function
    definition: Algorithme nommé qui reçoit des entrées et renvoie ou produit un résultat.
  - en: invariant
    definition: Propriété qui reste vraie avant et après chaque itération d'une boucle.
flashcards:
  - front: Que signifie une affectation telle que $x\leftarrow x+1$ ?
    back: Lire l'ancienne valeur de $x$, lui ajouter $1$, puis enregistrer le résultat dans $x$.
  - front: Quels sont les deux éléments qui prouvent qu'un algorithme à boucle termine avec le bon résultat ?
    back: Un argument de correction, souvent un invariant, et un argument de terminaison.
  - front: Une simulation démontre-t-elle une probabilité exacte ?
    back: Non. Elle estime une probabilité par une fréquence ; un raisonnement exact reste nécessaire pour la démonstration.
exercises:
  - id: 3e-programming-t1
    tierTitle: Application directe
    prompt: "Exécuter cet algorithme : poser $x\\leftarrow7$ ; si $x$ est impair, poser $x\\leftarrow3x+1$ ; sinon, poser $x\\leftarrow x/2$. Quelle est la valeur finale de $x$ ?"
    solution: "$7$ est impair, donc la première branche est exécutée : $x\\leftarrow3\\times7+1=22$. La valeur finale est $22$."
    hints:
      - "Évaluer la condition avant de choisir une branche."
  - id: 3e-programming-t2
    tierTitle: Niveau Brevet
    prompt: "Une fonction commence par $s\\leftarrow0$, puis, pour $k$ allant de $1$ à $n$, ajoute $k$ à $s$ lorsque $k$ est divisible par $3$ et retranche $1$ sinon. Construire une table d'exécution et déterminer la valeur renvoyée pour $n=8$."
    solution: "Les valeurs successives de $s$ pour $k=1,2,3,4,5,6,7,8$ sont $-1,-2,1,0,-1,5,4,3$. Les multiples $3$ et $6$ sont ajoutés ; les six autres itérations retranchent $1$. La fonction renvoie $3$."
    hints:
      - "Créer une ligne par itération avec des colonnes pour $k$, la condition et $s$."
      - "Mettre à jour $s$ à partir de sa valeur sur la ligne précédente."
    rubric:
      - "Fournit une ligne d'exécution pour chaque $k$ de $1$ à $8$."
      - "Consigne les valeurs successives $-1,-2,1,0,-1,5,4,3$."
      - "Conclut que la valeur renvoyée est $3$."
  - id: 3e-programming-t3
    tierTitle: Synthèse
    prompt: "Une fonction doit renvoyer le nombre d'entiers de $1$ à un entier positif ou nul $n$ qui sont divisibles par $3$ mais pas par $5$. Un élève écrit : poser $c\\leftarrow1$ ; pour $k$ allant de $1$ à $n-1$, si $k$ est divisible par $3$ ou n'est pas divisible par $5$, poser $c\\leftarrow c+1$ ; renvoyer $c$. Identifier et expliquer toutes les erreurs, écrire un pseudo-code corrigé avec une boucle et une condition, puis donner les résultats pour $n=16$ et $n=0$."
    solution: "Le compteur doit commencer à $0$, la boucle doit inclure $n$ et les deux tests doivent être reliés par « et », non par « ou ». Pseudo-code corrigé : poser $c\\leftarrow0$ ; pour $k$ allant de $1$ à $n$, si $k$ est divisible par $3$ et si $k$ n'est pas divisible par $5$, poser $c\\leftarrow c+1$ ; renvoyer $c$. Pour $n=16$, les valeurs comptées sont $3,6,9,12$, donc le résultat est $4$ ; $15$ est exclu. Pour $n=0$, la boucle ne s'exécute pas et renvoie $0$."
    hints:
      - "Vérifier séparément l'initialisation, les deux bornes de la boucle et le connecteur logique."
      - "Tester la fonction corrigée sur le cas limite $n=0$."
    rubric:
      - "Repère la mauvaise initialisation, la borne supérieure exclue et le mauvais connecteur logique."
      - "Écrit un pseudo-code corrigé complet avec initialisation, boucle, condition, mise à jour et retour."
      - "Obtient $4$ pour $n=16$ et explique l'exclusion de $15$."
      - "Traite $n=0$ comme une boucle vide qui renvoie $0$."
  - id: 3e-programming-t4
    tierTitle: Défi avancé
    prompt: "Pour un entier positif ou nul $n$ et un entier strictement positif $d$, on considère : poser $q\\leftarrow0$ et $r\\leftarrow n$ ; tant que $r\\ge d$, poser $r\\leftarrow r-d$ et $q\\leftarrow q+1$ ; renvoyer $(q,r)$. En utilisant seulement les outils étudiés sur les affectations et les boucles, démontrer que l'algorithme termine et renvoie le quotient et le reste euclidiens, c'est-à-dire $n=dq+r$ avec $0\\le r<d$. L'exécuter pour $(n,d)=(47,6)$ et expliquer exactement ce qui se passe lorsque $n=0$."
    solution: "L'invariant est $n=dq+r$. Au départ, $dq+r=d\\times0+n=n$. Une itération remplace $(q,r)$ par $(q+1,r-d)$ et $d(q+1)+(r-d)=dq+r$ : l'invariant est conservé. Tant que la boucle s'exécute, $r\\ge d>0$ et chaque itération diminue $r$ de l'entier positif $d$ ; la boucle termine donc. À la sortie, la condition est fausse, donc $r<d$, tandis que les soustractions successives garantissent $r\\ge0$. Avec l'invariant, on obtient la division euclidienne. Pour $47$ par $6$, les états sont $(q,r)=(1,41),(2,35),(3,29),(4,23),(5,17),(6,11),(7,5)$ ; la fonction renvoie $(7,5)$ et $47=6\\times7+5$. Si $n=0$, alors $r=0<d$ dès le départ : la boucle effectue zéro itération et renvoie $(0,0)$."
    hints:
      - "Chercher une égalité reliant l'entrée fixe $n$ aux valeurs variables $q,r$."
      - "Montrer qu'une soustraction conserve cette égalité."
      - "Utiliser $d>0$ pour expliquer la terminaison et la borne finale sur $r$."
    rubric:
      - "Énonce, initialise et conserve l'invariant $n=dq+r$."
      - "Démontre la terminaison et obtient $0\\le r<d$ à la sortie."
      - "Détaille les sept états pour $(47,6)$ et renvoie $(7,5)$."
      - "Explique que $n=0$ provoque zéro itération et renvoie $(0,0)$."
---
# Programmation et raisonnement algorithmique

## Variables et affectations

Une **variable** stocke une valeur. L'affectation

$$x\leftarrow x+3$$

n'exprime pas une égalité algébrique. Elle lit la valeur actuelle de $x$, lui ajoute $3$, puis remplace la valeur stockée. Une table d'exécution consigne les valeurs des variables après chaque instruction et évite de perdre le fil des mises à jour.

## Conditions et boucles

Une **instruction conditionnelle** exécute un bloc si un test booléen est vrai et un autre bloc sinon. Les tests comprennent les comparaisons comme $x<10$, l'égalité et la divisibilité.

Une boucle bornée répète un nombre d'itérations connu. Une boucle `tant que` se répète tant que sa condition reste vraie ; son concepteur doit donc aussi expliquer pourquoi cette condition finit par devenir fausse.

Pour une boucle allant de $1$ à $n$, le cas limite $n=0$ ne comporte aucune itération. Une initialisation correcte doit déjà fournir le résultat attendu dans ce cas de boucle vide.

## Fonctions

Une **fonction** regroupe un algorithme sous un nom. Elle possède des paramètres d'entrée, des variables locales pour les calculs intermédiaires et un résultat renvoyé. Par exemple :

```text
fonction carrePlusUn(x)
    renvoyer x*x + 1
```

Pour l'entrée $4$, elle renvoie $17$. Une fonction doit avoir un contrat clair : les entrées autorisées et la signification de sa sortie.

## Exemple d'exécution

Considérons :

```text
s <- 0
pour k allant de 1 à 4
    s <- s + 2*k
renvoyer s
```

Les valeurs successives de $s$ sont $2,6,12,20$. L'algorithme renvoie $20$. La boucle calcule le double de la somme $1+2+3+4$.

## Concevoir et corriger

On part d'un contrat précis : entrées autorisées et résultat attendu. On vérifie ensuite l'initialisation, le caractère inclusif ou exclusif des bornes, le connecteur booléen (`et` ou `ou`), chaque mise à jour et la valeur renvoyée. On exécute l'algorithme sur des entrées ordinaires et sur des cas limites comme $n=0$. Une table d'exécution fait partie de la réponse demandée : elle doit donc contenir chaque itération, et pas seulement le résultat final.

## Simulation

Pour simuler une expérience aléatoire :

1. Initialiser un compteur de succès.
2. Répéter un grand nombre d'essais indépendants.
3. Générer tous les choix aléatoires nécessaires à un essai.
4. Incrémenter le compteur exactement lorsque l'événement se réalise.
5. Renvoyer l'effectif des succès divisé par le nombre d'essais.

Une graine aléatoire fixe rend le débogage reproductible. Un échantillon plus grand améliore généralement l'estimation, mais ne transforme pas celle-ci en démonstration exacte.

## Raisonner sur les algorithmes

Des tests peuvent révéler des erreurs, mais ils ne démontrent pas la correction pour toutes les entrées. Un **invariant de boucle** est vrai avant la boucle et reste vrai après chaque itération. Une démonstration complète établit son initialisation, sa conservation et la manière dont il fournit le résultat lorsque la boucle s'arrête. Un argument distinct de terminaison identifie une quantité entière positive ou nulle qui décroît strictement.

## Erreurs fréquentes

- Lire une affectation comme une équation et utiliser trop tôt la nouvelle valeur.
- Confondre `<` et `<=`, ce qui crée une itération en trop ou en moins.
- Oublier d'initialiser ou de mettre à jour un accumulateur.
- Générer un seul dé aléatoire et le réutiliser alors que deux dés indépendants sont nécessaires.
- Écrire une boucle `tant que` sans garantir une progression vers l'arrêt.
- Affirmer la correction à partir de quelques tests réussis.

## Prolongement : quotient et reste par soustractions

Soustraire plusieurs fois un diviseur positif $d$ à $n$ en comptant les soustractions produit un quotient $q$ et un reste $r$. L'égalité $n=dq+r$ reste vraie après chaque mise à jour. Lorsque la soustraction n'est plus possible, $0\le r<d$ : c'est exactement la définition de la division euclidienne.
