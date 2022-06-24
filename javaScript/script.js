alert("Bienvenido a la maquina de cafe. Pulse aceptar para comenzar.")

let tamanio, tipo, numero
let valTam, valCafe
let precio = 0
let ingreso, vuelto
let respuesta, otro, valOtro
// Tamaño de cafe
do {
    do {
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
