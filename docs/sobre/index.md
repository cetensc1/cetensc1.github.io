---
template: overrides/main.html
---



# Sobre

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

Este App Web é uma iniciativa do Monitor **Carlos André Lima de Matos** e tem como objetivo disponibilizar um ambiente dinâmico para estudar Cálculo Diferencial e Integral I no semestre suplementar 2020.3 com orientação da disciplina da Profª **Katya Silene Porto Rodrigues**. 

A Aplicação App Web não possui qualquer tipo de cadastro ou retenção de dados de seus usuários/discentes. A proposta inicial é disponibilizar material teórico escrito com listas de exercícios e exercícios resolvidos passo a passo escritos e em vídeoaulas curtas. 
