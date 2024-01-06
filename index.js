// const { nombre, saludar } = require('./modulos/moduloA')

// // Esto es una constante traida desde moduloA
// console.log(nombre)
// // Esto es una funcion traida desde moduloA
// saludar()

const moment = require('moment');
const _ = require('lodash');
const fs = require('fs-extra');

// Usando Moment para manejar fechas y horas
const today = moment().format('YYYY-MM-DD');
console.log('Fecha actual:', today);

// Usando Lodash para manipulacion de textos
const greeting = _.upperFirst('hola mundo');
console.log('Saludo', greeting)

// Usando fs-extra para manipulacion de archivo
fs.writeFileSync('archivo.txt', 'Contenido de prueba')
console.log('Archivo creado con éxito.');