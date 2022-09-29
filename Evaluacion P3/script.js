let nombre, contraseña;

let formulario = document.getElementById('form1');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombres').value;
    contraseña = document.getElementById('contraseña').value;
    ValidarData(nombre, contraseña)
    guardarlocarstorage(nombre, contraseña)
}

function ValidarData(nombre, contraseña){
    if(nombre.length==0 || contraseña.length==0){
        swal("Good job!", "You clicked the button!", "error");
    }
}

function ValidarData(nombre, contraseña){
    if(nombre.length==0 || contraseña.length==0){
        alert('error')
        swal("Error de informacion", 
        "ups...", 
        "error");
    }
}

function guardarlocarstorage(nombre, contraseña){
    localStorage.setItem('nombres', nombre);
    localStorage.setItem('contraseña', contraseña);
    listaData()
}

function listaData(){
    let nombre = localStorage.getItem('nombres');
    let contraseña = localStorage.getItem('contraseña');
    swal(nombre);
    swal(contraseña);
}