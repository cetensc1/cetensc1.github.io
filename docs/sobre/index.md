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


$$ \dlim_{x\to a} f(x)$$ 



$$
\begin{equation}\label{nova} 
s_{na1} = d_{a1} \left ( \dfrac{\dfrac{\pi}{2} + 2x_1\tg{\alpha}}{z_1} + \inv{\alpha_t} - \inv{\alpha_{a1}} \right )\cos{\beta_{a1}}
\end{equation}
$$

TEmos a  seguinte $\ref{nova}$


=== "Questão 1"

    Cálculo o seguinte limite: $\displaystyle\lim_{x\to 0} \sqrt[3]{x^4+2}$ 

=== "Resposta"
    Temos que o seguinte limite é resolvido assim: 
    $$  \displaystyle\lim_{x\to 0} \sqrt[3]{x^4+2} $$ 

    Fazendo $x\to 0$ substituindo na expressão algébrica, temos 

    $$ = \displaystyle\sqrt[3]{(0)^4+2} = \sqrt[3]{0+2}$$ 

    $$ = \sqrt[3]{2}$$ 


- [x] Improved search result grouping (pages + headings)
- [x] Improved search result relevance and scoring
- [x] Display of missing query terms in search results
- [ ] Improved search result summaries
- [ ] ... more to come


The HTML specification is maintained by the W3C.

*[HTML]: Hyper Text Markup Language

*[W3C]: World Wide Web Consortium


!!! note
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

!!! note "Phasellus posuere in sem ut cursus"
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.



!!! note ""
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.   


??? check "Questão"
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

???+ note
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

abstract, summary, tldr

info, todo

success, check, done

question, help, faq

warning, caution, attention

failure, fail, missing

danger, error

bug

example

quote, cite

!!! pied-piper "Pied Piper"
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.

[https://squidfunk.github.io/mkdocs-material/reference/admonitions/](https://squidfunk.github.io/mkdocs-material/reference/admonitions/)


[Subscribe to our mailing list](#){: .md-button }

[Subscribe to our mailing list](#){: .md-button .md-button--primary }

[Submit :fontawesome-solid-paper-plane:](#){: .md-button .md-button--primary }

!!! example

    === "Unordered List"

        _Example_:

        ``` markdown
        * Sed sagittis eleifend rutrum
        * Donec vitae suscipit est
        * Nulla tempor lobortis orci
        ```

        _Result_:

        * Sed sagittis eleifend rutrum
        * Donec vitae suscipit est
        * Nulla tempor lobortis orci

    === "Ordered List"

        _Example_:

        ``` markdown
        1. Sed sagittis eleifend rutrum
        2. Donec vitae suscipit est
        3. Nulla tempor lobortis orci
        ```

        _Result_:

        1. Sed sagittis eleifend rutrum
        2. Donec vitae suscipit est
        3. Nulla tempor lobortis orci

| Method      | Description                          |
| ----------- | ------------------------------------ |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |


| Method      | Description                          |
| :---------- | :----------------------------------- |
| `GET`       | :material-check:     Fetch resource  |
| `PUT`       | :material-check-all: Update resource |
| `DELETE`    | :material-close:     Delete resource |

Text can be {​--deleted--} and replacement text {​++added++}. This can also be
combined into {​~~one~>a single~~} operation. {​==Highlighting==} is also
possible {​>>and comments can be added inline<<}.

{​==
Formatting can also be applied to blocks, by putting the opening and closing
tags on separate lines and adding new lines between the tags and the content.
==}

* ==This was marked==
* ^^This was inserted^^
* ~~This was deleted~~

:smile: 

* :fontawesome-brands-medium:{: .medium } – Medium
* :fontawesome-brands-twitter:{: .twitter } – Twitter
* :fontawesome-brands-facebook:{: .facebook } – Facebook

![Placeholder](https://dummyimage.com/600x400/eee/aaa){: align=left }


![Placeholder](https://dummyimage.com/600x400/eee/aaa){: align=right }



<figure>
  <img src="https://dummyimage.com/600x400/eee/aaa" width="300" />
  <figcaption>Image caption</figcaption>
</figure>

![Placeholder](https://dummyimage.com/600x400/eee/aaa){: loading=lazy }


$$
\operatorname{ker} f=\{g\in G:f(g)=e_{H}\}{\mbox{.}}
$$

The homomorphism $f$ is injective if and only if its kernel is only the 
singleton set $e_G$, because otherwise $\exists a,b\in G$ with $a\neq b$ such 
that $f(a)=f(b)$.

Welcome to {{ config.site_name }}!

[https://squidfunk.github.io/mkdocs-material/reference/variables/](https://squidfunk.github.io/mkdocs-material/reference/variables/)


The unit price is {{ unit.price }}
