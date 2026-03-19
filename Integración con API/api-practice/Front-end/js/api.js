async function queue(url, method, data = null) {
    //cabecera de la petición
  let headersList = {
  "Content-Type": "application/json",
  "Authorization": "Bearer token123"
};

  //petición al servidor
  let response = await fetch(url, {
 //tipo de petición
    method: method,
    body: data ? JSON.stringify(data) : null,
//agregar cabecera
    headers: headersList
  });

 //conversión de la respuesta en json
  return response.json();
}
    