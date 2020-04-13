const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de una tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'

}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza el estado completado de tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar un elemento por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}