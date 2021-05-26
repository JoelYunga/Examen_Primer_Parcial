const argv = require('./config/yargs').argv;
const tareas = require('./buscador/buscar');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {
    case 'mostrar':
        let consulta = tareas.consulta(argv.archivo, argv.anio, argv.pais);
        break;
    default:
        console.log('Comando no reconocido');
}