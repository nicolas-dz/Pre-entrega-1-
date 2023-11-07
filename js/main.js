let nombre = prompt("Hola! Bienvenido a la calculadora de peso lunar"+"\n"+"¿Cual es su nombre?")

while (!isNaN(nombre)){
    alert(
        "por favor ,ingrese un nombre. "
      );
      nombre= prompt("Ingresa su nombre nuevamente.");
}
console.log(nombre);
alert ("Bienvenido "+nombre+", vamos a calcular tu peso en la luna.");

let peso = prompt(nombre+" ¿cual es tu peso terricola?")

while (true) {
if (isNaN(peso)) {
      alert("Por favor, ingresa solo números.");
      peso = parseInt(prompt(nombre +" ingresa tu peso en valor numerico"));
} else if (parseInt(peso) <= 0) {
      alert("Por favor, ingresa un número mayor que cero.");
      peso = parseInt(prompt(nombre +" ingresa tu peso en valor numerico"));
} else if (parseInt(peso)>1000){
    alert("Por favor, ingresa un número menor a 1000."+"\n" +"O visite un medico");
      peso = parseInt(prompt(nombre +" ingresa tu peso en valor numerico"));
}
else {
      alert(nombre+" tu peso es " + peso+" kg");
      console.log(nombre+" tu peso es " + peso);
      break;
} }
    console.log(peso);

    function calcularPesoLuna (peso){
    let pesoLunar = 0.16;
    return (peso*pesoLunar);}
    
    console.log(calcularPesoLuna(peso));
    alert (nombre+" su peso en la luna es de "+calcularPesoLuna(peso)+" kg"+"\n"+"!! Disfrute el viaje !!");
    alert (nombre+", los valores son los siguientes:"+"\n"+"- Peso terricola :"+peso+" kg"+ "\n" +"- Peso lunar :"+calcularPesoLuna(peso)+" kg"+"\n"+"!! Muchas gracias !!");


    document.write("<h3>"+nombre+" Su peso lunar es "+calcularPesoLuna(peso)+" </h3>") ;