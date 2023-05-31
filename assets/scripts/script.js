window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("btnVoltarTopo").style.display = "block";
    } else {
      document.getElementById("btnVoltarTopo").style.display = "none";
    }
  }
  
  function scrollTopFunction() {
    document.body.scrollTop = 0; /* Para navegadores Safari */
    document.documentElement.scrollTop = 0; /* Para outros navegadores */
  }
  