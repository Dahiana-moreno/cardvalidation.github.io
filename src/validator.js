const validator = {
  isValid: function (creditCardNumber) {

    //CONVERTIR UNA CADENA STRING EN UN ARRAY
    const arr = creditCardNumber.split('');

    //INVERTIR UNA CADENA STRING DE UN ARRAY
    const reversed = arr.reverse();
    console.log(reversed);

    //ITERA A TRAVES DE LOS ELEMENTOS DEL ARRAY 
    for (let j = 0; j < reversed.length; j++) {
      //VERIFICA SI EL INDICE ES IMPAR

      if (j % 2 !== 0) {
        //MULTIPLICA ELELEMENTO POR 2          
        reversed[j] *= 2;
        // SI EL MAYOR A 9 RESTRALE AL RESULTADO EL 9, QUEDARNOS CON EL RESIDUO    

        if (reversed[j] > 9) {
          reversed[j] -= 9;
        }
      }

    }


    //sumo los numeros que hay dentro de un array
    const suma = reversed.reduce((a, b) => Number(a) + Number(b), 0);
    console.log("La suma total es " + suma);

    //como verificar que un numero de un array es multiplo de 10
    if (suma % 10 === 0) {
      return true;
    } else {
      return false;
    }


  },

  maskify: function (creditCardNumber) {

    let acumulador = '';
    const numerator = creditCardNumber.toString().slice(0, -4).replace(/\w/g, "#");
    // console.log(numerator);
    const security = creditCardNumber.toString().slice(-4);
    // console.log(security);
    acumulador = numerator + security;

    console.log(acumulador);
    return acumulador;
  },

  
  enty: function (creditCardNumber) {

    const entyy = {
      electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
      maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
      dankort: /^(5019)\d+$/,
      interpayment: /^(636)\d+$/,
      unionpay: /^(62|88)\d+$/,
      visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
      mastercard: /^5[1-5][0-9]{14}$/,
      amex: /^3[47][0-9]{13}$/,
      diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
      discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
      jcb: /^(?:2131|1800|35\d{3})\d{11}$/
    }

    //PERMITE HACER EL TEST A QUE FRANQUICIA CORRESPONDE
    for (const k in entyy) {
      if (entyy[k].test(creditCardNumber)) {
        return k;
      }

    }
    return null;


  }
};


export default validator;

