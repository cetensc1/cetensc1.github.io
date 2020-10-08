
# **Definição**

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



## Limite de uma Função 

**Definição**: Seja $y = f(x)$ uma função definida na vizinhaça do ponto $a$ ou também em certos pontos desta
vizinhança. Dizemos que tal função $f$ possui um limite finito $L$ quando $x$ tende para um valor de $a$, se para cada número positivo $\epsilon$, por menor que seja, existe em correspondência um número positivo $\delta$, tal que para $|x-a| < \delta$, tenhamos $|f(x)-L| < \epsilon$, para todo $x$. Assim, como você já deve ter percebido a letra $L$ aqui representa o limite de uma função $f(x)$ quando $x$ tende para $a$, e escrevemos 

$$ \displaystyle\lim_{x\to a} f(x) = L $$ 

### Exemplo 1 

**Mostre pela definição de limite que $\displaystyle\lim_{x\to 2} 3x+1=7.$**

??? check "Solução"
    
    Aplicando a definição, temos que para todo $\epsilon > 0$ existe um $\delta > 0$ tal que 

    $$ | x-2| <\delta \Rightarrow |(3x+1)-7| < \epsilon $$ 

    Desenvolvendo, 

    Multiplicando em ambos os membros por 3 unidades, resulta em: 
  
    $$ | x - 2 | < \delta \Rightarrow 3\cdot |x-2| < 3\delta $$ 

    Como 3 unidades é positivo, podemos escrever |3|, resulta em: 

    $$ \Leftrightarrow |3|\cdot |x-2| < 3\delta $$ 

    Usando propriedades, o produto de módulos e módulo do produto, resulta em: 

    $$ \Leftrightarrow |3\cdot (x-2)| < 3\delta $$ 

    Desenvolvendo o produto, resulta em: 

    $$ \Leftrightarrow |3x-6| < 3\delta $$ 

    Veja que podemos reescrever o número -6 como sendo -7+1, este é um artifício para podermos chegarmos na expressão, resulta em: 

    $$ \Leftrightarrow |3x+(1-7)| < 3\delta $$ 

    Comparando com o enunciado da prova, resulta em: 

    $$ \Leftrightarrow |3x+1-7| < 3\delta $$

    Reeorganizando, resulta em: 

    $$ \Leftrightarrow |(3x+1)-7| < 3\delta $$ 

    Como, $|(3x+1)-7| < \epsilon$ e encontramos que $|(3x+1)-7| < 3\delta$, temos que os lados esquerdos das duas expressões são iguais, como temos uma desiguldade, implica que o lado direito das duas expressões também são iguais, logo 

    $$ 3\delta = \epsilon$$ 

    $$ \Leftrightarrow \delta = \displaystyle\frac{\epsilon}{3}$$

    Portanto, para $\displaystyle\lim_{x\to 2} 3x+1=7$ bsta tomarmos um $\delta = \displaystyle\frac{\epsilon}{3}$.

### Exemplo 2 

**Mostre que $\dlim_{x\to 3} x^2=9$.**

??? check "Solução"
   
    Temos que 
	
	  $$ \displaystyle\lim_{x\to 3} x^2=9 \Leftrightarrow $$ 
    
    $$ \forall \varepsilon >0, \exists ~ \delta >0 ~| $$
    
    $$ ~ 0<|x-3|<\delta \Rightarrow |x^2-9|< \varepsilon$$ 
	
	  Desenvolvendo, 
	
	  $$|x^2-9|<\varepsilon $$ 
    
    $$\Leftrightarrow |(x-3)(x+3)|< \varepsilon $$ 
	
	  $$\Leftrightarrow |x-3||x+3| < \varepsilon $$ 

    Supondo que $\delta \leqslant 1$
	
	  $$ |x-3|\leqslant 1 $$ 
    
    $$\Leftrightarrow -1\leqslant x-3\leqslant 1$$ 

	  Somando $6$ unidades em ambos os membros, 
	
	  $$ -1+6 \leqslant x-3+6 \leqslant 1+6 $$ 
	
	  $$ 5 \leqslant x+3\leqslant 7 $$ 
	
	  Logo, 
	
	  $$ |x+3|< 7 $$ 
	
	  Assim, $|x^2-9|=|x-3||x+3| < \delta \cdot 7 = \varepsilon$
	
	  Resultando em 
	
	  $$ \delta =\frac{\epsilon}{7} $$ 
	
	  Portanto, tome $\delta = \mbox{min}\left(1,\dfrac{\varepsilon}{7}\right)$.


??? question "Exercício Resolvido - Definição de limite"
    $\Large\dlim_{x \to 1} 3x+4=7$

??? check "Resposta em vídeo"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/ut3GP5UAJro"></iframe>
    </p>

??? question "Exercício Resolvido - Definição de limite"
    $\Large\dlim_{x \to 2} x^2 = 4$

??? check "Resposta em vídeo"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/Cd7W1UNdcxo"></iframe>
    </p>

??? question "Exercício Resolvido - Definição de limite da constante"
    $\Large\dlim_{x \to 5} -4=-4$

??? check "Resposta em vídeo"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/2JuE7OxrQTM"></iframe>
    </p>

??? question "Exercício Resolvido - Definição de limite função racional"
    $\Large\dlim_{x \to 1} \dfrac{x^2-1}{x-1} = 2$

??? check "Resposta em vídeo"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/zt9tMfrpwuc"></iframe>
    </p>

??? question "Exercício Resolvido - Definição de limite"
    $\Large\dlim_{x \to 1} \dfrac{1}{(1-x)^2} = +\infty$

??? check "Resposta em vídeo"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/wk7SOi2bgXQ"></iframe>
    </p>   

??? question "Exercício Resolvido - Definição de limite"
    $\Large\dlim_{x \to 1} \dfrac{x^3-1}{x-1} = 3$

??? check "Resposta em vídeo"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/bcTNi8QWAPU"></iframe>
    </p>

