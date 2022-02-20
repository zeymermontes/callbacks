let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // si inicia xmlhttp


const fetchData = (url_api) => { // se crea la funcion que pide la data
    return new Promise ((resolve, reject) =>{

        let xhttp = new XMLHttpRequest(); // se inicializa xmlhttp
        xhttp.open('GET', url_api, true); // se abre la conexion  a la api y se activa el asyncronismo
        xhttp.onreadystatechange = (() => { // se busca un cambio
            if(xhttp.readyState === 4 ){ // es estado cuatro es el ultimo y significa que finalizo la conecion van del 0 al 4

                (xhttp.status === 200) // if status === 200
                    ? resolve(JSON.parse(xhttp.responseText)) // if true  parsea el texto a JSON
                    : reject (new Error ('Error', url_api)) // if False regresa el error 
            }
        });
        xhttp.send(); 
    });
}

module.exports = fetchData;