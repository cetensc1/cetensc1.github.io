
# **Laterais**

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


## Exercícios resolvidos  

??? check "Limites laterais"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/pCW4l2uKna4"></iframe>
    </p>

??? check "Aula 2: Limites laterais"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/iz4EUNBGb1s"></iframe>
    </p>

??? check "Exercício: Limites laterais"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/ypahehpYqAs"></iframe>
    </p>

??? check "Exercício: Limites laterais"
    <p style="text-align: center;">
    <iframe width="720" height="345" src="https://www.youtube.com/embed/VAJZjBWAvj8"></iframe>
    </p>






