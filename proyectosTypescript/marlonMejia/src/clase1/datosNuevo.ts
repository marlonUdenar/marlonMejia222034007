interface datosPersonalizados{
    nombre: string,
    vida:number,
    habilidades: string[],
    poderEspecial: boolean
}
const mago2: datosPersonalizados = {
    nombre: 'Gandalf',
    vida: 100,
    habilidades: ['velocidad', 'conjuro'],
    poderEspecial: true
}

mago2.nombre = 'Saruman';
mago2.habilidades = ['ejemplo 1','ejemplo 2'];
mago2.vida = 100;
mago2.poderEspecial = false;

console.table(mago2);