const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(coords.lat, coords.lng)
        return `El clima ${coords.dir} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }
};

getInfo(argv.direccion).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

// lugar.getLugarLatLng(argv.direccion).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });



// clima.getClima(35, 139).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });