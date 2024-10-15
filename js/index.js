
const userForm = document.getElementById ('form-user');
const productForm = document.getElementById ('productForm');

userForm.addEventListener('submit', function(){
    event.preventDefault ()
    if (infoUsuarios===undefined){
        let infoUsuarios=[];
    }
    else {
        infoUsuarios=infoUsuarios
    }
    usuario = [{ name: document.getElementById ('name').value, email: document.getElementById ('email').value, age: document.getElementById ('age').value}]
    // const userName = document.getElementById ('name')
    // const userEmail = document.getElementById ('email')
    // const userAge = document.getElementById ('age')

    console.log(usuario)

    infoUsuarios.push(usuario)

    console.log(infoUsuarios)


})