# **Propriedades**

:material-cursor-default-click-outline: Clique no botão abaixo para alternar visualização:

<div class="tx-switch">
  <button data-md-color-scheme="default"><code>Visualização normal</code></button>
  <button data-md-color-scheme="slate"><code>Visualização contraste</code></button>
</div>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-scheme]")
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      var attr = this.getAttribute("data-md-color-scheme")
      document.body.setAttribute("data-md-color-scheme", attr)
      var name = document.querySelector("#__code_0 code span:nth-child(7)")
      name.textContent = attr
    })
  })
</script>



## Propriedades do Limite de uma Função
 
 
+  $\displaystyle\lim_{x\to a} k = k ; ~ k \in \mathbb{R}$ 

$$\displaystyle\lim_{x\to 5} -\pi^{7}= - \pi^{7}$$ 

+ $\displaystyle\lim_{x\to a} k \cdot f(x)= k\cdot \displaystyle\lim_{x\to a} f(x)$ 

$$\displaystyle\lim_{x\to \frac{\pi}{4}} -\sqrt{7}\cdot \text{cotg}(x) $$ 

$$ = -\sqrt{7}\cdot \displaystyle\lim_{x\to \frac{\pi}{4}} \text{cotg}(x)$$ 

+ $\displaystyle\lim_{x\to a} \left[f(x)\pm g(x)\right]=\displaystyle\lim_{x\to a} f(x) \pm \displaystyle\lim_{x\to a} g(x)$

$$\displaystyle\lim_{x\to -1} \left[ 2^{x}+x^{3}\right]$$ 
   
$$= \displaystyle\lim_{x\to -1} 2^{x} + \displaystyle\lim_{x\to -1} x^{3} $$ 

+  $\displaystyle\lim_{x\to a} \left[f(x)\cdot g(x)\right]= \displaystyle\lim_{x\to a} f(x)\cdot \displaystyle\lim_{x\to a} g(x)$ 

$$\displaystyle\lim_{x\to \frac{\pi}{6}} (x^2+1)\cdot \mbox{arctg}(x)$$ 

$$=\displaystyle\lim_{x\to \displaystyle\frac{\pi}{6}} (x^2+1)\cdot \displaystyle\lim_{x\to \frac{\pi}{6}} \mbox{arctg}(x)$$ 

+ $\displaystyle\lim_{x\to a} \displaystyle\frac{f(x)}{g(x)} = \displaystyle\frac{\displaystyle\lim_{x\to a}f(x)}{\displaystyle\lim_{x\to a} g(x)}; \displaystyle\lim_{x\to a} g(x) \neq 0$

$$\displaystyle\lim_{x\to 1} \displaystyle\frac{x^3+4x^2+1}{x^2+1}$$ 

$$=\displaystyle\frac{ \displaystyle\lim_{x\to 1} x^3+4x^2+1}{\displaystyle\lim_{x\to 1}x^2+1} =3$$ 

+ $\displaystyle\lim_{x\to a} \left[f(x)\right]^{n} = \left[\displaystyle\lim_{x\to a} f(x)\right]^{n},~n \in \mathbb{N}^{*}$ 

$$\displaystyle\lim_{x\to 2 } (x^3+1)^{10} = \left[\displaystyle\lim_{x\to 1}x^3+1\right]^{10} $$ 

+ $\displaystyle\lim_{x\to a } \sqrt[n]{f(x)} = \displaystyle\sqrt[n]{\displaystyle\lim_{x\to a}f(x)}$ 
 	
$$\displaystyle\lim_{x\to 5} \sqrt[3]{x^2+1} = \sqrt[3]{\displaystyle\lim_{x\to 5}(x^2+1)}$$ 
 

## Limite de uma Função Racional Inteira (Polinomial)


Seja $f(x)=a_0x^n+a_1x^{n-1}+\cdots + a_n$, então 
$\displaystyle\lim_{x\to b } f(x)$ 

$$= \displaystyle\lim_{x\to b} a_0x^n+a_1x^{n-1}+\cdots + a_n$$ 

$$= ab^n+a_1b^{n-1}+\cdots+a_n = f(b)$$


## Propriedades de limite

**Calcule**: 

$$\dlim_{x\to 1} 3x^2 + x - 1$$ 

??? check "Limite função racional"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/0IqJ7OK_7cg"></iframe>
    </p>


## Limites Indeterminados 

Temos que  

1. $\displaystyle\lim_{x\to a} \displaystyle\frac{f(x)}{g(x)}$

Aplicando a propriedade, resulta em: 

$$ \displaystyle\frac{\displaystyle\lim_{x\to a}f(x)}{\displaystyle\lim_{x\to a}g(x)}$$

Quando fizermos $x \to a$ resultar em $f(x) \to 0$, $g(x) \to 0$; $f(x) \to \infty$ e $g(x) \to \infty$, 
resultaria em um quociente dos tipos: 

$$ \displaystyle\frac{``0"}{0}$$ 

e 

$$ \displaystyle\frac{``\infty"}{\infty}$$

Que são expressões onde não é possível determinarmos um valor para elas, logo são ditas expressões indeterminadas. Muitos limites após fazermos $x\to a$ podem resultar em uma dessas expressões, para estes limites, respeitando especificidades, teremos que utilizar de procedimentos algébricos e manipulações matemáticas adequadas para "**Retirar**" a indeterminação, para assim, calcularmos o limite. 

O mesmo acontece, com expressões do tipo 

$$`` \infty - \infty "$$ 


## Exemplo 1 

**Calcule $\displaystyle\lim_{x\to 1} \left[\displaystyle\frac{1}{1-x}-\dfrac{3}{1-x^3}\right]$.**

??? check "Solução"

    Fazendo $x\to 1$, temos 

    $$\Large\displaystyle\lim_{x\to 1} \left[\displaystyle\frac{1}{1-x}-\displaystyle\frac{3}{1-x^3}\right]$$
    
    $$ \Large=\left[\displaystyle\frac{1}{1-1}-\displaystyle\frac{3}{1-(1)^3}\right]$$
    
    $$ \Large= \left[\displaystyle\frac{1}{0}-\displaystyle\frac{3}{0}\right] $$ 
    
    $$ \Large= \infty-\infty \rightarrow \mbox{Indeterminação} $$ 

    Resolvendo essa diferença de frações, obtemos 

    $$\Large=\displaystyle\lim_{x\to 1} \left[\displaystyle\frac{1-x^3-3(1-x)}{(1-x)(1-x^3)}\right]$$

    $$\Large=\displaystyle\lim_{x\to 1} \left[\displaystyle\frac{-x^3+3x-2}{(1-x)(1-x^3)}\right]$$  

    Precisamos retirar a indeterminação, para isso vamos fatorar os polinômios do numerador e denominador. 

    Para o numerador, temos $x^3+3x-2$, como temos uma das raízes, fatoramos usando o dispositivo de Briot Ruffini, 

    $$\Large\begin{array}{c|cccc}
    1 & -1 & 0 & 3 & -2 \\ \hline 
    & -1 & -1 & 2 & 0 
    \end{array}$$ 

    Assim, temos 

    $$ \Large=\displaystyle\lim_{x\to 1} \displaystyle\frac{(x-1)(-x^2-x+2)}{-(x-1)(1-x^3)}$$ 

    $$ \Large=\displaystyle\lim_{x\to 1} \displaystyle\frac{-x^2-x+2}{-(1-x^3)}$$ 

    Fazendo novamente $x\to 1$, temos 

    $$ \Large=\displaystyle\lim_{x\to 1} \displaystyle\frac{-x^2-x+2}{-(1-x^3)}$$ 
    
    $$ \Large=\displaystyle\frac{0}{0} \rightarrow \mbox{Indeterminação}$$ 

    Fatorando novamente usando Ruffini, 

    $$ \Large\begin{array}{c|ccc}
    1 & -1 & -1 & 2\\ \hline 
    & -1 & -2 & 0 
    \end{array}$$ 


    Assim, 

    $$\Large=\displaystyle\lim_{x\to 1} \displaystyle\frac{ (x-1)(-x-2)}{(x-1)(x^2+x+1)}$$ 

    $$\Large=\displaystyle\lim_{x\to 1} \displaystyle\frac{-x-2}{x^2+x+1}= \displaystyle\frac{-3}{3}=-1$$

## Exercício resolvido 1 

**Determine o seguinte limite**: 
$$ \dlim_{x\to 0} \dfrac{1 - \sqrt[3]{1-x}}{x}$$ 

??? check "Limite Indeterminado"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/mWnO5a8S9v4"></iframe>
    </p>

## Exercício resolvido 2 

**Determine o seguinte limite**: 
$$ \dlim_{x\to 2} \dfrac{x^2-4}{x-2}$$ 

??? check "Limite Indeterminado 2"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/h26QwqUgmLc"></iframe>
    </p>

## Exercício resolvido 3 

**Determine o seguinte limite**: 
$$ \dlim_{x\to 0} \dfrac{\sqrt{\cos(x)} - \sqrt[3]{\cos(x)}}{\text{sen}^2(x)}$$ 

??? check "Limite Indeterminado 4"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/au8dFcsEBmE"></iframe>
    </p>

## Exercício resolvido 4

**Determine o seguinte limite**: 
$$ \dlim_{x\to \dfrac{\pi}{6}} \dfrac{2\text{sen}^2(x) + \text{sen}(x) - 1}{2\text{sen}^2(x) - 3\text{sen}(x) + 1}$$ 

??? check "Limite Indeterminado 5"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/n5axuGG8sQc"></iframe>
    </p>



