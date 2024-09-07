interface miPersonaje {

    nombre: string,
    vida: number,
    estado: boolean,
    mostrarPuntosDeVida:() => void;

}


//funcion usando objetos como parametro
const mejoraPersonaje = (personaje: miPersonaje, cantidadMejora: number) => { //funcion como constante, cuando se vaya a usar objetos como parametros
    
    personaje.vida += cantidadMejora;

}

//definicion del objeto
const gandalf: miPersonaje = {

    nombre: 'Gandalf',
    vida: 120,
    estado: true,
    mostrarPuntosDeVida(){
        console.log(this.vida);
    }
}

gandalf.mostrarPuntosDeVida(); //120 de vida
mejoraPersonaje(gandalf, 80);
gandalf.mostrarPuntosDeVida(); //200 de vida
