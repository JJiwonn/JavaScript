// Date : 날짜, 시간을 다루는 내장 객체
let now = new Date(); // 현재 시간
console.log(now);

let time = new Date(2024, 5 - 1, 27); // 년, 월(0부터 시작한다), 일
console.log(time);

time = new Date(2012, 8, 24, 13, 30, 0); // 년, 월(9월을 나타냄), 일, 시, 분, 초
console.log(time);

// 년, 월, 일, 요일, 시, 분, 초, 밀리세컨드
// getter와 setter 존재
console.log("현재시간: ", now);
console.log("년도: ", now.getFullYear());
console.log("월: ", now.getMonth() + 1);
console.log("일: ", now.getDate());
console.log("요일: ", now.getDay()); // 일요일 : 0 따라서 월요일이기에 출력값 1 확인
console.log("시: ", now.getHours());
console.log("분: ", now.getMinutes());
console.log("초: ", now.getSeconds());
console.log("밀리세컨드: ", now.getMilliseconds());