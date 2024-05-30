var nota1html = document.getElementById("nota1html");
var nota2html = document.getElementById("nota2html");
var nota3html = document.getElementById("nota3html");
var promediohtml = document.getElementById("promediohtml");

var html1 = +prompt("Ingresa nota 1 html");
var html2 = +prompt("Ingresa nota 2 html");
var html3 = +prompt("Ingresa nota 3 html");

nota1html.innerHTML = html1
nota2html.innerHTML = html2
nota3html.innerHTML = html3
promediohtml.innerHTML = ((html1 + html2 + html3) / 3).toFixed(1)

//////////////////////////////////////////////////////////////////
var nota1css = document.getElementById("nota1css");
var nota2css = document.getElementById("nota2css");
var nota3css = document.getElementById("nota3css");
var promediocss = document.getElementById("promediocss");

var css1 = +prompt("Ingresa nota 1 css");
var css2 = +prompt("Ingresa nota 2 css");
var css3 = +prompt("Ingresa nota 3 css");

nota1css.innerHTML = css1
nota2css.innerHTML = css2
nota3css.innerHTML = css3
promediocss.innerHTML = ((css1 + css2 + css3) / 3).toFixed(1)

//////////////////////////////////////////////////////////////////////

var nota1js = document.getElementById("nota1js");
var nota2js = document.getElementById("nota2js");
var nota3js = document.getElementById("nota3js");
var promediojs = document.getElementById("promediojs");

var js1 = +prompt("Ingresa nota 1 js");
var js2 = +prompt("Ingresa nota 2 js");
var js3 = +prompt("Ingresa nota 3 js");

nota1js.innerHTML = js1
nota2js.innerHTML = js2
nota3js.innerHTML = js3
promediojs.innerHTML = ((js1 + js2 + js3) / 3).toFixed(1)

