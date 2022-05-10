
// var nombre = document.getElementById("nombre")
// var nombre1 = nombre.value;






function enviar() {
    var nombre = document.getElementById("nombre").value
    var primeApellido = document.getElementById("primerApellido").value
    var segundoApellido = document.getElementById("segundoApellido").value
    var dni = document.getElementById("dni").value
    // var direccion = document.getElementById("direccion").value
    // var codigoPostal = document.getElementById("postal").value
    // var poblacion = document.getElementById("poblacion").value
    // var pais = document.getElementById("pais").value
    var email = document.getElementById("email").value

    var confimirEmail = document.getElementById("confirmEmail").value

    // var intereses = document.getElementById("Intereses").value
    // var password = document.getElementById("password").value
    let n2 = 0;
    //if (charCode > 32 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {  PARA ENCONTRAR EN ASCII EL NOMBRE


    //nombre
    for (let j = 1; j < nombre.length; j++) {
        if (nombre[j].charCodeAt() < 'a'.charCodeAt() || nombre[j].charCodeAt() > 'z'.charCodeAt()) {
            n2 += 1;
        }
        console.log(n2)
    }


    if (nombre.charAt(0) !== nombre.charAt(0).toUpperCase() || n2 > 0 || nombre == "") {
        nombreerror = document.getElementById("parrafoNombre").innerHTML = "nombre incorrecto"


    }
    //primer apellido
    let n3 = 0
    for (let j = 1; j < primeApellido.length; j++) {
        if (primeApellido[j].charCodeAt() < 'a'.charCodeAt() || primeApellido[j].charCodeAt() > 'z'.charCodeAt()) {
            n3 += 1;
        }
    }
    console.log(n3)


    if (primeApellido.charAt(0) !== primeApellido.charAt(0).toUpperCase() || n3 > 0 || primeApellido == "") {
        papellidoerror = document.getElementById("parrafo1Apellido").innerHTML = "primer apellido incorrecto"
    }
    //segundo apellido
    let n4 = 0
    for (let j = 1; j < segundoApellido.length; j++) {
        if (segundoApellido[j].charCodeAt() < 'a'.charCodeAt() || segundoApellido[j].charCodeAt() > 'z'.charCodeAt()) {
            n4 += 1;
        }

        console.log(n4)
    }

    if (segundoApellido.charAt(0) !== segundoApellido.charAt(0).toUpperCase() || n4 > 0 || segundoApellido == "") {
        sapellidoerror = document.getElementById("parrafo2Apellido").innerHTML = "Segundo apellido incorrecto"
    }



    //dni

    for (let j = 0; j < dni.length; j++) {
        if (dni[dni.length - 1].charCodeAt() < 'a'.charCodeAt() || dni[dni.length - 1].charCodeAt() > 'z'.charCodeAt() || dni == "" || (dni.length != 9)) {
            dnitex = document.getElementById("parrafoDni").innerHTML = "dni incorrecto";
        }
        if (dni[0].charCodeAt() < '0'.charCodeAt() || dni[0].charCodeAt() > '9'.charCodeAt()
            || dni[1].charCodeAt() < '0'.charCodeAt() || dni[1].charCodeAt() > '9'.charCodeAt()
            || dni[2].charCodeAt() < '0'.charCodeAt() || dni[2].charCodeAt() > '9'.charCodeAt()
            || dni[3].charCodeAt() < '0'.charCodeAt() || dni[3].charCodeAt() > '9'.charCodeAt()
            || dni[4].charCodeAt() < '0'.charCodeAt() || dni[4].charCodeAt() > '9'.charCodeAt()
            || dni[5].charCodeAt() < '0'.charCodeAt() || dni[5].charCodeAt() > '9'.charCodeAt()
            || dni[6].charCodeAt() < '0'.charCodeAt() || dni[6].charCodeAt() > '9'.charCodeAt()
            || dni[7].charCodeAt() < '0'.charCodeAt() || dni[7].charCodeAt() > '9'.charCodeAt()) {
            dnitex = document.getElementById("parrafoDni").innerHTML = "dni incorrecto por numeros";
        }
    }

    //email
    let n1 = 0;
    let regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let validEmail = regex.test(email)

    if (!validEmail) {
        salidaemail = document.getElementById("parrafoEmail").innerHTML = "email  incorrecto"
    }


    //comprobaremail
    let comprobarelmail = confimirEmail

    if (comprobarelmail === email) {
        console.log("bien")
    } else {
        salidacomprobaremail = document.getElementById("parrafoCemail").innerHTML = "comprobacion del email  incorrecto"

    }




    // h. Password: Mínimo 8 caracteres y máximo 20, debe contener al menos una mayúscula, al menos una minúscula, al menos dos números y al menos un símbolo. Se trata de un campo obligatorio.

    if (password.length > 8 && password <= 20 && password == "/[A-Z]/g") {

    } else {
        alert('Error')
    }


}
