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

<style>
p.combinado:first-letter { 
	color: #F5843A; 
	font-size:xx-large; 
}
.info {
  background-color: #e7f3fe;
  border-left: 6px solid #2196F3;
}
.success {
  background-color: #ddffdd;
  border-left: 6px solid #4CAF50;
}

.danger {
  background-color: #ffdddd;
  border-left: 6px solid #f44336;
}
</style>


<style>
p.combinado:first-letter { 
	color: #F5843A; 
	font-size:xx-large; 
}

.button {
  border-radius: 20px;
  background-color: #009688;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 15px;
  padding: 10px;
  width: 150px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}


.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}	

/** AVISOS **/
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 50px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.alert {
  padding: 12px;
  background-color: #f44336;
  color: white;
  border-radius: 50px;
}

.success {
  padding: 12px;
  background-color: #6BBD6E;
  color: white;
  border-radius: 50px;
}

.info {
  padding: 12px;
  background-color: #47A8F5;
  color: white;
  border-radius: 50px;
}

.warning {
  padding: 12px;
  background-color: #FFAA2C;
  color: white;
  border-radius: 50px;
}

.closebtn {
  margin-left: 25px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 25px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}

/** ANOTAÇÕES **/

.atencao {
  background-color: #ffdddd;
  border-left: 6px solid #f44336;
  margin-bottom: 15px;
  padding: 4px 12px;
}

.sucesso {
  background-color: #ddffdd;
  border-left: 6px solid #4CAF50;
  margin-bottom: 15px;
  padding: 4px 12px;
}

.informacao {
  background-color: #e7f3fe;
  border-left: 6px solid #2196F3;
  margin-bottom: 15px;
  padding: 4px 12px;
}


.atento {
  background-color: #ffffcc;
  border-left: 6px solid #ffeb3b;
  margin-bottom: 15px;
  padding: 4px 12px;
}
</style>

Propriedades do Limite de uma Função
 
 
+  $\displaystyle\lim_{x\to a} k = k ; ~ k \in \mathbb{R}$ 

$$\displaystyle\lim_{x\to 5} -\pi^{7}= - \pi^{7}$$ 

$\displaystyle\lim_{x\to a} k \cdot f(x)= k\cdot \displaystyle\lim_{x\to a} f(x)$ 

$$\displaystyle\lim_{x\to \frac{\pi}{4}} -\sqrt{7}\cdot \text{cotg}(x) $$ 

$$ = -\sqrt{7}\cdot \displaystyle\lim_{x\to \frac{\pi}{4}} \text{cotg}(x)$$ 

+ $\displaystyle\lim_{x\to a} \left[f(x)\pm g(x)\right]=\displaystyle\lim_{x\to a} f(x) \pm \displaystyle\lim_{x\to a} g(x)$

$$\displaystyle\lim_{x\to -1} \left[ 2^{x}+x^{3}\right]$$ 
   
$$= \displaystyle\lim_{x\to -1} 2^{x} + \displaystyle\lim_{x\to -1} x^{3} $$ 

+  $\displaystyle\lim_{x\to a} \left[f(x)\cdot g(x)\right]= \displaystyle\lim_{x\to a} f(x)\cdot \displaystyle\lim_{x\to a} g(x)$ 

$$\displaystyle\lim_{x\to \frac{\pi}{6}} (x^2+1)\cdot \mbox{arctg}(x)=\displaystyle\lim_{x\to \displaystyle\frac{\pi}{6}} (x^2+1)\cdot \displaystyle\lim_{x\to \frac{\pi}{6}} \mbox{arctg}(x)$$ 

+ $\displaystyle\lim_{x\to a} \displaystyle\frac{f(x)}{g(x)} = \displaystyle\frac{\displaystyle\lim_{x\to a}f(x)}{\displaystyle\lim_{x\to a} g(x)}; \displaystyle\lim_{x\to a} g(x) \neq 0$

 	$$\displaystyle\lim_{x\to 1} \displaystyle\frac{x^3+4x^2+1}{x^2+1} =\displaystyle\frac{ \displaystyle\lim_{x\to 1} x^3+4x^2+1}{\displaystyle\lim_{x\to 1}x^2+1} =3$$ 

+ $\displaystyle\lim_{x\to a} \left[f(x)\right]^{n} = \left[\displaystyle\lim_{x\to a} f(x)\right]^{n},~n \in \mathbb{N}^{*}$ 

$$\displaystyle\lim_{x\to 2 } (x^3+1)^{10} = \left[\displaystyle\lim_{x\to 1}x^3+1\right]^{10} $$ 

+ $\displaystyle\lim_{x\to a } \sqrt[n]{f(x)} = \displaystyle\sqrt[n]{\displaystyle\lim_{x\to a}f(x)}$ 
 	
$$\displaystyle\lim_{x\to 5} \sqrt[3]{x^2+1} = \sqrt[3]{\displaystyle\lim_{x\to 5}(x^2+1)}$$ 
 

## Limite de uma Função Racional Inteira (Polinomial)


Seja $f(x)=a_0x^n+a_1x^{n-1}+\cdots + a_n$, então 

$$\displaystyle\lim_{x\to b } f(x)$$ 

$$= \displaystyle\lim_{x\to b} a_0x^n+a_1x^{n-1}+\cdots + a_n$$ 

$$= ab^n+a_1b^{n-1}+\cdots+a_n = f(b)$$

## Limites básicos 

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


### Exemplo 1 

**Calcule $\displaystyle\lim_{x\to 1} \left[\displaystyle\frac{1}{1-x}-\dfrac{3}{1-x^3}\right]$.**

!!! abstract "Solução"

    Fazendo $x\to 1$, temos 

    $$\displaystyle\lim_{x\to 1} \left[\displaystyle\frac{1}{1-x}-\displaystyle\frac{3}{1-x^3}\right]$$
    
    $$ =\left[\displaystyle\frac{1}{1-1}-\displaystyle\frac{3}{1-(1)^3}\right]$$
    
    $$ = \left[\displaystyle\frac{1}{0}-\displaystyle\frac{3}{0}\right] $$ 
    
    $$ = \infty-\infty \rightarrow \mbox{Indeterminação} $$ 

    Resolvendo essa diferença de frações, obtemos 

    $$=\displaystyle\lim_{x\to 1} \left[\displaystyle\frac{1-x^3-3(1-x)}{(1-x)(1-x^3)}\right]$$

    $$=\displaystyle\lim_{x\to 1} \left[\displaystyle\frac{-x^3+3x-2}{(1-x)(1-x^3)}\right]$$  

    Precisamos retirar a indeterminação, para isso vamos fatorar os polinômios do numerador e denominador. 

    Para o numerador, temos $x^3+3x-2$, como temos uma das raízes, fatoramos usando o dispositivo de Briot Ruffini, 

    $$\begin{array}{c|cccc}
    1 & -1 & 0 & 3 & -2 \\ \hline 
    & -1 & -1 & 2 & 0 
    \end{array}$$ 

    Assim, temos 

    $$ =\displaystyle\lim_{x\to 1} \displaystyle\frac{(x-1)(-x^2-x+2)}{-(x-1)(1-x^3)}$$ 

    $$ =\displaystyle\lim_{x\to 1} \displaystyle\frac{-x^2-x+2}{-(1-x^3)}$$ 

    Fazendo novamente $x\to 1$, temos 

    $$ =\displaystyle\lim_{x\to 1} \displaystyle\frac{-x^2-x+2}{-(1-x^3)}$$ 
    
    $$ =\displaystyle\frac{0}{0} \rightarrow \mbox{Indeterminação}$$ 

    Fatorando novamente usando Ruffini, 

    $$ \begin{array}{c|ccc}
    1 & -1 & -1 & 2\\ \hline 
    & -1 & -2 & 0 
    \end{array}$$ 


    Assim, 

    $$=\displaystyle\lim_{x\to 1} \displaystyle\frac{ (x-1)(-x-2)}{(x-1)(x^2+x+1)}$$ 

    $$=\displaystyle\lim_{x\to 1} \displaystyle\frac{-x-2}{x^2+x+1}= \displaystyle\frac{-3}{3}=-1$$





<!-- 
!!! tip "Videoaula 1"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/kJYLWFwfL80"></iframe>
    </p>

!!! abstract "Instalação dos programas MiKTeX e TeXstudio"
    
    **Instalação do TeXstudio**: 

    Acesse texstudio.org ou digite no seu navegador de preferência, ou seja, dá um google em "texstudio", normalmente é o primeiro resultado que aparece na pesquisa. $f(x)$

    Ao clicar, você será levado a página de baixar em função do seu sistema operacional. Basta clicar e aguardar o download. 


## Exercício A 

1. Determine a função derivada de $f(x) = x^4 - \sin(x) + \frac{x^{-2}}{-\pi}$ 

**Solução:** 

Temos que $f(x)$ é uma junção de dois tipos de funções, função polinomial com função trigonométrica. Para derivar $f(x)$ basta utilizar a propriedade básica: 

$$f(x) = x^4 - \sin(x) + \frac{x^{-2}}{-\pi}$$ 

$$ f'(x) = 4x^3 - \cos(x) + \left( \frac{-2x^{-1}}{-\pi} \right)$$ 

$$ f'(x) = 4x^3 - \cos(x) + \displaystyle\frac{2x^{-1}}{\pi} $$ 

Que podemos ainda reescrever, ficando 

$$ f'(x) = 4x^3 - \cos(x) + \frac{2}{\pi x} $$ 

## Fundamento legal - obrigatoriedade

<p style="text-align: justify;">
A determinação legal decorre do artigo 67 da Lei 8.666/93. O Artigo 58, inciso III da citada Lei
assegura à Administração a prerrogativa de fiscalizar os contratos.

</p>
-->




