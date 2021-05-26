const archivo = {
    demand: true,
    alias: 'f',
    desc: 'Archivo CSV con datos a procesar'
}
const anio = {
    default: 1960,
    alias: 'y',
    desc: 'Año que del que se busca información'
}
const pais = {
    default: 'ECU',
    alias: 'c',
    desc: ' Código del país que se requiere información'
}


const argv = require('yargs')
    .command('mostrar', 'Imprime en pantalla el resultado de la búsqueda', {
        archivo,
        anio,
        pais


    })
    .command('guardar', 'Genera un archivo con el resultado de la búsqueda', {
        archivo,
        anio,
        pais,
    })
    .argv;

//exportamos el modulo
module.exports = {
    argv
}