let btnPlus = document.querySelector(".btnPlus");
let btnMinus = document.querySelector(".btnMinus");
let clear = document.querySelector(".clear");
let text = document.querySelector("h1");
let num = 0;


btnPlus.addEventListener("click", function(e){
    e.preventDefault();
    num++;
    text.innerText = num;
})

btnMinus.addEventListener("click", function(e){
    e.preventDefault();
    num--;
    text.innerText = num;
})

clear.addEventListener("click", function(e){
    e.preventDefault();
    num--;
    text.innerText = 0;
})

let name = "홍길동";
console.log("안녕하세요 " + name + " 님");
console.log(`안녕하세요 ${name}님`);



let btnLeft = document.querySelector(".btnLeft");
let btnRight = document.querySelector(".btnRight");
let box = document.querySelector("#box");
let num1 = 0;
let deg = 45;

btnLeft.addEventListener("click", function(e){
    e.preventDefault();
    num1--;
    box.style.transform = `rotate(${deg * num1}deg)`;
});

btnRight.addEventListener("click", function(e){
    e.preventDefault();
    num1++;
    box.style.transform = `rotate(${deg * num1}deg)`
});

let btnInput = document.querySelector(".input");



btnInput.addEventListener("click", function(e){
    e.preventDefault();
    let txt = document.querySelector("#txt").value;
    box.style.transform = `skew(${txt}deg)`;
});