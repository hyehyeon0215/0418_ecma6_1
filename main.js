// const info = "엄청 중요한 정보";

//const로 선언된 변수는 덮어쓰는 것이 불가능

//배열과 객체는 참조형자료이기 때문에, 밑에서 다시 작성할 경우 재선언을 하는 것이 아니라 참조 값을 변경하는 것이기 때문에 예외 상황으로 적용이 가능합니다.


// const student = {
//     name: "david",
//     age: 20
// }

// student.name = "오은택"
// console.log(student);

/*
-호이스팅-
지역 변수로 선언된 변수가 최상위 전역변수로 끌어져 올라가는 '것처럼 보이는' 현상
info를 선언하지 않고 출력한 뒤 선언했을 때 undefined 값이 나옴 (끌어져 올라갔으면 test가 출력됐어야 함)
undefined도 자료형의 값으로, 오류 현상이긴 하지만 값이 존재함 (23-24)
*/

// console.log(info);
// var info = "test";

// 에크마 6 문법에서 호이스팅 방지를 위해서 let이라는 변수 선언을 만듦

// console.log(info);
// let info = "test";

/* undefiend가 아닌 Uncaught 오류를 뱉음
let은 정상적으로 에러 상황을 콘솔로 찍어 주고 있지만 호이스팅을 없애는 것이 아님
데드존을 만들어서 호이스팅의 결과를 데드존으로 설정해서 극복한 것 (28-29) */

// function test() {
//     var local = "지역변수";
// }
// console.log(local);

// if (true) {
//     var local1 = "일반 코드 블록 안에서의 지역 변수";
// }
// console.log(local1);

/* 일반 함수의 코드 블록에서는 지역 변수 scope가 유지됩니다
즉 구역 밖에서는 변수가 정의 되지 않습니다

하지만 일반 조건문이나 반복문 같은 코드 블록 안에서는 var로 선언된 지역 변수는 호이스팅으로 전역화됩니다. */

// if (true) {
//     let local1 = "일반 코드 블록 안에서의 지역 변수";
// }
// console.log(local1);

// let으로 선언할 시 호이스팅이 극복되어 정상적인 scope를 가집니다



// var btns = document.querySelectorAll("button");

// for (let i = 0; i < btns.length; i++) {

//     (function(){
//         btns[i].addEventListener("click", function(){
//             console.log(i);
//         })
//     })(i)

//     // btns[i].addEventListener("click", function(){
//     //     console.log(i);
//     // })
// }


// 반복문 코드블록 안에 있는 변수 var가 지역 변수임에도 불구하고
// 반복문이기 때문에 호이스팅이 일어나서 i 값이 반복문 안에서 끝난 후 사라지지 않고 마지막
// 카운트 3의 값이 전역변수로 등록되어버린 현상입니다.

let btns = document.querySelectorAll("button");

for (let i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function(){
    console.log(i);
    })
}