window.MathJax = {
    tex2jax: {
      inlineMath: [ ["\\(","\\)"] ],
      displayMath: [ ["\\[","\\]"] ],
      processEscapes: true,
      processEnvironments: true
    },
    TeX: {
      Macros: {
        Alpha: "\\mbox{A}",
        Beta: "\\mbox{B}",
        dlim:"\\displaystyle\\lim",
        tg:"\\text{tg}",
        Epsilon: "\\mbox{E}",
        N: "\\mathbb{N}",
        R: "\\mathbb{R}",
        Q: "\\mathbb{Q}",
        Z: "\\mathbb{Z}",
        C: "\\mathbb{C}",
        H: "\\mathbb{H}",
        P: "\\mathbb{P}",
        sen:"\\mbox{sen}",
      },
      TagSide: "right",
      TagIndent: ".8em",
      MultLineWidth: "85%",
      equationNumbers: {
        autoNumber: "AMS",
      },
      unicode: {
        fonts: "STIXGeneral,'Helvetica Unicode MS'"
      }
    },
    displayAlign: "center",
    showProcessingMessages: false,
    messageStyle: "none"
  };

