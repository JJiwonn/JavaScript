// timer 관련 함수
// 특정 시간이 흐른 후에 특정 기능을 수행하고자 할 때
// setTimeout(() => { }, milliseconds);
function timerTest() {
    console.log("3초후에 인사합니다.");
    setTimeout(() => {
        console.log("안녕!");
    }, 3000); // 3초
}
// timerTest();

// 특정 시간 간격마다 특정 함수 실행
// setInterval(() => { }, milliseconds);
function intervalTest() {
    let count = 10 ;
    console.log("10초 후에 타이머가 종료됩니다.");
    let timer = setInterval(() => { 
        console.log(count --);
        if (count < 0) clearInterval(timer); // 타이머 제거
        console.log("타이머가 종료됩니다.");
    }, 1000);
}
intervalTest();