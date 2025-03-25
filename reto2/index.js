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
let btn1 = document.getElementById("numero-1");
let footerPrueba = document.getElementById("footer-prueba");
let display2 = document.getElementById("display2");
let botonera1 = document.getElementById("botonera-1");
let botonera2 = document.getElementById("botonera-2");
let botonera3 = document.getElementById("botonera-3");
let botonera4 = document.getElementById("botonera-4");
let btnConvertir = document.querySelector(".btn-convertir");
let btnBorrar = document.getElementById("btn-borrar");

let valorIngresado = "";

botonera1.addEventListener("click", (evento) => {
  displayValorAnterior.innerHTML += evento.target.value;
  valorIngresado += evento.target.value;
  console.log(evento.target.value);
});
botonera2.addEventListener("click", (evento) => {
  displayValorAnterior.innerHTML += evento.target.value;
  valorIngresado += evento.target.value;

  console.log(evento.target.value);
});
botonera3.addEventListener("click", (evento) => {
  displayValorAnterior.innerHTML += evento.target.value;
  valorIngresado += evento.target.value;

  console.log(evento.target.value);
});
botonera4.addEventListener("click", (evento) => {
  displayValorAnterior.innerHTML += evento.target.value;
  valorIngresado += evento.target.value;

  console.log(evento.target.value);
});

const pesoDolar = (pesos) => {
  return pesos * 0.00093;
};
const dolarPeso = (dolares) => {
  return dolares * 1070.65;
};

const dolarEuro = (dolares) => {
  return dolares * 0.93;
};

const euroDolar = (euros) => {
  return euros * 1.08;
};

const pesoEuro = (pesos) => {
  return pesos * 0.00087;
};

const euroPeso = (euros) => {
  return euros * 1155.45;
};

btnConvertir.addEventListener("click", () => {
  if (monedaPrincipal.value !== "" && monedaSecundaria.value !== "") {
    if (monedaPrincipal.value === "€" && monedaSecundaria.value === "$") {
      displayValorActual.innerHTML += euroPeso(valorIngresado);
      console.log("euro a peso");
    } else if (
      monedaPrincipal.value === "U$S" &&
      monedaSecundaria.value === "€"
    ) {
      displayValorActual.innerHTML += dolarEuro(valorIngresado);
      console.log("dolar a euro");
    } else if (
      monedaPrincipal.value === "U$S" &&
      monedaSecundaria.value === "$"
    ) {
      console.log("dolar a peso");
      displayValorActual.innerHTML += dolarPeso(valorIngresado);
    } else if (
      monedaPrincipal.value === "€" &&
      monedaSecundaria.value === "$"
    ) {
      console.log("euro a peso");
      displayValorActual.innerHTML += euroPeso(valorIngresado);
    } else if (
      monedaPrincipal.value === "€" &&
      monedaSecundaria.value === "U$S"
    ) {
      console.log("euro a dolar");
      displayValorActual.innerHTML += euroDolar(valorIngresado);
    } else if (
      monedaPrincipal.value === "$" &&
      monedaSecundaria.value === "U$S"
    ) {
      console.log("peso a dolar");
      displayValorActual.innerHTML += pesoDolar(valorIngresado);
    } else if (
      monedaPrincipal.value === "$" &&
      monedaSecundaria.value === "€"
    ) {
      console.log("peso a euro");
      displayValorActual.innerHTML += pesoEuro(valorIngresado);
    } else if (monedaPrincipal.value === monedaSecundaria.value) {
      console.log("misma moneda");
      displayValorActual.innerHTML += valorIngresado;
    }
  } else {
    console.log("No hay monedas");
  }
});

/* botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", (evento) => {
    display2.innerHtml += evento.target.value;
    console.log(evento.target.value);
  });
}); */

/* btn1.addEventListener("click", () => {
  display2.innerHTML += btn1.value;
  console.log(btn1.value);
}); */

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

btnBorrar.addEventListener("click", () => {
  valorIngresado = "";
  displayValorActual.innerHTML = "";
  displayValorAnterior.innerHTML = "";
});
