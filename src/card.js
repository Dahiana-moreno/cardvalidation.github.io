import validator from './validator.js';


const iName = document.querySelector("#inputName");
const iNumber = document.querySelector("#inputNumber");
const iMonth = document.querySelector("#inputMonth");
const iYear = document.querySelector("#inputYear");
const iCvc = document.querySelector("#inputCvc");

const cardNumber = document.querySelector("#card-number");
const cardName = document.querySelector("#card-name");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCvc = document.querySelector("#card-cvc");

iName.addEventListener("input",() => {
  cardName.innerText = iName.value;
})

iNumber.addEventListener("input",() => {
  cardNumber.innerText = iNumber.value;
})
iMonth.addEventListener("input",() => {
  cardMonth.innerText = iMonth.value;
})
iYear.addEventListener("input",() => {
  cardYear.innerText = iYear.value;
})
iCvc.addEventListener("input",() => {
  cardCvc.innerText = iCvc.value;
})
console.log(validator);
const confirm = document.getElementById("confirm");
confirm.addEventListener("click", inputNumber)

// OBTENER VALOR INPUTNUMBER
function inputNumber() {
  const value = document.getElementById("inputNumber").value;
  console.log(value)
  //LLAMDO FUNCION ISVALID
  console.log(validator.isValid(value));
  window.alert(validator.isValid(value));

  //LLAMDO FUNCION MASKIFY
  console.log(validator.maskify(value));
  console.log(validator.enty(value))
  //window.alert(validator.enty(value));


}


//BOTON CONFIRMAR EJECUTA LA VALIDACION Y EL ENMASCARDO
document.getElementById("confirm").addEventListener("click", () => {


  const inputName = document.getElementById("inputName").value;
  const inputNumber = document.getElementById("inputNumber").value;
  const inputMonth = document.getElementById("inputMonth").value;
  const inputYear = document.getElementById("inputYear").value;
  const inputCvc = document.getElementById("inputCvc").value;





  //SE HACE EL LLAMADO DE LA FUNCION ISVALID
  const valid = validator.isValid(inputNumber);

  
  if (inputName === "") {
    return alert("Ingrese el Nombre a validar")
  }
  if (inputNumber === null || inputNumber === "") {
    return alert("Ingrese el Numero de la tarjeta a validar")
  }
  if (inputMonth === "") {
    return alert("Ingrese el mes de la expedicion de tarjeta a validar")
  }
  if (inputYear === "") {
    return alert("Ingrese el año de la tarjeta a validar")
  }
  if (inputCvc === "") {
    return alert("Ingrese el codigo de seguridad de la tarjeta a validar")
  }

  console.log(valid);

  //enmascaro el numero dentro del input llamando maskify
  const acumulador = validator.maskify(inputNumber);

  document.getElementById("inputNumber").value = acumulador;
  //ENMASCARAMIENTO DEL NUMERO

  console.log(acumulador);



}


);