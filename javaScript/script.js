alert("Bienvenido a la maquina de cafe. Pulse aceptar para comenzar.")

let tamanio, tipo, numero
let valTam, valCafe
let precio = 0
let ingreso, vuelto
let respuesta, otro, valOtro
let dia, mes, anio, cumple



function calcular(dia, mes, anio) {

    anio = 2022 - anio
    if (mes > 6) {
        anio = anio - 1
    } else if (mes < 6){
        anio = anio -2
    }else if (mes === 6 && dia === 29) {
        anio = anio
        return `Feliz cumpleaños N°${anio}!!!!!`
    }

    return `Usted tiene ${anio} años.`

}

do {
    do {
        // Tamaño de cafe
        numero = parseFloat(prompt("Por favor ingrese el numero del tamaño del vaso que desea: \n1. Grande \n2. Mediano \n3. Chico"))

        switch (numero) {
            case 1:
                tamanio = "grande"
                precio = 50
                valTam = false

                break

            case 2:
                tamanio = "mediano"
                precio = 30
                valTam = false
                break

            case 3:
                tamanio = "chico"
                precio = 10
                valTam = false
                break
            default:
                valTam = true
                alert("Por favor, ingrese un numero valido.")
                break
        }
    } while (valTam)
    console.log(tamanio)

    // Tipo de cafe
    do {
        numero = parseFloat(prompt("Por favor ingrese el numero del cafe que desea: \n1. Negro \n2. Cortado \n3. Cafe con leche \n4. Lagrima"))

        switch (numero) {
            case 1:
                tipo = "negro"
                precio = precio + 30
                valCafe = false
                break

            case 2:
                tipo = "cortado"
                precio = precio + 25
                valCafe = false
                break

            case 3:
                tipo = "con leche"
                precio = precio + 20
                valCafe = false
                break
            case 4:
                tipo = "lagrima"
                precio = precio + 15
                valCafe = false
                break
            default:
                valCafe = true
                alert("Por favor, ingrese un numero valido.")
                break
        }
    } while (valCafe)
    console.log(tipo)
    let pago = true
    //Precio, pago y vuelto.
    do {
        ingreso = parseFloat(prompt(`El precio del cafe es $${precio} pesos. \nPor favor, ingrese el monto con el que va a abonar.`))
    } while (isNaN(ingreso) || ingreso <= 0);
    do {
        if (ingreso < precio) {
            ingreso = ingreso + parseFloat(prompt(`El monto ingresado no es suficiente. \nFaltan $${precio - ingreso} pesos. Por favor ingrese otro billete.`))
        } else {
            alert(`Pago exitoso! Su vuelto es $${ingreso - precio} pesos. \nPulse aceptar para continuar.`)
            pago = false
        }
    } while (pago)

    alert("Mientras espera el cafe. Porque no jugamos a un juego ?. \nUsted me dice la fecha de su nacimiento y yo adivino su edad.")
    do {
        dia = parseInt(prompt("Por favor. Ingrese el dia en el que nacio."))
        mes = parseInt(prompt("Por favor. Ingrese el mes en el que nacio."))
        anio = parseInt(prompt("Por favor. Ingrese el año en el que nacio."))
    } while (isNaN(dia) || isNaN(mes) || isNaN(anio))

   alert (calcular (dia,mes,anio))



    alert(`Cafe listo! \nAqui tiene su Cafe ${tipo} ${tamanio}. \nRetire el vaso con cuidado.`)


    do {
        respuesta = prompt("Desesa otro cafe ? Ingrese Y para decir si, o N para decir no").toLocaleLowerCase()
        if (respuesta === "y") {
            otro = true
            valOtro = false
        } else
            if (respuesta === "n") {
                otro = false
                valOtro = false
            } else {
                alert("Por favor ingrese Y o N.")
                valOtro = true
            }
    } while (valOtro)

} while (otro)

alert("Gracias por su compra. Regrese pronto!")
