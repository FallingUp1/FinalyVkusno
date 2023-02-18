"use script"

var Name = JSON.parse(localStorage.getItem('Name'));

let ButtonBack = document.querySelector("#bt1");

let ButtonComent = document.querySelector("#bt2");

let ComentText = document.querySelector("#Commenttext");

let counter = 1

ButtonBack.addEventListener('click',Back);

ButtonComent.addEventListener('click',comment)



function Back(){
document.location.href = "main.html";
}

function comment(){
    let text = ComentText.value;
    
    let div = document.createElement('div');
    let div2 = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');
    const image = document.createElement('img');
    
    
    div.className = "msg";
    div.id = "msg" + counter;

    div2.className = "mpg";
    div2.id = "mpg" + counter;
    
    h1.className = "h";
    image.className = "img";
    p.className = "p";

    h1.innerHTML = Name;
    p.innerHTML = text;

    document.body.append(div);
   
    image.src  = 'AdminPicture.png'

    document.querySelector('#msg' + counter).appendChild(div2)
    document.querySelector('#msg' + counter).appendChild(image)
    document.querySelector('#msg' + counter).appendChild(h1)
    document.querySelector('#mpg' + counter).appendChild(p)

    counter++

}
