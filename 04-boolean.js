// Boolean (ture or false)
// - 비교 연산의 결과
// - 논리 연산의 결과
// - 논리 조합 : AND(&&), OR(||), NOT(!)
let v1;
let v2 = null;
console.log(typeof v1, typeof v2); // v1 = undefined, v2 = object
// undefined = 비어있는 것은 맞으나 할당 자체가 되지 않은 것 -> 자바스크립트가 사용
// null = 비어있는 것은 맞으나 객체 자체는 의도적으로 할당이 되어 있는 것 -> 개발자가 직접 할당
console.log(v2, typeof v2, v2 == null); // null 체크하는 방법 -> 객체 == null

v2 = undefined;  // 개발자가 임의로 undefined 상태로 설정하기도 한다
console.log(v2, typeof v2, v2 == undefined); // undefined 체크하는 방법 -> 객체 == undefined

// == : 타입과 상관없이 값을 비교하여 나타낸다
// === : 타입과 값을 함께 비교하여 나타낸다

console.log(123 == "123"); // Number == Number (true)
console.log(123 === "123"); // Number === String (false)

// Number, String의 값이 있으면 true, 값이 없으면 false
console.log(Boolean("JavaScript")); 
console.log(Boolean(""));// 문자열 길이가 0이기에 값이 없어 false
console.log(Boolean(2024));
console.log(Boolean(0)); // 숫자가 0은 없다고 판단하여 false

// Short-Curcuit 선택 기법
// Front-End 선택적 렌더링
console.log(true && "Test"); 
// "Test"가 true인지 판별하고 true이면 true and true 로 판단하여 "Test"가 출력된다
console.log(false && "Test"); 
// false and true -> false

console.log(true || "Test"); // true or "Test"=(true) -> true
console.log(false || "Test"); // false or "Test"=(true) -> "Test"