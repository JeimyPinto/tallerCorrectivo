function hacerEjercicio1() {
    let numero = document.getElementById("numero1").value;
    if (numero > 99 && numero < 1000) {
        document.getElementById("respuesta1").innerHTML = "Es un número de 3 cifras"
    }
    else {
        document.getElementById("respuesta1").innerHTML = "No es un número de 3 cifras"

    }
}
function contarDigitos(numero) {
    if (numero > 1000 || numero < 0) {
        alert("Número no válido, vuelve a intentarlo")
        return -1;

    } else {
        let cantidadDigitos = 1;
        while (numero % 10 != numero) {
            cantidadDigitos++;
            numero = numero / 10;
        }
        return cantidadDigitos;
    }
}
function hacerEjercicio2() {
    let numero = document.getElementById("numero2").value;
    document.getElementById("respuesta2").innerHTML = "Cantidad de dígitos: " + contarDigitos(numero);

}
function hacerEjercicio3() {
    let numero1 = document.getElementById("numero3-1").value;
    let numero2 = document.getElementById("numero3-2").value;
    let digitosTotales = contarDigitos(numero1) + contarDigitos(numero2);
    document.getElementById("respuesta3").innerHTML = "Cantidad de dígitos: " + digitosTotales;
}
function hacerEjercicio4() {
    let numero = document.getElementById("numero4").value;
    if (numero == 1 || numero == 2 || numero == 3) {
        if (numero == 1) {
            document.getElementById("respuesta4").innerHTML = "Este participante recibe medallade oro";

        }
        if (numero == 2) {
            document.getElementById("respuesta4").innerHTML = "Este participante recibe medallade plata";

        }
        if (numero == 3) {
            document.getElementById("respuesta4").innerHTML = "Este participante recibe medallade bronce";

        }
    } else {
        document.getElementById("respuesta4").innerHTML = "Este participante no recibe medalla";
    }

}
function hacerEjercicio5() {
    let numero1 = document.getElementById("numero5-1").value;
    let numero2 = document.getElementById("numero5-2").value;
    let menor = Math.min(numero1, numero2);
    let mayor = Math.max(numero1, numero2);
    let resta = mayor - menor;
    document.getElementById("respuesta5").innerHTML = "Resultao : " + resta;

}
function hacerEjercicio6() {
    let numero = document.getElementById("numero6").value;
    if (numero >= 0 && numero <= 3) {
        if (numero == 0)
            document.getElementById("respuesta6").innerHTML = "Muy mal >:C";
        if (numero == 1)
            document.getElementById("respuesta6").innerHTML = "Mal :C";
        if (numero == 2)
            document.getElementById("respuesta6").innerHTML = "Regular :s";
        if (numero == 3)
            document.getElementById("respuesta6").innerHTML = "Bien :3";

    } else {
        document.getElementById("respuesta6").innerHTML = "No es una nota válida";
    }

}
function hacerEjercicio7() {
    let nombre = document.getElementById("nombre7").value;
    let edad = document.getElementById("numero7").value;
    if (edad > 18)
        document.getElementById("respuesta7").innerHTML = nombre + " es mayor de edad";
    else
        document.getElementById("respuesta7").innerHTML = nombre + " no es mayor de edad";




}
class Pizza {
    constructor(clase) {
        this.clase = clase;
    }
    getClase() {
        return this.clase;
    }
    setClase(clase) {
        this.clase = clase;
    }
}
function hacerEjercicio8() {
    var pizza;
   // let tipo = document.querySelector('input[name="tipo"]:checked').value;
   alert(document.tipoPizza.miCheck.value);
    if (tipo = "sencilla") {
        pizza = new Pizza("sencilla");
    }
    if (tipo = "doble") {
        pizza = new Pizza("doble");
    }
    if (tipo = "triple") {
        pizza = new Pizza("triple");
    }
    alert(tipo);
}


