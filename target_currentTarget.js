var plus = function(num1, num2) {
    return num1 + num2;
}

console.log(plus(2, 3));


let plus1 = (num1, num2) => {
    return num1 + num2;
}

console.log(plus1(2, 3));



let plus2 = (num1, num2) => num1 + num2;
console.log(plus2(2,3));



// 

// target vs currentTarget


let green = document.querySelector(".green");


green.addEventListener("click", (e) => {
    console.log("currentTarget: ", e.currentTarget);
    console.log("Target: ", e.target);
})

// 이벤트 리스너가 달린 요소 - 커런트타겟
// 화면상에서 이벤트가 발생한 요소 - 타겟