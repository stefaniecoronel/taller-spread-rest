const userForm = document.getElementById('form-user');
const userList = document.getElementById('userList');
let users = []

userForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    const newUser = { name, email, age };

    users.push(...[newUser]);

    showUsers();

    userForm.reset();
});

function showUsers (){
    userList.innerHTML = '';

    for (const { name, email, age } of users) {
        const li = document.createElement('li'); 
        li.className = 'list-group-item'; 
        li.textContent = `Nombre: ${name}, Email: ${email}, Edad: ${age}`; 
        userList.appendChild(li); 
    }
}


const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');
let products = []

productForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const category = document.getElementById('productCategory').value;

    const newProduct = { nombre, price, category };

    products.push(...[newProduct]);

    showProducts();

    productForm.reset();
});

function showProducts (){
    productList.innerHTML = '';

    for (const { nombre, price, category } of products) {
        const li = document.createElement('li'); 
        li.className = 'list-product-item'; 
        li.textContent = `Nombre: ${nombre}, Email: ${price}, Edad: ${category}`; 
        productList.appendChild(li); 
    }
}
