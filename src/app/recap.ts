const username: string = 'arashid2906'
//pudes asignar dos tipos de variables con TypeScript
// const example: string | number= 1

//Al no recibir parametros una arrow function se declara así
// const saludar=()=> console.log('Hola');
// saludar();

const sum = (a: number, b: number) => a + b;

sum(1, 3)


// TypeScript facilita la escritura por lo que en vez de hacer todo esto unicamente con poner esto
// class Person {
//   name: string;
//   lastname: string;
//   age: number;
//   private password: string;
//   constructor(name: string, lastname: string, age: number, password: string) {
//     this.name = name
//     this.lastname = lastname
//     this.age = age
//     this.password = password
//   }
// }


class Person {
  constructor(public name: string, public lastname: string, private password: string, public age: number) { }
}

const person = new Person(
  'Abraham', 'Cortez', 'prueba', 22
)
