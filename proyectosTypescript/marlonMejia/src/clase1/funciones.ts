function agregarNumeros (a:number, b:number) { //en typescript hay que definir los tipos de datos que se van a usar en una funcion, si no los toma como 'any'
    return a + b;

}

function agregarNumeros2 (a:any, b:any) { //en typescript hay que definir los tipos de datos que se van a usar en una funcion, si no los toma como 'any'
    return a + b;

}

function agregarNumeros3 (a:string, b:string) { //en typescript hay que definir los tipos de datos que se van a usar en una funcion, si no los toma como 'any'
    return Number(a) + Number(b);

}

console.log(agregarNumeros(5, 20)); //si el tipo de dato es any se puede ingresar culaquier cosa, strings, numbers, booleans...

const result: number = agregarNumeros(32, 8);
console.log(result)

const resultString: string = agregarNumeros2(56, 4); // como es any el tipo de dato no hay problema "aun que no se deberia"
const resultString2: string = agregarNumeros(46, 2).toString(); //se usa la funcion que solo admite numbers pero se usa el metodo to string para que no gener conglicto con la const que esta definida como string
const resultString3: number = agregarNumeros3("21", "41");

console.log(resultString);
console.log(resultString2);
console.log(resultString3);
