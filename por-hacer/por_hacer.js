
// tneemos que hacer toda la logica 
const fs = require('fs');

// todas las notas la almacenamos en un arreglo
let listarPorHacer = [];

// vamos a guardar la base de datos
const guardarDB = () => {
    // convertimos un objeto a un json
    let data =JSON.stringify(listarPorHacer);

    fs.writeFile('db/data.json', data, (err)=>{
        if (err) {
            throw new Error('No se pudo grabar', err);
        } else {
            
        }
    })
}

// cargar la base de datos de json
const cargarDB = () =>{
    // podemos hacer un require los seriealiza y lo convierte en objeto java script
    try {
        listarPorHacer = require('../db/data.json');
    } catch (error) {
        listarPorHacer = [];
    }
}

const crear = (descripcion) =>{
    // Cargamos la base de datos
    cargarDB();

    let porHacer ={
        descripcion,
        completado: false
    };
    // Lo guardamos en el objeto
    listarPorHacer.push(porHacer);
    // guardamos en el json
    guardarDB();
    return porHacer;
}
// creamos una funcion para obtener el listado
const getListado = () =>{
    cargarDB();
    return listarPorHacer;
}

//creamos un funcion para actualizar la base de datos

const actualizar = (descripcion, completado = true) =>{
    
    cargarDB();
    
    let index = listarPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    //validamos si lo encontramos la posicion index del elemento 
    if (index >= 0) {
        // cambiamos la propiedad completado
        listarPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

//borrar la tarea 
const borrar = (descripcion) =>{
    cargarDB();
    //con filter vamos a borrar del listado
    let nuevoListado = listarPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listarPorHacer.length === nuevoListado.length) {
        // no se borro
        return false;
    } else {
        // si lo borro
        listarPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}
module.exports ={
    crear,
    getListado,
    actualizar,
    borrar
}