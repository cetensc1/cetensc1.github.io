
# **Infinitos**

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


## Definição 

Escrevemos $\dlim_{x\to a} f(x)=+\infty$ se $\forall \varepsilon  > 0 , \exists \delta >0 $ tal que $|x-a|<\delta \Rightarrow f(x)>\varepsilon$. 


## Exemplo 1 

Mostre que $\dlim_{x\to 0} \dfrac{1}{x^2}=+\infty$. 

??? check "Solução"
    $\Large\text{Vamos encontrar um número}$ $\Large \delta >0$ $\Large\text{tal que}$
	
    $$\Large |x-0|<\delta \Rightarrow \dfrac{1}{x^2}> M $$ 
	
    $\Large\text{Ou seja,}$ 
	
    $$\Large -\delta < x < \delta \Rightarrow \dfrac{1}{x^2} > M $$ 
	
    $\Large\text{Note que}$ 
	
    $$\Large\dfrac{1}{x^2} > M \Leftrightarrow x^2 < \dfrac{1}{M} $$ 
	
    $$\Large\Leftrightarrow |x|^2 < \dfrac{1}{M} \Leftrightarrow |x| < \sqrt{\dfrac{1}{M}} = \delta $$ 
	
    $\Large\text{Assim, basta tomar}$ $\Large\delta = \dfrac{1}{\sqrt{M}}$.
    

## Definição 2 

Escrevemos $\dlim_{x\to a} f(x)=-\infty$ se $\forall M < 0 \exists \delta > 0$ tal que $ 0<|x-a|<\delta \Rightarrow f(x)< M $. 


## Propriedades de Limites Infinitos

Se $c \in \R^{*}$, se $\dlim_{x\to a} f(x)=0$ e $\dlim_{x\to a} g(x)=c$. Temos 


1. Se $c>0$ e se $f(x) \to 0$ por valores positivos, então 

$$\dlim_{x\to a} \dfrac{ g(x)}{f(x)}=+\infty$$ 

2. Se $c>0$ e se $f(x)\to 0$ por valores negativos de $f(x)$, então 

$$\dlim_{x\to a} \dfrac{g(x)}{f(x)} = -\infty$$ 

3. Se $c<0$ e $f(x)\to 0 $ por valores positivos, então 

$$\dlim_{x\to a} \dfrac{g(x)}{f(x)}=-\infty$$ 

4. Se $c<0$ e $f(x)\to 0$ por valores negativos, então 

$$\dlim_{x\to a} \dfrac{g(x)}{f(x)}=+\infty$$ 	



## Exemplo 3 

Determine $\dlim_{x\to 0} \dfrac{1}{x^2}$.


??? check "Solução"
    Se $g(x)=1$ e $f(x)=x^2$. Note que $\dlim_{x\to 0}g(x)=1$ e $\dlim_{x\to 0} x^2=0$. 
	
    Além disso, observe que $\forall x \in \R $, temos que $x^2>0$

    $$\dlim_{x\to 0} \dfrac{g(x)}{f(x)}=+\infty$$ 

## Exemplo 4 

Determine $\dlim_{x\to 1^{-}} \dfrac{x-2}{x^2-1}$.  

??? check "Solução"
    Sejam, $g9x)=x-2$ e $f(x)=x^2-1$. Note que 
    
    $$ \dlim_{x\to 1^{-}} x-1=-1 ~\mbox{e}~\dlim_{x\to 1^{-}} x^2-1=0$$ 
	
    Fazemos o estudo do sinal da função $f(x)=x^2-1$:









??? check "Limite infinito 1"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/T-7cF-mCIsY"></iframe>
    </p>

??? check "Limite infinito 2"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/3VKJHeBXNjI"></iframe>
    </p>



