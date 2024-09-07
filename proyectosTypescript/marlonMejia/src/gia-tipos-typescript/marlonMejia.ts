//INTERFACES
interface tipoVehiculo {
    tipo: string,
    marca: string,
    modelo: string, 
    cilindraje: number,
    numPuertas: number,
    arrancarVehiculo: () => void,
    cEspeciales: {
        velocidad: number,
        suspension: boolean,
        agregarSuspension: () => void
    },
    testArray: testArray
}

interface testArray {
    modelos: number[],
    carasteristicasArray: Array<string[]>
}

//mi vehiculo (arrancarVehiculo)
const miVehiculo: tipoVehiculo = {
    tipo: "pick up",
    marca: 'Ford',
    modelo: "2015", 
    cilindraje: 2000,
    numPuertas: 4,
    arrancarVehiculo() {
        return `El vehiculo arranco con un motor de ${this.cilindraje} cc`;
    },
    cEspeciales: {
        velocidad: 150,
        suspension: true,
        agregarSuspension() {
            if (this.suspension) {
                console.log("Tu vehiculo tiene suspension")
            }
            else {
                console.log("Tu no vehiculo tiene suspension")
            }
        }
    },
    testArray: {
        modelos: [2012, 2015],
        carasteristicasArray: [ ["1", "2"], ["3", "4"] ]
    }
}
miVehiculo.arrancarVehiculo()

//mi segundo vehiculo (suspension)
const miSegundoVehiculo: tipoVehiculo = {
    tipo: "sport",
    marca: 'chevrolet',
    modelo: "2011", 
    cilindraje: 3500,
    numPuertas: 2,
    arrancarVehiculo() {
        return `El vehiculo arranco con un motor de ${this.cilindraje} cc`;
    },
    cEspeciales: {
        velocidad: 200,
        suspension: false,
        agregarSuspension() {
            if (this.suspension) {
                console.log("Tu vehiculo tiene suspension")
            }
            else {
                console.log("Tu no vehiculo tiene suspension")
            }
        }
    },
    testArray: {
        modelos: [2020, 2021],
        carasteristicasArray: [ ["1", "2"], ["3", "4"] ]
    }
}
miSegundoVehiculo.cEspeciales.agregarSuspension()

//mi tercer vehiculo (modelos y caracteristicas)
const miTercerVehiculo: tipoVehiculo = {
    tipo: "sedan",
    marca: 'BMW',
    modelo: "2022", 
    cilindraje: 2800,
    numPuertas: 4,
    arrancarVehiculo() {
        return `El vehiculo arranco con un motor de ${this.cilindraje} cc`;
    },
    cEspeciales: {
        velocidad: 200,
        suspension: false,
        agregarSuspension() {
            if (this.suspension) {
                console.log("Tu vehiculo tiene suspension")
            }
            else {
                console.log("Tu no vehiculo tiene suspension")
            }
        }
    },
    testArray: {
        modelos: [],
        carasteristicasArray: []
    }
}

    //inicializa la variable modelos
miTercerVehiculo.testArray.modelos = [2016, 2017, 2018, 2019, 2020];

    //inicializa caracteristicasArray
miTercerVehiculo.testArray.carasteristicasArray = [
    ["azul", "verde"],
    ["Rin 15", "Rin 17"],
    ["2 puertas", "4 puertas"]
];


//IMPRESION DE RESULTADOS POR CONSOLA
    //velores de miVehiculo usando ({objeto})
const {tipo, marca, modelo, cilindraje, arrancarVehiculo} = miVehiculo;
const go = arrancarVehiculo.bind(miVehiculo);
console.log(tipo, marca, modelo, cilindraje);
    //metodo arrancar vehiculo
console.log(go());  
console.log(miVehiculo.arrancarVehiculo());
    //metodo agregarSuspension
miVehiculo.cEspeciales.agregarSuspension();
    //valor de mi segundoVehiculo
console.log(miSegundoVehiculo.tipo, miSegundoVehiculo.marca, miSegundoVehiculo.modelo);
    //valor de mi tercerVehiculo
const {tipo: tipo3, marca: marca3, modelo: modelo3} = miTercerVehiculo;
console.log(tipo3, marca3, modelo3);
    //imprimir "azul" en caracteristicasArray[][] del objto miTercerVehiculo
console.log(miTercerVehiculo.testArray.carasteristicasArray[0][0]);
    //imprimir "4 puertas"
console.log(miTercerVehiculo.testArray.carasteristicasArray[2][1]);


//IMPRESION DE TODOS LOS VALORES DE CADA SUBARRAY
let index: number = 0;  //para index = 0, imprime "azul", "Rin 15", "2 puertas"
                        //para index = 1, imprime "verde", "Rin 17", "4 puertas"
miTercerVehiculo.testArray.carasteristicasArray.forEach((caracteristica) => {
    console.log(caracteristica[index]);
});
