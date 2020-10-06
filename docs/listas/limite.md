
# **Listas de Exercícios - Limite**

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


input[type='checkbox'] { display: none; } .wrap-collabsible { margin: 1.2rem 0; } .lbl-toggle { display: block; font-weight: bold; font-family: monospace; font-size: 1.2rem; text-transform: uppercase; text-align: center; padding: 1rem; color: #DDD; background: #0069ff; cursor: pointer; border-radius: 7px; transition: all 0.25s ease-out; } .lbl-toggle:hover { color: #FFF; } .lbl-toggle::before { content: ' '; display: inline-block; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-left: 5px solid currentColor; vertical-align: middle; margin-right: .7rem; transform: translateY(-2px); transition: transform .2s ease-out; } .toggle:checked+.lbl-toggle::before { transform: rotate(90deg) translateX(-3px); } .collapsible-content { max-height: 0px; overflow: hidden; transition: max-height .25s ease-in-out; } .toggle:checked + .lbl-toggle + .collapsible-content { max-height: 350px; } .toggle:checked+.lbl-toggle { border-bottom-right-radius: 0; border-bottom-left-radius: 0; } .collapsible-content .content-inner { background: rgba(0, 105, 255, .2); border-bottom: 1px solid rgba(0, 105, 255, .45); border-bottom-left-radius: 7px; border-bottom-right-radius: 7px; padding: .5rem 1rem; } .collapsible-content p { margin-bottom: 0; }
</style>



<!-- 
![Legenda](../imagens/capitulo.png)
--> 





## Lista 1 - Cálculo Diferencial e Integral I 

### **Questão 1 -** Verifique se as seguintes funções são contínuas em $x_0$. 

**a)** $f(x)= \left\{\begin{array}{cccc}
-3x-2, & &\text{se } x>1  &\\
2, & &\text{se } x = 1 & x_0 = 1\\ 
4x+1, & &\text{se } x < 1 &
\end{array}\right.$

**b)** $f(x)= \left\{\begin{array}{cccc}
x^2-1, & &\text{se } x\geq 1  &\\
1, & &\text{se } x = x & x_0 = x\\ 
1-x, & &\text{se } x < 1 &
\end{array}\right.$

**c)** $f(x)= \left\{\begin{array}{cccc}
-x^2-x, & &\text{se } x\geq 0  & x_0 = 0\\
-x, & &\text{se } x < 0 &
\end{array}\right.$

### **Questão 2 -** Calcule os limites a seguir. 

**a)** $\displaystyle\lim_{x\to -1} -x^5-3x^4+12x^2$ 

**b)** $\displaystyle\lim_{x\to 4} -x^3 + \displaystyle\frac{x^2}{4} - \displaystyle\frac{x}{2}$ 

**c)** $\displaystyle\lim_{x\to -1} \displaystyle\frac{1+x^2}{1-x}$ 

**d)** $\displaystyle\lim_{x\to 1} 2^{x} (x^3-4)$ 

**e)** $\displaystyle\lim_{x\to \displaystyle\frac{\pi}{2}} \displaystyle\frac{\text{sen(x)}}{1+\cos(x)}$ 

**f)** $\displaystyle\lim_{x\to -1} \displaystyle\frac{3^{3x+5}}{2^{\cos{(x\pi)}}}$

**g)** $\displaystyle\lim_{x\to 2} \displaystyle\frac{|x^2-9|}{2+x}$ 

**h)** $\displaystyle\lim_{x\to -1} - \displaystyle\frac{2x^2-1}{x+10}$ 

### **Questão 3 -** Calcule os seguintes limites. Limites indeterminados do tipo "zero/zero". 

**a)** $\displaystyle\lim_{x\to 2} \displaystyle\frac{x^2-4}{x^2-2x}$

**b)** $\displaystyle\lim_{x\to 2} \displaystyle\frac{2x^2-8}{3x^2-4x-4}$

**c)** $\displaystyle\lim_{x\to 1} \displaystyle\frac{x^2-2x+1}{x^2-1}$

**d)** $\displaystyle\lim_{x\to \displaystyle\frac{1}{2}} \displaystyle\frac{2x^2+3x-2}{8x^3-1}$

**e)** $\displaystyle\lim_{x\to -2} -\displaystyle\frac{x^2-4}{3x^2+4x-4}$

**f)** $\displaystyle\lim_{x\to 2} \log_{6}{\left(\displaystyle\frac{3x^3-24}{x-2}\right)}$

**g)** $\displaystyle\lim_{x\to 1} \displaystyle\frac{\sqrt{x-1}}{x-1}$

**h)** $\displaystyle\lim_{x\to 0} \displaystyle\frac{\sqrt{x+1} - \sqrt{1-x}}{3x}$

**i)** $\displaystyle\lim_{x\to -1} \displaystyle\frac{1-\sqrt{x^2}}{2x+2}$

**j)** $\displaystyle\lim_{x\to 1} \displaystyle\frac{\sqrt[3]{x^2}-2\sqrt[3]{x}+1}{(x-1)^2}$

### **Questão 4 -** Calcule os seguintes limites. Limites **indeterminados** do tipo "infinito/infinito".

**a)** $\displaystyle\lim_{x\to +\infty} \displaystyle\frac{2x^2-4x-25}{18x^3-9x^2}$

**b)** $\displaystyle\lim_{x\to +\infty} \text{sen}\left(\displaystyle\frac{2+x-\pi x^2}{12x-4x^2}\right)$

**c)** $\displaystyle\lim_{x\to +\infty} -\displaystyle\frac{2x^2-3x-4}{x^4+1}$

**d)** $\displaystyle\lim_{x\to +\infty} \left[ \log_{\frac{1}{2}}{(2x^3+x)} - \log_{\frac{1}{2}}{(2x+x^3)}\right]$

**e)** $\displaystyle\lim_{x\to +\infty} \displaystyle\frac{3x^2-5x-9x^2}{5+9x^3-9x^2}$

### **Questão 5 -** Calcule os seguintes limites. **Limites fundamentais**.

**a)** $\displaystyle\lim_{x\to -\infty} \left( 1 + \displaystyle\frac{2}{x}\right)^{x}$ 

**b)** $\displaystyle\lim_{x\to -\infty} \left( 1 - \displaystyle\frac{3}{x}\right)^{x}$ 

**c)** $\displaystyle\lim_{x\to +\infty} \left( 1 + \displaystyle\frac{1}{x}\right)^{3x}$ 

**d)** $\displaystyle\lim_{x\to +\infty} \left(\displaystyle\frac{x+a}{x-a}\right)^{x}$ 

**e)** $\displaystyle\lim_{x\to 0} \left( \displaystyle\frac{3^{h+x} - 3^{h}}{x}\right)^{x}$ 

**f)** $\displaystyle\lim_{x\to -\infty} \left( 1 + \displaystyle\frac{2}{x}\right)^{x}$ 

**g)** $\displaystyle\lim_{x\to 0}  \displaystyle\frac{\text{sen}(7x)}{x}$ 

**h)** $\displaystyle\lim_{x\to 0}  \displaystyle\frac{\text{tg}(3x)}{2x}$ 

**i)** $\displaystyle\lim_{x\to 0}  \displaystyle\frac{1-\cos(x)}{x^2}$ 

**i)** $\displaystyle\lim_{x\to 0}  \displaystyle\frac{1-\sec(x)}{x}$ 

### **Exercícios livro de Diva Marília Flemming - Cálculo A**

 - Página 74. 

**9.** Mostrar que existe o limite de $f(x) = 4x-5$ em $x=3$ e que é igual a $7$. 

**10.** Mostrar que $\displaystyle\lim_{x\to 3} x^2 = 9.$ 

!!! note "Observe que:"
    Nos exercícios 11 a 15 é dado $\displaystyle\lim_{x\to a} f(x)=L$. Determinar um número $\delta$ para o $\epsilon$ dado tal que $|f(x)-L| < \epsilon$ sempre que $0< |x-a| < \delta$. Dar exemplos de dois outros números positivos para $\delta$, que também satisfazem a implicação dada.

**11.** $\displaystyle\lim_{x\to 2} (2x+4) = 8, \quad \epsilon = 0,01$ 

**12.** $\displaystyle\lim_{x\to -1} (-3x+7) = 10, \quad \epsilon = 0,5$ 

**13.** $\displaystyle\lim_{x\to -2} \displaystyle\frac{x^2-4}{x+2} = -4, \quad \epsilon = 0,1$ 

**14.** $\displaystyle\lim_{x\to 5} \displaystyle\frac{1}{2-x} = -\displaystyle\frac{1}{3}, \quad \epsilon = 0,25$

**15.** $\displaystyle\lim_{x\to 1} \displaystyle\frac{x^2-1}{x-1} = 2, \quad \epsilon = 0,75$ 

- Página 79.

**3.** Seja $F(x) = |x-4|$. Calcule os limites indicados se existirem: 

**a)** $\displaystyle\lim_{x\to 4^{+}} F(x)$ 

**b)** $\displaystyle\lim_{x\to 4^{-}} F(x)$

**c)** $\displaystyle\lim_{x\to 4} F(x)$

**4.** Seja $f(x) = 2 + |5x-1|$. Calcule se existir. 

**a)** $\displaystyle\lim_{x\to \displaystyle\frac{1}{5}^{+}} f(x)$ 

**b)** $\displaystyle\lim_{x\to \displaystyle\frac{1}{5}^{-}} f(x)$

**c)** $\displaystyle\lim_{x\to \displaystyle\frac{1}{5}} f(x)$

Esboce o gráfico de $f(x)$. 


**5.** Seja $g(x)= \left\{\begin{array}{cccc}
\displaystyle\frac{|x-3|}{x-3}, & &\text{se } x\neq 3  &\\
0, & &\text{se } x=3 &
\end{array}\right.$

**a)** Esboce o gráfico de $g(x)$. 

**b)** Achar, se existirem $\displaystyle\lim_{x\to 3^{+}} g(x)$, $\displaystyle\lim_{x\to 3^{-}} g(x)$ e $\displaystyle\lim_{x\to 3} g(x)$

- Página 93.

**1.** Se $f(x) = \displaystyle\frac{3x+|x|}{7x-5|x|}$, calcule: 

**a)** $\displaystyle\lim_{x\to +\infty} f(x).$

**b)** $\displaystyle\lim_{x\to -\infty} f(x).$

**2.** Se $f(x) = \displaystyle\frac{1}{(x+2)^2)}$, calcule: 

**a)** $\displaystyle\lim_{x\to -2} f(x).$

**b)** $\displaystyle\lim_{x\to +\infty} f(x).$

- Página 103.

**1.** Determinar as assíntotas horizontais e verticais do gráfico das seguintes funções: 

**a)** $f(x) = \displaystyle\frac{4}{x-4}$

**b)** $f(x) = \displaystyle\frac{-3}{x+2}$

**c)** $f(x) = \displaystyle\frac{4}{x^2-3x+2}$

**d)** $f(x) = \displaystyle\frac{-1}{(x-3)(x+4)}$

**e)** $f(x) = \displaystyle\frac{1}{\sqrt{x+4}}$

**f)** $f(x) = -\displaystyle\frac{2}{\sqrt{x-3}}$

**g)** $f(x) = \displaystyle\frac{2x^2}{\sqrt{x^2-16}}$

**h)** $f(x) = \displaystyle\frac{x}{\sqrt{x^2+x-12}}$

**i)** $f(x) = e^{\displaystyle\frac{1}{x}}$

**j)** $f(x) = e^{x}-1$

**k)** $f(x) = ln{(x)}$

**l)** $f(x) = \text{tg}(x)$

- Página 112.

**1.** Investigue a continuidade dnos pontos indicados: 

**a)** $f(x)= \left\{\begin{array}{cccc}
\displaystyle\frac{\text{sen}(x)}{x}, & &\text{se } x\neq 0  &\\
0, & &\text{se } x = 0 & \text{em} \quad x=0 
\end{array}\right.$

**b)** $f(x) = x - |x|$ em $x=0$. 

**c)** $f(x)= \left\{\begin{array}{cccc}
\displaystyle\frac{x^3-8}{x^2-4}, & &\text{se } x\neq 2  &\\
3, & &\text{se } x = 2 & \text{em} \quad x=2 
\end{array}\right.$

**d)** $f(x) = \displaystyle\frac{1}{\text{sen}\left(\displaystyle\frac{1}{x}\right)}$ em $x=2$. 

**e)** $f(x)= \left\{\begin{array}{cccc}
x^2\text{sen}\left(\displaystyle\frac{1}{x}\right), & &\text{se } x\neq 0  &\\
0, & &\text{se } x = 2 & \text{em} \quad x=0 
\end{array}\right.$

**f)** $f(x)= \left\{\begin{array}{cccc}
1-x^2, & &\text{se } x < 1  &\\
1 - |x|, & &\text{se } x > 1 & \text{em} \quad x=1 \\
1, & & x = 2 & 
\end{array}\right.$

**g)** $f(x)= \left\{\begin{array}{cccc}
\displaystyle\frac{x^2-4}{x-2}, & &\text{se } x\neq 2  &\\
0, & &\text{se } x = 2 & \text{em} \quad x=2 
\end{array}\right.$


**h)** $f(x)= \left\{\begin{array}{cccc}
x^2, & &\text{se } x \geq -1  &\\
1 - |x|, & &\text{se } x < -1 & \text{em} \quad x=-1 
\end{array}\right.$

**i)** $f(x) = \displaystyle\frac{x^2-3x+7}{x^2+1}$ em $x=2$.

**j)** $f(x) = \displaystyle\frac{2}{3x^2+x^3-x-3}$ em $x=-3$.

- Página 113.

**4.** Calcule $p$ de modo que as funções abaixo seja contínuas. 

**a)** $f(x)= \left\{\begin{array}{cccc}
x^2 + px + 2, & &\text{se } x \neq 3  &\\
3, & &\text{se } x = 3 & 
\end{array}\right.$

**b)** $f(x)= \left\{\begin{array}{cccc}
x + 2p, & &\text{se } x \leq -1  &\\
p^2, & &\text{se } x > -1 & 
\end{array}\right.$

**c)** $f(x)= \left\{\begin{array}{cccc}
e^{2x}, & &\text{se } x \neq 0  &\\
p^3 - 7, & &\text{se } x=0. & 
\end{array}\right.$


