
function get_coordenadas() {
    //LE VOY A DECIR QUE ME TRAIGA LA LONGITUD Y LATITUD Y LO DEJE EN (POS) FUNCIONA COMO COOLBACK OTRA VEZ COMO FUNCTION
    const pos = navigator.geolocation.getCurrentPosition(function (pos) { 
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        get_pronostico(lat,lon)
    });
    console.log("LISTO");
}

async function get_pronostico(lat,lon) {
    //..de la pagina url y logeado con mi id y contraseña genero mi propio key y lo pego aquí
    const api_key = '9f763af8e2d326e98837dc21968fd2a6'
    //1.Creamos la URL con la ubicacion y tiempo actual y el API KEY
    const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${api_key}`
    //2.Creamos la consulta a la api de OpenWeather
    const resp = await fetch(url)
    // 3. Desempaquetamos la respuesta obtenida
    const data = await resp.json()
    //4. Obtenemos la temperatura
    const temperatura = data.main.temp - 273;
    //5.Dibujar la temperatura
    $('#pronostico').html("En este momento hay una temperatura de " + temperature + "°C")

    console.log(data);
}

get_coordenadas(); 

