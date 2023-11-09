/*Seleccionamos un numero aleatorio */
let numeroAzar = Math.floor(Math.random() * 100) + 1;
/*Tomamos el valor ingresado por el usuario */
let numeroUsuario = document.getElementById('numeroUsuario');
/*Enlazamos con el texto que va aparecer luego */
let mensaje = document.getElementById('mensajeUsuario');
/*Tomamos el nombre ingresado por el usuario */
let nombre = document.getElementById('nombre');

/*Creamos un contador para contar los intentos */
let contador = 0;
let contadorIntentos = 1;
/*Ponemos un contador de intentos */
let intentosRealizados= document.getElementById('intentosRealizados');

/*Creamos la funcion para ejecutar cuando el usuario haga click en probar suerte
 y verificamos el resultado*/

function verificarResultado() {
    /*Convertimos el string ingresado por el usuario a numero */
    let numUser = parseInt(numeroUsuario.value);

    /*creamos un for para controlar los intentos */
    if (contador < 4) {
        intentosRealizados.textContent= `Llevas ${contadorIntentos} intentos`;
        contadorIntentos++;
        if(numUser<1 || numUser>100 || isNaN(numUser)){
            mensaje.textContent ='Por favor ingresa un numero valido del 0 al 100';
            mensaje.style.color='black';
            return;
        }

        if (numUser === numeroAzar) {
            mensaje.textContent = `¡¡¡Felicidades ${nombre.value}! Has acertado,eres un Genio!!! `;
            mensaje.style.color = 'greenyellow';
        }
        else if (numUser < numeroAzar) {
            mensaje.textContent = "El numero es mayor al ingresado";
            mensaje.style.color = 'coral';

        } else if (numUser > numeroAzar) {
            mensaje.textContent = "El numero es menor al ingresado"
            mensaje.style.color = 'lightseagreen';

        }
        return contador++;
    } else {

        mensaje.textContent = "Superaste la cantidad de intentos!!!";
        mensaje.style.color = 'black';
        numeroUsuario.disabled = true
    }

}





