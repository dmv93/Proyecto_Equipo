
// var nombre = document.getElementById("nombre")
// var nombre1 = nombre.value;

function enviar() {
    var nombre = document.getElementById("nombre").value
    var primeApellido = document.getElementById("primerApellido").value
    var segundoApellido = document.getElementById("segundoApellido").value
    var dni = document.getElementById("dni").value
    var direccion = document.getElementById("direccion").value
    var email = document.getElementById("email").value
    var confimirEmail = document.getElementById("confirmEmail").value
    var intereses = document.getElementById("intereses").value
    var password = document.getElementById("password").value
    let n2 = 0;

    //COMPROBACION DEL NOMBRE
    for (let j = 1; j < nombre.length; j++) {
        if (nombre[j].charCodeAt() < 'a'.charCodeAt() || nombre[j].charCodeAt() > 'z'.charCodeAt()) {
            n2 += 1;
        }
        console.log(n2)
    }


    if (nombre.charAt(0) !== nombre.charAt(0).toUpperCase() || n2 > 0 || nombre == "") {
        nombreerror = document.getElementById("parrafoNombre").innerHTML = "nombre incorrecto"


    }
    //COMPROBACION DEL PRIMER APELLIDO
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
    //COMPROBACION SEGUNDO APELLIDO
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



    //COMPROBACION DEL DNI
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
    //COMPROBACION DEL EMAIL
    let regeX = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;    //comprobamos con la regex que primero bien, tenga arroba, dominio y acabe bien
    let validEmail = regeX.test(email)

    if (!validEmail) {
        salidaemail = document.getElementById("parrafoEmail").innerHTML = "email  incorrecto"
    }
    //COMPROBACION DE LA VALIDACION DEL EMAIL
    let comprobarelmail = confimirEmail

    if (comprobarelmail === email) {
        console.log("bien")
    } else {
        salidacomprobaremail = document.getElementById("parrafoCemail").innerHTML = "comprobacion del email  incorrecto"

    }




    //COMPROBACION DE CONTRASEÑA
    var v1 = 0
    var v2 = 0
    var v3 = 0
    var v4 = 0

    if (password.length >= 8 && password.length <= 20) {
        for (let i = 0; i < password.length; i++) {
            if (password[i].charCodeAt() >= 'A'.charCodeAt() && password[i].charCodeAt() <= 'Z'.charCodeAt()) {
                v1 += 1;
            }

            if (password[i].charCodeAt() >= 'a'.charCodeAt() && password[i].charCodeAt() <= 'z'.charCodeAt()) {
                v2 += 1;
            }

            if (password[i].charCodeAt() >= '0'.charCodeAt() && password[i].charCodeAt() <= '9'.charCodeAt()) {
                v3 += 1;
            }
            if (password[i].charCodeAt() >= '!'.charCodeAt() && password[i].charCodeAt() <= '@'.charCodeAt()) {
                v4 += 1;
            }

            console.log('ver v1' + v1)
            console.log('ver v2' + v2)
            console.log('ver v3' + v3)
            console.log('ver v4' + v4)
        }
        if (v1 > 0 && v2 > 0 && v3 > 1 && v4 > 0) {
            console.log("todo guay")
        } else {
            passwordText = document.getElementById("parrafoPassword").innerHTML = "La contraseña debe de tener al menos mayuscula, minuscula, dos números y un símbolo" + password

        }

    } else {
        salidacomprobarpassword = document.getElementById("parrafoPassword").innerHTML = "contraseña incorrecta"
    }

    //COMPROBACION DE DIRECCION
    //                  via - nombre - numero - piso - portal - cp - poblacion -pais
    //let arradir = /^[^ ]+[/ ]+[a-z]+[, ]+[0-9]{1,3}+[, ]+[0-9]{1,2}+[, ]+[0-9]{5}+[, ]+[a-z]+[, ]+[a-z]$/
    //let regexDir = arradir.test(direccion)


    //COMPROBACION DE INTERESES
    let mercado = "mercado inmobiliario"
    let bolsa = "bolsa"
    let bienes = "bienes estatales"
    const Array = [mercado, bolsa, bienes]
    let correctoArray = [];

    let myArray = intereses.split(",", 3);
    let cmercado = 0
    let cbolsa = 0
    let cbienes = 0
    for (i = 0; i <= Array.length - 1; i++) {
        if ((myArray[i] == Array[0])) {
            console.log("mercado ok");
            correctoArray.push(Array[0]);
            cmercado = 1
        }


        if (myArray[i] == Array[1]) {
            console.log("bolsa ok")
            correctoArray.push(Array[1]);
            cbolsa = 1
        }


        if (myArray[i] == Array[2]) {
            console.log("bienes ok")
            correctoArray.push(Array[2]);
            cbienes = 1

        }

        console.log(correctoArray)
    }
    if (cmercado == 0) {
        errorIntereses = document.getElementById("parrafoIntereses").innerHTML = "Te faltan poner mercado inmobiliario "
        inter();

    }
    if (cbolsa == 0) {
        errorIntereses = document.getElementById("parrafoIntereses").innerHTML = "Te falta poner bolsa"

    }
    if (cbienes == 0) {
        errorIntereses = document.getElementById("parrafoIntereses").innerHTML = "Te falta poner bienes estatales"

    }
    if (cmercado == 0 && cbolsa == 0) {
        errorIntereses = document.getElementById("parrafoIntereses").innerHTML = "Te falta poner mercado inmobiliario y bolsa"

    }
    if (cmercado == 0 && cbienes == 0) {
        errorIntereses = document.getElementById("parrafoIntereses").innerHTML = "Te falta poner mercado inmobiliario y bienes estatales"

    }
    if (cbolsa == 0 && cbienes == 0) {
        errorIntereses = document.getElementById("parrafoIntereses").innerHTML = "Te falta poner bolsa y bienes estatales"
    }
    if (cmercado == 0 && cbolsa == 0 && cbienes == 0) {
        errorIntereses = document.getElementById("parrafoIntereses").innerHTML = "Te falta poner mercado inmobiliario, bolsa y bienes estatales"
    }
    if (cmercado == 1 && cbolsa == 1 && cbienes == 1) {
        errorIntereses = document.getElementById("parrafoIntereses").innerHTML = "";

    }
}


function limpiar() {
    var borrar = document.getElementById("formu");
    borrar.reset()

}