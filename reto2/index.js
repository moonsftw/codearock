let displayValorActual = document.getElementById("valor-actual");
let displayValorAnterior = document.getElementById("valor-anterior");
let valorActual = document.getElementById("text-valor-actual");
let botonesNumeros = document.querySelectorAll(".numero");
let btnEnviarNombre = document.getElementById("btn-nombre");
let nombreIngresado = document.getElementById("nombre-ingresado");
valorActual = "";
let monedaPrincipal = document.getElementById("moneda-principal");
let monedaSecundaria = document.getElementById("moneda-secundaria");
let primeraMoneda = document.getElementById("primera-moneda");
let segundaMoneda = document.getElementById("segunda-moneda");
let saludo = document.getElementById("saludo-usuario");
botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => {
    valorActual.innerHtml += boton.value;
    console.log(boton.value);
  });
});

btnEnviarNombre.addEventListener("click", (evento) => {
  console.log(nombreIngresado.value);
  saludo.innerHTML = `Hola ${nombreIngresado.value}`;
});

monedaPrincipal.addEventListener("change", () => {
  primeraMoneda.innerText = monedaPrincipal.value;
});
monedaSecundaria.addEventListener("change", () => {
  segundaMoneda.innerText = monedaSecundaria.value;
});
