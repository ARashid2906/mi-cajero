
//Al no recibir parametros una arrow function se declara así
const saludar = () => console.log('Hola');
saludar();

// Al recibir un parametro se realzia la arrow function así nota esto aplica para js
const nombre = nombre => console.log(`El número ${nombre}`);
nombre('abraham')

const suma = (a, b) => a + b;
console.log(suma(8, 9));


//Cuando son varias líneas se debe de hacer de la siguiente manera

const ejemploFuncion = () => {
  console.log('Hola');
  console.log('Adios');
  console.log('Mundo');
}

ejemploFuncion()




//En este caso nosotros tenemos el siguiente arreglo de números y podemos evitar escribir todo el siguiente código
const numeros = [1, 2, 3, 4, 5]

numeros.forEach(function (n, index) {
  console.log(`${n} esta en la posición ${index}`);
})

//Esta sería la forma simplificada de las arrow function
numeros.forEach((n, index) => console.log(`${n} en la posición ${index}`));

// Funcion declarada ejemplo
//En este caso la funcion al exitir dentro del contexto del navegador se vuelve el obj del dom que representa window
function animal() {
  console.log(this);
}
perro()

//En este caso this toma el valor del obj perro
const perro = {
  nombre: "kenai",
  ladrar: function () {
    console.log(this);
  }
}
perro.ladrar();

//Otra forma mas simplificada, sin embargo en este caso this vuelve a ser el obj window
const perroArrowFunction = {
  nombre: "kenai",
  ladrar: () => {
    console.log(this);
  }
}


// En resumen las arrow function tienen la capacidad de saltarse el contexto, en este caso es una mala practica el crear un metodo apartir de una arrow function

//Los metodos para un objeto literal son así

const zacumi={
  nombre:"zacumi",
  ladrar(){
    console.log(this);
  }
}

zacumi.ladrar();
