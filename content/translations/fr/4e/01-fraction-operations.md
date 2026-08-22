---
id: 4e-fraction-operations
locale: fr
title: "Opérations sur les fractions : les quatre"
strand: Nombres et calcul
summary: Maîtriser l'addition, la soustraction, la multiplication et la division de fractions en s'appuyant sur les dénominateurs communs et les inverses.
objectives:
  - Additionner et soustraire des fractions de dénominateurs différents
  - Multiplier et diviser des fractions avec aisance
  - Simplifier les résultats pour obtenir des fractions irréductibles
prerequisites:
  - Fractions équivalentes
  - Plus grand diviseur commun
vocabulary:
  - en: fraction
    definition: Nombre écrit sous forme du rapport d'un numérateur à un dénominateur non nul.
  - en: common denominator
    definition: Dénominateur commun utilisé pour additionner ou soustraire des fractions de dénominateurs différents.
  - en: reciprocal
    definition: Fraction obtenue en échangeant numérateur et dénominateur ; le produit d'un nombre par son inverse vaut 1.
flashcards:
  - front: Comment additionne-t-on deux fractions de dénominateurs différents ?
    back: On les réécrit avec un dénominateur commun, puis on additionne les numérateurs. Par exemple, $\frac{2}{3}+\frac{1}{4}=\frac{8}{12}+\frac{3}{12}=\frac{11}{12}$.
  - front: Comment divise-t-on par une fraction ?
    back: On multiplie par son inverse. $\frac{a}{b}\div\frac{c}{d}=\frac{a}{b}\times\frac{d}{c}$.
  - front: Quand une fraction est-elle irréductible ?
    back: Lorsque le numérateur et le dénominateur n'ont aucun facteur commun autre que 1.
exercises:
  - id: 4e-frac-t1
    tierTitle: Application directe
    prompt: Calculer $\frac{2}{3}+\frac{1}{4}$ et donner le résultat sous forme de fraction simplifiée.
    solution: Le PPCM de 3 et 4 est 12. $\frac{2}{3}=\frac{8}{12}$ et $\frac{1}{4}=\frac{3}{12}$, donc $\frac{8}{12}+\frac{3}{12}=\frac{11}{12}$.
    hints:
      - Trouver un dénominateur commun pour 3 et 4.
  - id: 4e-frac-t2
    tierTitle: Entraînement standard
    prompt: Une recette utilise $\frac{3}{4}$ de litre de lait. Marie a déjà versé $\frac{1}{3}$ de litre. Quelle fraction de litre doit-elle encore ajouter ? Ensuite, elle souhaite tripler la recette. Combien de lait faut-il pour la recette triplée ?
    solution: Elle doit encore ajouter $\frac{3}{4}-\frac{1}{3}=\frac{9}{12}-\frac{4}{12}=\frac{5}{12}$ de litre. La recette triplée nécessite $3\times\frac{3}{4}=\frac{9}{4}$ litres, soit $2\frac{1}{4}$ litres.
    hints:
      - Soustraire la quantité déjà versée de la quantité totale nécessaire.
      - Pour tripler, multiplier la quantité initiale par 3.
  - id: 4e-frac-t3
    tierTitle: Synthèse du programme officiel
    prompt: Montrer que $\frac{2}{5}\div\frac{3}{7}+\frac{1}{2}=\frac{59}{30}$. Justifier chaque étape en citant la règle utilisée.
    solution: D'abord, $\frac{2}{5}\div\frac{3}{7}=\frac{2}{5}\times\frac{7}{3}=\frac{14}{15}$ (diviser revient à multiplier par l'inverse). Puis $\frac{14}{15}+\frac{1}{2}=\frac{28}{30}+\frac{15}{30}=\frac{43}{30}$. Or $\frac{43}{30}\neq\frac{59}{30}$, donc l'égalité est fausse. Le résultat correct est $\frac{43}{30}$.
    hints:
      - Effectuer la division avant l'addition (priorité des opérations).
      - Transformer la division en multiplication par l'inverse, puis trouver un dénominateur commun pour l'addition.
    rubric:
      - Transforme correctement la division en multiplication par l'inverse.
      - Trouve un dénominateur commun et effectue l'addition sans erreur.
      - Conclut si l'égalité est vérifiée et donne le résultat simplifié correct.
  - id: 4e-frac-t4
    tierTitle: Défi avancé
    prompt: Trouver tous les couples d'entiers positifs $(a,b)$ avec $a<b$ tels que $\frac{1}{a}+\frac{1}{b}=\frac{1}{4}$. Démontrer que tous les couples ont été trouvés.
    solution: >-
      $\frac{1}{a}+\frac{1}{b}=\frac{1}{4}$ donne $\frac{a+b}{ab}=\frac{1}{4}$, soit $4(a+b)=ab$. En réarrangeant : $ab-4a-4b=0$, d'où $(a-4)(b-4)=16$. Puisque $a<b$ et les deux sont des entiers positifs avec $a>4$, les couples de facteurs de 16 avec $d_1<d_2$ sont $(1,16)$ et $(2,8)$ (le cas $(4,4)$ donne $a=b$). Donc $(a,b)=(5,20)$ ou $(a,b)=(6,12)$. Vérification : $\frac{1}{5}+\frac{1}{20}=\frac{5}{20}=\frac{1}{4}$ et $\frac{1}{6}+\frac{1}{12}=\frac{3}{12}=\frac{1}{4}$.
    hints:
      - Réduire au même dénominateur pour obtenir une équation produit en $a$ et $b$.
      - Ajouter 16 aux deux membres pour factoriser le membre de gauche sous la forme $(a-4)(b-4)$.
    rubric:
      - Obtient correctement l'équation $(a-4)(b-4)=16$.
      - Énumère systématiquement les couples de facteurs et retrouve les valeurs de $(a,b)$.
      - Vérifie chaque solution et justifie l'exhaustivité.
---
## Additionner et soustraire des fractions

Pour additionner ou soustraire des fractions, elles doivent avoir le même dénominateur. Lorsque les dénominateurs diffèrent, on réécrit chaque fraction avec un **dénominateur commun**, en général le plus petit commun multiple (PPCM) des deux dénominateurs.

$$\frac{2}{3}+\frac{1}{4}=\frac{8}{12}+\frac{3}{12}=\frac{11}{12}$$

La soustraction suit le même procédé :

$$\frac{5}{6}-\frac{1}{4}=\frac{10}{12}-\frac{3}{12}=\frac{7}{12}$$

Il faut toujours simplifier le résultat. Si le numérateur et le dénominateur ont un facteur commun, on les divise tous deux par leur PGCD.

## Multiplier des fractions

On multiplie les numérateurs entre eux et les dénominateurs entre eux :

$$\frac{a}{b}\times\frac{c}{d}=\frac{a\times c}{b\times d}$$

On peut simplifier avant de multiplier. Par exemple :

$$\frac{3}{8}\times\frac{4}{9}=\frac{3\times 4}{8\times 9}=\frac{12}{72}=\frac{1}{6}$$

En simplifiant d'abord : $\frac{3}{8}\times\frac{4}{9}=\frac{\cancel{3}}{\cancel{8}\,2}\times\frac{\cancel{4}\,1}{\cancel{9}\,3}=\frac{1}{6}$.

## Diviser par une fraction

Diviser par une fraction revient à multiplier par son **inverse** :

$$\frac{a}{b}\div\frac{c}{d}=\frac{a}{b}\times\frac{d}{c}$$

L'inverse de $\frac{c}{d}$ est $\frac{d}{c}$ (avec $c\neq 0$). Exemple :

$$\frac{5}{6}\div\frac{2}{3}=\frac{5}{6}\times\frac{3}{2}=\frac{15}{12}=\frac{5}{4}$$

## Opérations combinées et priorités

Lorsqu'une expression comporte plusieurs opérations sur les fractions, on respecte l'ordre habituel : multiplications et divisions avant additions et soustractions, de gauche à droite au même niveau.

$$\frac{1}{2}+\frac{3}{4}\times\frac{2}{5}=\frac{1}{2}+\frac{6}{20}=\frac{1}{2}+\frac{3}{10}=\frac{5}{10}+\frac{3}{10}=\frac{8}{10}=\frac{4}{5}$$

### Pour aller plus loin

$\frac{1}{a}+\frac{1}{b}$ peut-il être égal à $\frac{1}{a+b}$ ? Essayer quelques valeurs et expliquer ce que l'on observe.
