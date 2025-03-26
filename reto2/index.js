const displayValorActual = document.getElementById("valor-actual");
const displayValorAnterior = document.getElementById("valor-anterior");
const valorActual = document.getElementById("text-valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const btnEnviarNombre = document.getElementById("btn-nombre");
const nombreIngresado = document.getElementById("nombre-ingresado");
const monedaPrincipal = document.getElementById("moneda-principal");
const monedaSecundaria = document.getElementById("moneda-secundaria");
const primeraMoneda = document.getElementById("primera-moneda");
const segundaMoneda = document.getElementById("segunda-moneda");
const saludo = document.getElementById("saludo-usuario");
const btnConvertir = document.querySelector(".btn-convertir");
const btnBorrar = document.getElementById("btn-borrar");

const botonModoOscuro = document.getElementById("modo-oscuro-toggle");

const body = document.body;

let valorIngresado = "";

const tasasConversion = {
  "ARS-USD": 0.00093,
  "USD-ARS": 1070.65,
  "USD-EUR": 0.93,
  "EUR-USD": 1.08,
  "ARS-EUR": 0.00087,
  "EUR-ARS": 1155.45,
};

//Evento para capturar los números presionados

botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", (evento) => {
    const valor = evento.target.value;
    if (valorIngresado.length < 12) {
      valorIngresado += valor;
      displayValorAnterior.innerText = `${valorIngresado} ${monedaPrincipal.value}`;
    }
  });
});

//Conversion de divisas
btnConvertir.addEventListener("click", () => {
  const monedaOrigen = monedaPrincipal.value;
  const monedaDestino = monedaSecundaria.value;

  if (!monedaOrigen || !monedaDestino) {
    console.warm("Seleccione ambas monedas");
    return;
  }
  if (monedaOrigen === monedaDestino) {
    displayValorActual.innerText = valorIngresado;
    return;
  }

  const claveConversion = `${monedaOrigen}-${monedaDestino}`;
  const tasa = tasasConversion[claveConversion];

  if (tasa) {
    const resultado = (parseFloat(valorIngresado) * tasa).toFixed(2);
    displayValorActual.innerText = `${resultado} ${monedaDestino}`;
  } else {
    console.log("Conversión no definida");
  }
});

//Evento para personalizar saludo

btnEnviarNombre.addEventListener("click", () => {
  if (nombreIngresado.value.trim() !== "") {
    saludo.innerText = `Hola ${nombreIngresado.value}`;
  }
});

monedaPrincipal.addEventListener("change", () => {
  primeraMoneda.innerText = monedaPrincipal.value || "";
  displayValorAnterior.innerText = valorIngresado
    ? `${valorIngresado} ${monedaPrincipal.value}`
    : "";
});
monedaSecundaria.addEventListener("change", () => {
  segundaMoneda.innerText = monedaSecundaria.value || "";
  displayValorActual.innerText = monedaSecundaria.value
    ? `0 ${monedaSecundaria.value}`
    : "";
});

//Botón para borrar el valor ingresado
btnBorrar.addEventListener("click", () => {
  valorIngresado = "";
  displayValorActual.innerText = "";
  displayValorAnterior.innerText = "";
});

//Evento para cambiar entre modo claro y oscuro

botonModoOscuro.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  botonModoOscuro.innerText = body.classList.contains("dark-mode")
    ? "☀️ Modo Claro"
    : "🌙 Modo Oscuro";
});
