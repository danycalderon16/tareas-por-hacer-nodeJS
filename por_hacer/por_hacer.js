const fs = require('fs');

let listado_por_hacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listado_por_hacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const cargarDB = () => {

    try {
        listado_por_hacer = require('../db/data.json');
    } catch (error) {
        listado_por_hacer = [];
    }

}

const getListado = () => {
    cargarDB();
    return listado_por_hacer;
}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listado_por_hacer.push(porHacer);
    guardarDB();

    return porHacer;
}
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listado_por_hacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listado_por_hacer[index].completado = completado;
        guardarDB();
        return true;
    } else
        return false;

}

const borrar = (descripcion) => {
    cargarDB();
    // let index = listado_por_hacer.findIndex(tarea => tarea.descripcion === descripcion);
    // if (index >= 0) {
    //     delete listado_por_hacer[index];
    //     guardarDB();
    //     return true;
    // } else
    //     return false;
    let nuevo_listado = listado_por_hacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });

    if (listado_por_hacer.length === nuevo_listado.length)
        return false;
    else {
        listado_por_hacer = nuevo_listado;
        guardarDB();
        return true;
    }
}
module.exports = {
    crear,
    cargarDB,
    getListado,
    actualizar,
    borrar
}