let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // si inicia xmlhttp
let API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) { // se crea la funcion que pide la data
    let xhttp = new XMLHttpRequest(); // se inicializa xmlhttp
    xhttp.open('GET', url_api, true); // se abre la conexion  a la api y se activa el asyncronismo
    xhttp.onreadystatechange = function (event){  // se busca un cambio
        if(xhttp.readyState === 4 ){ // es estado cuatro es el ultimo y significa que finalizo la conecion van del 0 al 4
            if(xhttp.status === 200){ // se busca qeu regrese estatus 200 "succes"
                callback(null, JSON.parse(xhttp.responseText)); // se llama al callback y el primer parametro es el error "null" , se parsea el archivo de texto que regresa la api a un JSON
            }else{ // en caso de error se crea el error y se regreeaa el error 
                const error = new Error ('Error' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send(); 
}

fetchData(API, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2){
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
} );   