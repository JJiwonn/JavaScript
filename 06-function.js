// 함수 선언문
function sum(a,b) {  // function 함수이름(매개변수목록) -> 선언
    return a + b;
}
console.log(sum(10,20)); // -> 호출 

// 함수 표현식 : 익명 함수라고도 부른다
// 함수도 객체다 (1급 시민이다)
//          => 다른 객체들과 동등한 권리와 지위를 가진다
//          => 변수에 할당될 수 있으며 다른 함수의 매개변수로 전달될 수 있다
const asum = function(a, b) {
    console.log(typeof a, typeof b);
    return a + b;
}
console.log(typeof asum);
console.log(asum(10,20));

// 함수의 매개변수의 이해
// ES의 함수는 선언부에 선언된 매개변수의 개수와 맞지 않게 호출해도 괜찮다 (NaN도 가능)
console.log(asum());

// 매개변수가 없는 함수
function getNumberTotal(){
    // ES 특성상, 전달되는 모든 매개변수는 arguments 함수 객체에 모두 전달된다
    // console.log("arguments:", arguments);
    // 전달받은 매개변수 전체를 합산
    let result = 0;

    for (let i =0; i <arguments.length; i++) {
        if (typeof arguments[i] === "number") { // 매개변수의 타입이 숫자일때만 합산한다는 조건
        result += arguments[i];
        }
    }
    return result;
}
console.log(getNumberTotal(1,2,3,4,5));
console.log(getNumberTotal(1,2,"3",4,5));

// <콜백 함수>
// 함수는 객체 -> 변수에 할당되거나 다른 함수의 매개변수로 전달될 수 있다.
function calculator (a, b, func) { // func = 계산식 함수
    if (typeof func === "function") {
        console.log(func (a, b));
    }else {
        console.log("어쩌라고")
    }
}

calculator (10, 20); 
// (10,20,func) func에는 값이 할당되지 않아 undefined으로 출력된다
// 조건식에 맞춰 undefined은 함수가 아니라서 "어쩌라고"가 출력된다
calculator (10, 20, function(v1, v2) {
    return v1 + v2;
});
// 함수에 함수를 전달해주는 방식
// 함수에서 전달받은 함수를 거꾸로 다시 호출하는 방식


// <함수 보충>
// 화살표 표기법 : 매개변수 목록 => 구현 내용
console.log("=====================화살표 표기법=======================")

// 1. 매개변수가 없고 리턴이 있다
const f1 = function() {
    return "hello";
}  
console.log(f1());

// arrow를 사용하여 출력
const f1_arrow = () => "hello"; 
console.log(f1_arrow());

// 2. 매개변수가 있고 리턴이 있다
const f2 = function(name) {
    return name;
}   
console.log(f2("홍길동"));

// arrow를 사용하여 출력
const f2_arrow = name => "hello, " + name;
console.log(f2_arrow("김지원"))

// 3. 매개변수가 있고 리턴이 있는 연산식
const f3 = function(a, b) {
    return a + b;
}
console.log(f3(10,20));

// arrow를 사용하여 출력
const f3_arrow = (a, b) => {  
    // 특정 여러개의 로직을 수행할 때는 블록({})을 잡을 수 있다
    // 만약 블록이 잡히면 return 문을 생략할 수 없다
    console.log("화살표 함수");
    return a + b;
};
console.log(f3_arrow(10,20))

// 위에서 배운 콜백 함수와 화살표 함수를 합친 계산식 정의
calculator(10, 20, (v1, v2) => v1 + v2);
calculator(10, 20, (v1, v2) => v1 * v2);

// 콜백 함수 활용 -> Array 추가 강의