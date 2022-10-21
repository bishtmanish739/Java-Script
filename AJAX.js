function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "data.json")
   console.log(xhttp)
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = xhttp.responseText;
      }
    
    xhttp.send();
  }