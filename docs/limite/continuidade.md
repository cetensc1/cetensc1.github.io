
# **Continuidade**

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


## Definição 

Dizemos que uma **função** $f$ é **contínua** em um ponto $x_0$, quando:

+ $f(x_0)$ está definida; 

+ Existe $\displaystyle\lim_{x\to x_0} f(x)$ e; 

+ $\displaystyle\lim_{x\to x_0} f(x) = f(x_0)$. 

Para a definição de **função contínua à esquerda** ou à **direita**, usamos os conceitos de limites laterais. Quando a **função** $f$ não é contínua em um ponto $x_0$, temos que $f$ é **descontínua** neste ponto. 

### Exemplo 1

1. Considere a seguinte função 

$$f(x)= \left\{\begin{array}{cccc}
\displaystyle\frac{x-2}{(x+1)(x-2)}, & & x\neq 2  &\\
-4, & & x = 2&
\end{array}\right.$$

Na figura abaixo, temos um esboço do gráfico de $f$. 

<center>
  <p><small>Figura 1: Esboço gráfico. </small></p><br>
    <img src="../imagens/figura_1.png" style="width: 70%; height: auto;"/>
  </small>
</center>

Vamos verificar a continuidade desta função nos seguintes pontos: 

**a)** $x=2$. Neste ponto, temos que $f(-2) = -1$ e 

$$\displaystyle\lim_{x\to -2} \displaystyle\frac{x-2}{(x+1)(x-2)} = \displaystyle\frac{-4}{-1\cdot (-4)}$$ 

$$ = -1 = f(-2).$$ 

Com isso, concluímos que $f$ é contínua no ponto $x=-2$. 

**b)** $x=-1$. Neste ponto, 

$$f(-1) = \displaystyle\frac{x-2}{(x+1)(x-2)} = \displaystyle\frac{1}{(x+1)} = \displaystyle\frac{1}{(-1+1)} = \displaystyle\frac{1}{0}$$ 

logo, $f(-1)$ não está definido e, portanto, $f$ é descontínua neste ponto. Observemos que $f$ tem uma assíntota vertical em $x=-1$. 

**c)** $x=2$. Neste ponto, temos $f(2)=-4$ e 

$$ \displaystyle\lim_{x\to 2} \displaystyle\frac{x-2}{(x+1)(x-2)} = \displaystyle\lim_{x\to 2} \displaystyle\frac{x-2}{(x+1)}$$ 

$$ = \displaystyle\lim_{x\to 2} \displaystyle\frac{1}{x+1} = \displaystyle\frac{1}{3} \neq f(2).$$

Portanto, concluímos que $f$ é descontínua em $x=2$. 

É importante salientarmos que uma função $f$ é dita ser **contínua em um intervalo** $(a,b)$, quando $f$ é contínua em todos os pontos $x_0 \in (a,b)$. Para intervalos, $[a,b), ~(a,b]$ ou $[a,b]$, empregamos a noção de continuidade lateral nos pontos de extremos fechados dos intervalos. Quando a função é contínua em $(-\infty, +\infty)$, dizemos que ela é **contínua em toda parte.** 

### Exemplo 2 

### Exercícios 

1. Encontre os pontos de continuidade da função $f(x)=\displaystyle\frac{x^3-27}{x^2-3x+2}$. 


??? check "Limite - continuidade"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/y8124fk78i4"></iframe>
    </p>


