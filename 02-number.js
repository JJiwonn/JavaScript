// Number
let n1 = 2024; // Literal (소스에 직접 입력)
let n2 = Number(2024); // Number 객체를 이용 생성
console.log(n1, n2);
console.log(typeof n1, typeof n2); // number

// 수치데이터 입력하는 방법
const hex = 0xFF0000; // 16진수 ->0x
const oct = 0o10;     // 8진수 -> 0o
const bin = 0b1101;   // 2진수 -> 0b

console.log(hex, oct, bin);

// Math 객체
console.log(Math.round(Math.PI));   // round : 반올림
console.log(Math.min(1,5,3,2,6,7),Math.max(1,5,3,2,6,7)); // 최솟값, 최댓값
console.log(Math.trunc(3.5789),Math.floor(3.5789)); // 버림, 버림

console.log("===================Casting================");
// ES는 주로 문자열로 전달되는 파라미터를 숫자 형태로 변환해야하는 경우가 많다
// 데이터형 변환이 많이 필요하다 -> parse계열 함수를 많이 사용한다.
console.log(parseInt("011"), "->", typeof parseInt("011"));
console.log(parseInt("011",2));        // "011" -> 2진수 정수형으로 분석
console.log(parseInt("0xFF0000",16));  // "0xFF0000" -> 16진수 정수형으로 분석
console.log(parseInt("1101",8));       // "1101" -> 8진수 정수형으로 분석

console.log(parseInt("123.456"),parseInt(123.456));   // 123.456 -> 정수형 123 분석
console.log(parseFloat("123.456"),); // 123.456 -> 실수형 123.456 분석

let v = parseInt("a123.456");  // 변환할 수 없는 형태의 데이터 변환 -> NaN (Not a Number)
console.log(v, "-> ", typeof v);
console.log(v + 2024); // NaN이 산술연산에 포함되어 있으면 결과값은 NaN이다
// 변수 혹은 연산 결과가 NaN인지 아래 식처럼 확인이 필요하다
console.log(isNaN(v + 2024));