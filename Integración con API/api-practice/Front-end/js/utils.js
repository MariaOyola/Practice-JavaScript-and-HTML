//cargue de tabla

function loadData(table,registers){
clearTable(table);
if(Array.isArray(registers)){
registers.forEach(register=>{
    loadTable(table,register);
})
}else{
    loadTable(table,registers);
}

}

function loadTable(table, data) {
    var register = document.createElement("tr");

    // Detecta si es producto
    if (data.title && data.price) {
        register.innerHTML = `
            <td>${data.id}</td>
            <td>${data.title}</td>
            <td>${data.price}</td>
        `;
    }

    // Detecta si es usuario
    else if (data.firstName && data.email) {
        register.innerHTML = `
            <td>${data.id}</td>
            <td>${data.firstName}</td>
            <td>${data.lastName}</td>
            <td>${data.email}</td>
        `;
    }

    table.appendChild(register);
}

function clearTable(table){
    table.innerHTML="";

}