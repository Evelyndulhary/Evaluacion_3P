let nombre, correo, contraseña, Confircontraseña, celular;

let formulario = document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombres1').value;
    correo = document.getElementById('correo1').value;
    contraseña = document.getElementById('password').value;
    Confircontraseña = document.getElementById('password1').value;
    celular = document.getElementById('celular').value;
    ValidarData(nombre, correo, contraseña, Confircontraseña, celular)
    guardarlocarstorage(nombre, correo, contraseña, Confircontraseña, celular)
}

function ValidarData(nombre, correo, contraseña, Confircontraseña, celular){
    if(nombre.length==0 || correo.length==0 || contraseña.length==0  || Confircontraseña.length==0 || celular.length==0){
        swal("Good job!", "You clicked the button!", "error");
    }
}

function ValidarData(nombre, correo, contraseña, Confircontraseña, celular){
    if(nombre.length==0 || correo.length==0 || contraseña.length==0  || Confircontraseña.length==0 || celular.length==0){
        alert('error')
        swal("Error de informacion", 
        "ups...", 
        "error");
    }
}

function guardarlocarstorage(nombre, correo, contraseña, Confircontraseña, celular){
    localStorage.setItem('nombres1', nombre);
    localStorage.setItem('correo1', correo);
    localStorage.setItem('password', contraseña);
    localStorage.setItem('password1', Confircontraseña)
    localStorage.setItem('celular', celular)
    listaData()
}

function listaData(){
    let nombres = localStorage.getItem('nombres1');
    let correos = localStorage.getItem('correo1');
    let contraseñas = localStorage.getItem('password');
    let Confircontraseñas = localStorage.getItem('password1');
    let celulars = localStorage.getItem('celular');
    swal(nombres);
    swal(correos);
    swal(contraseñas);
    swal(Confircontraseñas);
    swal(celulars);
}