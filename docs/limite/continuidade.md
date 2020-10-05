
# **Continuidade**

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

$$ \dlim_{x\to a} f(x)$$ 



$$
\begin{equation}\label{nova} 
s_{na1} = d_{a1} \left ( \dfrac{\dfrac{\pi}{2} + 2x_1\tg{\alpha}}{z_1} + \inv{\alpha_t} - \inv{\alpha_{a1}} \right )\cos{\beta_{a1}}
\end{equation}
$$

TEmos a  seguinte $\ref{nova}$
### Exercícios 

1. Encontre os pontos de continuidade da função $f(x)=\displaystyle\frac{x^3-27}{x^2-3x+2}$. 



<!-- 
## Fundamento legal - obrigatoriedade

<p style="text-align: justify;">
A determinação legal decorre do artigo 67 da Lei 8.666/93. O Artigo 58, inciso III da citada Lei
assegura à Administração a prerrogativa de fiscalizar os contratos.

</p>
-->




