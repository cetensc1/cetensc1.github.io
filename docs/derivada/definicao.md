
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



**Definição**: Dizemos que $f'(x_0)$ é a derivada da função $y=f(x)$ se o seguinte limite existe: 

$$ f'(x_0) =  \displaystyle\lim_{\Delta x\to 0} \displaystyle\frac{f(x_0 +\Delta x) - f(x_0)}{\Delta x} $$ 

Fazendo uma modificação.

