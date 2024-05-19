
// home

let nav = document.getElementsByTagName("nav")[0]; // Access the first nav element

window.addEventListener("scroll", function() {
    if (window.scrollY > 30)
    {   
        nav.classList.add("fixed");
        nav.classList.remove("nav");
    }
    else
    {
        nav.classList.remove("fixed");
        nav.classList.add("nav");
    }
});


// Tableau pour stocker les informations des utilisateurs
// let user = [{ username:'sara' , password:'1234567' , email:'sara@gmail.com'}];

// function add(){
//     var usernamevalue = document.getElementById('signup-username').value;
//     var emailvalue = document.getElementById('signup-email').value;
//     var passvalue = document.getElementById('signup-password').value;
    
//     if(passvalue.length<5){
//         document.getElementById('s1').innerHTML = 'password must contains 5 characteres!!!'
        
//     }
//    var user = {};
//    user.username =  usernamevalue;
//    user.password = passvalue;
//    users.push(user);
//     console.log(users);
// }





// signup.js

let users = []; // Tableau pour stocker les données des utilisateurs


function add(event) {
    event.preventDefault(); 

    // Récupérer les valeurs des champs de saisie
    let username = document.getElementById("signup-username").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    let userData = {
        username: username,
        email: email,
        password: password
    };


    users.push(userData);

    // Afficher  sur la console
    console.log(users);

    // Réinitialiser les champs de saisie
    document.getElementById("signup-username").value = "";
    document.getElementById("signup-email").value = "";
    document.getElementById("signup-password").value = "";

    alert("User successfully registered!");
}

