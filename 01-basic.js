// 한 줄 주석
/*
    여러 줄 주석
    : 주석의 사용방법은 C와 동일하다
*/

// Console 객체 : 출력 장치에 log level별로 log 출력하는 객체이다
// FATAL - ERROR(error) - WARN(warn) - NORMAL(log, info) , DEBUG(debug)
console.info("정보 메시지 출력")
console.debug("디버그 메시지 출력")
console.log("일반 메시지")

console.warn("경고 메시지")
console.error("에러 메시지")

// 출력할 내용들을 그냥 ,로 구분해서 나열해주면 된다
console.log("Sting", 2024, true);

console.log(process.version,process.platform);

// ES(JavaScript)는 객체 기반 언어이다
// 객체 : 여러 개의 데이터(속성) + 데이터를 다룰 수 있는 기능(메서드)
//          .(점)으로 내부 속성과 메서드에 접근할 수 있다
console.log(Math.PI); // 속성
console.log(Math.max(1,3,2,4,6)); // (객체.메서드명)

console.log("---------------------"); 
// ES의 변수 할당방법
// var : ES6이전 -> 변수의 범위 등이 일관성이 없기에
// let(가변데이터:mutable), const(불변데이터:immutable, 상수)를 사용한다
var testVar; // 선언부
testVar = "var"; // 할당부
let testLet;
testLet = "let";
/*const testConst; 
testConst = "const"; 
이렇게 쓰면 에러가 난다 
왜냐 const가 불변데이터이기 때문에 선언과 동시에 데이터를 할당해줘야한다 */

const testConst = "const";

console.log("var, let, const:", testVar, testLet, testConst);

// 데이터 재할당
testVar = "var changed";
testLet = "let changed";
//testConst = "const changed"; const는 재할당 불가

//ES는 
// -> 데이터가 할당될 때 타입이 결정된다
// -> 데이터 타입과 무관하게 모든 객체가 할당될 수 있다
let v = "This is String";
console.log(v); // This is String 할당되는 순간 v의 타입이 결정된다
// 특정 연산 작업 수행 이전에 데이터 타입을 확인해야 할 필요가 있을 수 있다
// -> 이럴 땐 typeof 연산자를 사용한다
v = 2024;
console.log(v, "->", typeof v);

v = 10 > 8;
console.log("10 > 8 ?", v, "->", typeof v); // 비교연산자 값이기에 boolean
