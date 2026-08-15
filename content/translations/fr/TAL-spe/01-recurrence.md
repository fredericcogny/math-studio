---
id: "tal-recurrence"
locale: "fr"
title: "Raisonnement par récurrence"
strand: "Analyse et suites"
summary: "Apprendre la structure logique rigoureuse de la démonstration par récurrence sur l'ensemble des entiers naturels."
objectives:
  - "Rédiger les trois étapes : initialisation, hérédité et conclusion"
  - "Démontrer des égalités et des inégalités pour tout n >= n0"
  - "Éviter les analogies non rigoureuses et démontrer la transmission de la propriété"
prerequisites:
  - "Suites numériques et notation généralisée"
  - "Calcul algébrique et factorisation"
vocabulary:
  - en: "Proof by induction"
    definition: "Principe de démonstration sur les entiers naturels reposant sur une étape initiale et une étape d'hérédité."
  - en: "Base step"
    definition: "Vérification que la propriété P(n) est vraie au rang initial n0."
flashcards:
  - front: "Quelles sont les trois étapes fondamentales d'un raisonnement par récurrence ?"
    back: "1. Initialisation (rang n0), 2. Hérédité (si P(k) est vraie, alors P(k+1) est vraie), 3. Conclusion."
  - front: "Pourquoi l'étape d'hérédité seule ne suffit-elle pas ?"
    back: "Sans initialisation, la chaîne n'a pas de point de départ (effet domino sans chute du premier domino)."
exercises:
  - id: "tal-rec-t1"
    tierTitle: "Application directe"
    prompt: "Énoncer, dans l'ordre, les trois parties nécessaires d'un raisonnement par récurrence commençant au rang $n_0$."
    solution: "On vérifie d'abord l'initialisation $P(n_0)$. On démontre ensuite l'hérédité : pour un entier quelconque $k\\ge n_0$, on suppose $P(k)$ vraie et l'on en déduit $P(k+1)$. Enfin, on invoque le principe de récurrence pour conclure que $P(n)$ est vraie pour tout $n\\ge n_0$."
    hints:
      - "Penser au premier domino, à la règle de transmission et à la conclusion logique finale."
    expected: "initialisation ; hérédité ; conclusion"
    accepted:
      - "cas de base ; étape d'hérédité ; conclusion"
      - "initialisation; hérédité; conclusion"
  - id: "tal-rec-t2"
    tierTitle: "Entraînement standard"
    prompt: "Démontrer par récurrence que $1+3+5+\\cdots+(2n-1)=n^2$ pour tout entier $n\\ge1$."
    solution: "Notons $P(n)$ l'identité proposée. Pour $n=1$, les deux membres valent $1$. Supposons $P(k)$ vraie : la somme des $k$ premiers entiers impairs vaut $k^2$. En ajoutant l'entier impair suivant, on obtient $k^2+[2(k+1)-1]=k^2+2k+1=(k+1)^2$, ce qui est précisément $P(k+1)$. L'identité est donc vraie pour tout $n\\ge1$ d'après le principe de récurrence."
    hints:
      - "L'entier impair ajouté lors du passage du rang $k$ au rang $k+1$ est $2k+1$."
      - "Rédiger explicitement l'initialisation, l'hypothèse de récurrence, la transition et la conclusion."
    rubric:
      - "Vérifie l'initialisation pour $n=1$."
      - "Énonce l'hypothèse de récurrence pour un entier quelconque $k\\ge1$."
      - "Ajoute $2k+1$ et simplifie l'expression en $(k+1)^2$."
      - "Conclut à l'aide du principe de récurrence."
  - id: "tal-rec-t3"
    tierTitle: "Synthèse"
    prompt: "Soient $u_0=0$ et $u_{n+1}=\\sqrt{2+u_n}$. Démontrer simultanément par récurrence que $0\\le u_n<2$ pour tout $n$ et que $(u_n)$ est strictement croissante. En déduire qu'elle converge et déterminer sa limite."
    solution: "L'encadrement est vérifié pour $n=0$. Si $0\\le u_n<2$, alors $0<u_{n+1}=\\sqrt{2+u_n}<2$ ; l'encadrement est donc héréditaire. De plus, $u_1=\\sqrt2>u_0$. Si $u_n>u_{n-1}$, la stricte croissance de la fonction racine carrée donne $u_{n+1}=\\sqrt{2+u_n}>\\sqrt{2+u_{n-1}}=u_n$. La suite est ainsi strictement croissante et majorée par $2$ ; elle converge donc vers un réel $L\\in[0,2]$. Le passage à la limite donne $L=\\sqrt{2+L}$, puis $(L-2)(L+1)=0$ ; par conséquent, $L=2$."
    hints:
      - "Pour la majoration, comparer $2+u_n$ à $4$."
      - "Pour la monotonie, utiliser la stricte croissance de $x\\mapsto\\sqrt{2+x}$."
      - "N'écrire l'équation du point fixe qu'après avoir démontré la convergence."
    rubric:
      - "Démontre $0\\le u_n<2$ par une récurrence complète."
      - "Démontre la stricte croissance à l'aide d'une comparaison initiale et de la relation de récurrence."
      - "Invoque la convergence monotone et bornée avant de passer à la limite."
      - "Résout l'équation du point fixe et retient $L=2$."
  - id: "tal-rec-t4"
    tierTitle: "Défi avancé"
    prompt: "Soient $F_2=1$, $F_3=2$ et $F_{n+1}=F_n+F_{n-1}$ pour $n\\ge3$. Démontrer par récurrence forte que tout entier strictement positif peut s'écrire comme une somme de termes distincts et deux à deux non consécutifs parmi $F_2,F_3,F_4,\\ldots$ (partie « existence » du théorème de Zeckendorf)."
    solution: "Raisonnons par récurrence forte sur l'entier $N$. La propriété est immédiate pour $N=1=F_2$ et $N=2=F_3$. Supposons-la vraie pour tout entier strictement positif inférieur à $N$. Choisissons le plus grand $F_k\\le N$ et posons $r=N-F_k$. Si $r=0$, la démonstration est terminée. Sinon, $r<N$ ; l'hypothèse de récurrence forte permet donc d'écrire $r$ comme une somme de termes de Fibonacci distincts et non consécutifs. La maximalité de $F_k$ donne $N<F_{k+1}=F_k+F_{k-1}$, donc $r<F_{k-1}$. La décomposition de $r$ ne peut par conséquent contenir aucun terme aussi grand que $F_{k-1}$ ; tous ses termes ont un indice inférieur ou égal à $k-2$. L'ajout de $F_k$ préserve le caractère distinct et non consécutif des indices et fournit une représentation de $N$. La récurrence forte est achevée."
    hints:
      - "Choisir le plus grand terme de Fibonacci inférieur ou égal à l'entier considéré."
      - "Montrer que le reste est strictement inférieur au terme de Fibonacci précédent."
      - "La récurrence forte est nécessaire, car le reste n'est pas nécessairement égal à $N-1$."
    rubric:
      - "Met en place une récurrence forte avec des cas initiaux valides."
      - "Choisit un terme maximal $F_k\\le N$ et applique l'hypothèse au reste, qui est plus petit."
      - "Utilise $N<F_{k+1}$ pour démontrer $N-F_k<F_{k-1}$."
      - "Explique correctement pourquoi l'ajout de $F_k$ préserve des indices distincts et non consécutifs."
---

# Raisonnement par récurrence

Le **raisonnement par récurrence** est l'outil fondamental d'analyse et d'algèbre permettant de démontrer qu'une propriété $P(n)$ est vraie pour tout entier naturel $n \ge n_0$.

## 1. Le principe de l'effet domino

Imaginons une file infinie de dominos numérotés $0, 1, 2, \dots, n$. Pour s'assurer que **tous** les dominos vont tomber :
1. Il faut faire tomber le premier domino (initialisation).
2. Il faut s'assurer que, si le $k$-ième domino tombe, il fait obligatoirement tomber le $(k+1)$-ième domino (hérédité).

## 2. Structure rigoureuse de la démonstration

Pour démontrer qu'une propriété $P(n)$ est vraie pour tout $n \ge n_0$ :

### Étape 1 : Initialisation
On vérifie que la propriété $P(n_0)$ est **vraie** au rang initial $n_0$.

### Étape 2 : Hérédité
Soit $k \ge n_0$ un entier fixé. On suppose que la propriété $P(k)$ est vraie (**hypothèse de récurrence**).
On démontre alors que la propriété $P(k+1)$ est également vraie.

### Étape 3 : Conclusion
La propriété $P(n_0)$ est vraie et elle est héréditaire. D'après le principe de récurrence, $P(n)$ est vraie pour tout entier naturel $n \ge n_0$.

## 3. Exemple d'application : somme des premiers entiers

Montrons par récurrence que, pour tout $n \ge 1$ :

$$\sum_{i=1}^n i = 1 + 2 + \dots + n = \frac{n(n+1)}{2}$$

* **Initialisation ($n=1$)** : $1 = \frac{1(1+1)}{2} = 1$. Vrai.
* **Hérédité** : supposons que $1 + \dots + k = \frac{k(k+1)}{2}$. Alors :
  $$1 + \dots + k + (k+1) = \frac{k(k+1)}{2} + (k+1) = (k+1)\left(\frac{k}{2} + 1\right) = \frac{(k+1)(k+2)}{2}$$
  Ce qui démontre $P(k+1)$.
