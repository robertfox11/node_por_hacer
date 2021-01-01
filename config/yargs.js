const argv = require('yargs').command('crear', 'Crea un archivo', {
                                descripcion:{
                                    demand: true,
                                    alias: 'd',
                                    des: 'Descripcion de la tarea por hacer'
                                }
                            }).command('actualizar', 'Actualiza el estado completado', {
                                descripcion:{
                                    demand: true,
                                    alias: 'd',
                                    des: 'Descripcion de la tarea por hacer'
                                },
                                completado:{
                                    demand: true,
                                    alias: 'c',
                                    des: 'Completado la tarea'
                                }
                            }).command('borrar', 'borra una tarea el estado completado', {
                                descripcion:{
                                    demand: true,
                                    alias: 'd',
                                    des: 'Descripcion de la tarea por hacer'
                                }
                            })
                            .help().argv;

module.exports ={
    argv
}