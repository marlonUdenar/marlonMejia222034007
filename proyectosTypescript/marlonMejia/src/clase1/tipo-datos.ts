const miNombre: string = "jorge";
const miEdad: number = 100;

let numero = 200;
const x = "juan";

let otroValor: string | number = 350;

let valorPersonalizado: number | 'codigo' = 10; //imprime 10
let valorPersonalizado2: number | 'codigo' = 'codigo'; //imprime codigo, si es diferente el valor del estrig genera error debo usar obligatoriamente el string asignado


let habilidades = ['ataque', 'vida', 'especial', true, 100]; //es javascript, no sive para typescript, no se debe escribit asi

let misNumeros: number [] = [1,2,3,4,5]; //valido para definir una arreglo de datos numericos

//let habilidades2: string [] = ['ataque', 'vida', 'especial', true, 100];





console.log({

    numero, miEdad, miNombre, x, otroValor, valorPersonalizado, valorPersonalizado2

})
