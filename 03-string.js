// String
const s1 = "Modern JavaScript and Java"; // 리터럴 생성
const s2 = String("Modern JavaScript and Java"); // 타입 함수 이용 생성

console.log(typeof s1, typeof s2);

//  .length : 문자열 길이 확인하는 속성
console.log("String: ", s1, "= length:", s1.length);

// 문자열 추출 메서드
console.log(s1.charAt(7));      // 특정 인덱스에 위치한 문자 뽑아낼 때는 charAt를 사용한다
// ES는 문자열도 배열처럼 활용한다
console.log(s1[7]);
console.log(s1.substr(7,10));    // 7번 인덱스로부터 10개의 문자를 추출한다 (substr은 이젠 사용안함)
console.log(s1.substring(7,17)); // 7번 인덱스로부터 17번 인덱스까지
console.log(s1.substring(7,));   // 7번인덱스로부터 끝까지

// 문자열 검색
let position; // position이라는 공간을 먼저 잡아준다
position = s1.indexOf("Java");
console.log("1st search:", position);
position += 4;
position = s1.indexOf("Java",position); // 파라미터의 이름은 검색어, 검색 시작위치 순서대로
console.log("2nd search:", position);

console.log("No keyword:",s1.indexOf("java")); // -1(찾는 검색어 없을때)
console.log("lastIndexOf:", s1.lastIndexOf("Script")); // 검색방향이 뒤에서 시작

// 문자열 치환
console.log(s1.replace("JavaScript", "JS")); // 검색어, 바꿀문자열
console.log(s1); // 내부 데이터를 변경하는 것이 아닌 변경된 문자열을 새롭게 생성하여 반환하는것
// 변경 데이터를 뒤에서도 사용하고자 한다면 재할당해야한다
const s1_changed = s1.replace("JavaScript", "JS"); // s1의 JavaScript를 JS로 치환한 결과를 재할당
console.log(s1,",",s1_changed);

// 화이트스페이스(공백, 탭, 개행 등) 제거
console.log("                        Hello           ");
console.log("                        Hello           ".trim()); // 화이트스페이스 제거

// ES string 보충
// 이스케이프 : 키보드로 입력 불가하거나 특수한 의미를 가지고 있는 문자들(\로 표시한다)
// \n : 개행
// \t : 탭
// \' : ' -> 문자열로 인식하는 소따옴표가 아닌 특수문자임을 명시하기 위함것
// \" : " -> 문자열로 인식하는 쌍따옴표가 아닌 특수문자임을 명시하기 위함것
// \` : 백틱(ES6)
// \$ : 템플릿 문자(ES6) -> 변수명이나 연산식을 문자열 내부에 넣을 때 $를 사용하는데 아님을 명시하기 위함것

let message = 'He said,"Hello"';
console.log(message);
message = "He said,\"Hello\"";
console.log(message);

message = "I'm going";
console.log(message);
message = 'I\'m going';
console.log(message);

// 여러 줄 문자열
message = "예전에는 \n" +
"여러줄 문자열을 만드는 것이 \n" +
"쉽지 않았습니다.";
console.log(message);
message = "예전에는 \n여러줄 문자열을 만드는 것이 \n쉽지 않았습니다.";
console.log(message);

message =`하지만 ES6이상에서는
아주 손쉽게
여러 줄 문자열을 만들 수 있습니다.`;
console.log(message);

console.log("===============Template 문자열==============")
let temp = 35;
message = "현재 실내 온도는 " + temp +"도 입니다.";
console.log(message);

// ${변수명} or ${연산식} -> 실행 결과가 문자열에 포함된다
message = `현재 실내 온도는 ${temp+1}도 입니다.`;
console.log(message);