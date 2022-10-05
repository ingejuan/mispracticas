/*//Ejemplo para saber el numero de dia
usando funciones como ser numDia new Date, siempre fijate de las letras mayusculas en cada funcion
*/


let numdia = (new Date().getDay());
/*console.log(numdia)*/

/*let numdia = parseFloat(prompt("ingrese el dia"));*/


switch (numdia) {

    case 0:
        alert("es domingo");
        break;
    case 1:
        alert("es lunes");
        break;
    case 2:
        alert("es martes");
        break;
    case 3:
        alert("es miercoles");
        break;
    case 4:
        alert("es jueves");
        break;
    case 5:
        alert("es viernes");
        break;
    case 6:
        alert("es sabado");
        break;
    default:
        alert("es feriado :)")

}

