"use script"

let users = [
    {
        "pl" : "admin",
        "lg" : "Admin1",
        "pw" : "1234",
        "name" : "Sugoma"
    },
    {
        "pl" : "user",
        "lg" : "User1",
        "pw" : "1234",
        "name" : "Stepan"
    }
    
];  

localStorage.setItem('users', JSON.stringify(users));


let Button = document.querySelector("#LoginWindow")
Button.addEventListener('click',Back);

function Back(){
document.location.href = "index.html";
};

let loginS = document.querySelector("#LoginPole");
let passwordS = document.querySelector("#PasswordPole");
let LoginBt = document.querySelector("#PopUpLogin");

LoginBt.addEventListener('click',function(){
    let Login = loginS.value;
    localStorage.setItem('Name', JSON.stringify(Login));
    let Password = passwordS.value;

    for(const user of users){
        if (Login != " " && Password !=" "){
                if(user.lg == Login && user.pw == Password){
                    role(user.pl)
                    LoginMessage.innerHTML = ""
                    break;
                }
                else if(user.lg != Login / user.pw != Password){
                    console.log("Нет такого")
                }
            }
            else if (Login == " " || Password ==" "){
                console.log("Пустые поля")
            }
            }
})

function role(role){
    if(role == "user")
    {
        document.location.href = "user.html";
    }
    else if (role == "admin")
    {
        document.location.href = "admin.html";
    }
}

