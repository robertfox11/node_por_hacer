const argv = require('./config/yargs').argv;
const colors = require('colors');

// llamamos al modulo por hacer
const porHacer = require('./por-hacer/por_hacer');
// console.log(argv);

let comando =  argv._[0];
switch (comando) {
    case 'listar':
        // console.log('listar');
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('====Por Hacer===='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=================='.green);   
        }
        break;
    case 'crear':
        // console.log('crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        // node app crear -d "Pasear al perro" con esto verificamos la descripcion
        console.log(tarea);
        break;
    case 'actualizar':
        // console.log('actualizar');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        // noode app actualizar -d Comer -c true
        
        console.log(actualizado);
        break;
    case 'borrar':
        // console.log('actualizar');
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido');
}