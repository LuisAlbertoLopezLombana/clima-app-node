const axios = require('axios');
// OPEN WEATHER
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8ce8d836349f61dce3a5103fa3df485c&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
};