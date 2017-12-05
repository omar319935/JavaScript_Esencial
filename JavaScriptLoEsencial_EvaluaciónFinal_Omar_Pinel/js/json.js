//Evento Saludar
function onload () {
    alert("Bienvenido al Sistema");
}

//Mi JSON
var listaEstudiantes = '{"estudiantes":['+
'{"codigo":"001", "nombre":"Carlos Contreras", "nota":"7"},'+
'{"codigo":"002", "nombre":"Omar Pinel", "nota":"9.5"},'+
'{"codigo":"003", "nombre":"Andrea Urbina", "nota":"6"},'+
'{"codigo":"004", "nombre":"Miguel Paz", "nota":"9"},'+
'{"codigo":"005", "nombre":"Juhana Ruíz", "nota":"7"},'+
'{"codigo":"006", "nombre":"Manuel Canelas", "nota":"5"},'+
'{"codigo":"007", "nombre":"Alejandra Lopez", "nota":"9"},'+
'{"codigo":"008", "nombre":"Angely Hernandez", "nota":"8"},'+
'{"codigo":"009", "nombre":"Max Orellana", "nota":"8"},'+
'{"codigo":"010", "nombre":"Bayron Cuadra", "nota":"6"}' +']}';

var jsObj = JSON.parse(listaEstudiantes);

//Función para mostrar el listado de los Estudiantes
function mostrarEstudiantes(json){
  var out = "<table><thead><tr><th>Codigo</th><th>Nombre</th><th>Nota</th></tr></thead></tbody>";
  var i;
  for(i=0;i<json.estudiantes.length;i++){
    out +="<tr><td>" + json.estudiantes[i].codigo + "</td><td>" + json.estudiantes[i].nombre + "</td><td>" + json.estudiantes[i].nota + "</td></tr>"
  }
  out += "</tbody></table>";
  document.getElementsByClassName('tabla')[0].innerHTML = out;
}

//Calcular y mostrar el Promedio
function mostrarNotaPromedio(json){
  var i;
  var registros = json.estudiantes.length;
  var total = 0;
  var promedio = 0;
  for(i=0;i<registros;i++){
    total = total + parseInt(json.estudiantes[i].nota);
  }
  promedio = "El promedio de las notas es: " + (total / registros);
  document.getElementById("resultado").innerHTML = promedio;

}

//Calcular la nota mayor
function mostrarNotaMayor(json){
  var i;
  var mayor = 0;
  var estudiante = "";
  for(i=0;i<json.estudiantes.length;i++){
    if(mayor < json.estudiantes[i].nota){
      mayor = json.estudiantes[i].nota;
      estudiante = json.estudiantes[i].nombre;
    }
  }
  notaMayor = "El Estudiante: " + "<strong>" + estudiante + "</strong>" + " obtuvo la nota mayor con: " + mayor;
  document.getElementById("resultado").innerHTML = notaMayor;

}

//Calcular la nota menor
function mostrarNotaMenor(json){
  var i;
  var menor = 10;
  var estudiante = "";
  for(i=0;i<json.estudiantes.length;i++){
    if(menor > json.estudiantes[i].nota){
      menor = json.estudiantes[i].nota;
      estudiante = json.estudiantes[i].nombre;
    }
  }
  notaMenor = "El Estudiante: " + "<strong>" + estudiante + "</strong>" + " obtuvo la nota menor con: " + menor;
  document.getElementById("resultado").innerHTML = notaMenor;

}
