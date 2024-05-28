// 연습문제 1.
//            2단 ~ 9단까지 구구단표 출력
// For문 버전
// While문 버전
console.log("For문 구구단")
for(let dan = 2; dan <= 9; dan++) {
    for(let i = 1; i < 10; i++) {
        console.log(dan + " * " + i + " = " + (dan*i));
    }
}




// 연습문제 2. 아래와 같이 출력하는 프로그램을 만들어 봅시다
/*
*****
****
***
**
*
*/
// For문 버전
// While문 버전


// for ... in : 객체의 속성 키를 순회(반복)한다
const obj = {
    name : "홍길동",
    age : 28,
    job : "도적"
}
for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
}
// for ... of : 배열의 개별 요소를 순회
const arr =[1, 2, 3, 4, 5];
for (let item of arr) {
    console.log(item);
}
          