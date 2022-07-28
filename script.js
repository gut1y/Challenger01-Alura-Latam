let  btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btnCopiar");
const errorTextoVacio = document.querySelector("#error")

const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".input-text-area");
console.log(inputTexto.value)

btnEncriptar.addEventListener("click", function () {
  const textoEncriptado = encriptar(inputTexto.value);
  console.log(textoEncriptado);
  mensaje.value = textoEncriptado;
});

btnDesencriptar.addEventListener("click", function () {
  const textoDesencriptado = desencriptar(inputTexto.value);
  mensaje.value = textoDesencriptado;
});


function encriptar(StringParaEncriptar) {
  const caracteres = inputTexto.value;
  // console.log( "ver" , caracteres)
  if (caracteres.length == 0) {
    document.querySelector("#buscador-de-texto").classList.remove("invisible");
    //alert("no ha ingresado ningun texto");
    errorTextoVacio.textContent = "No ha ingresado ningun texto"
  } else {
    if (validarMinusculas(caracteres) == "false") {
      document.getElementById("buscador-de-texto").classList.remove("invisible");
      //alert("Solo se permite ingresar letras minusculas");
      errorTextoVacio.textContent="Solo se permite ingresar letras minusculas"
    } else {
      errorTextoVacio.textContent= ""
      document.getElementById("buscador-de-texto").classList.add("invisible");
      document.getElementById("salida").classList.remove("invisible");
      let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
      ];

      StringParaEncriptar = StringParaEncriptar.toLowerCase();
      console.log(StringParaEncriptar);
      for (let i = 0; i < matrizCodigo.length; i++) {
        if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
          StringParaEncriptar = StringParaEncriptar.replaceAll(
            matrizCodigo[i][0],
            matrizCodigo[i][1]
          );
          console.log(StringParaEncriptar);
        }
      }
      return StringParaEncriptar;
    }
  }
}

function desencriptar(StringParaDesencriptar) {
  const caracteres = inputTexto.value;
  if (caracteres.length == 0) {
    document.getElementById("sin-texto").classList.remove("invisible");
    alert("no ha ingresado ningun texto");
    document.getElementById("error-de-entrada").classList.remove("invisible")
  } else {
    if (validarMinusculas(caracteres) == "false") {
      document.getElementById("sin-texto").classList.remove("invisible");
      alert("Solo se permite ingresar letras minusculas");
    } else {
      // document.getElementById("sin-texto").classList.add("invisible");
      // document.getElementById("con-texto").classList.remove("invisible");

      let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"],
      ];
      StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
      for (let i = 0; i < matrizCodigo.length; i++) {
        if (StringParaDesencriptar.includes(matrizCodigo[i][1])) {
          StringParaDesencriptar = StringParaDesencriptar.replaceAll(
            matrizCodigo[i][1],
            matrizCodigo[i][0]
          );
        }
      }

      return StringParaDesencriptar;
    }
  }
}

btnCopiar.addEventListener("click",copiarTexto)

function copiarTexto() {
  let copyText = document.querySelector(".input-text-area");
  copyText.select();
  document.execCommand("copy");
}

function validarMinusculas(letras) {
  letras = String(letras).trim();
  const regxs = {
    lower: /^[a-z\W]+$/g,
    upper: /^[A-Z]+$/g,
    upperLower: /^[A-Za-z]+$/g,
    number: /^[0-9]+$/g,
    space: /\W/g,
  };
  if (regxs.lower.test(letras)) return "true";
  if (regxs.upper.test(letras)) return "false";
  if (regxs.upperLower.test(letras)) return "false";
  if (regxs.number.test(letras)) return "false";
  if (regxs.space.test(letras)) return "false";
}
