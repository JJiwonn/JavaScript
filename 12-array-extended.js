// forEach : 배열 내부 요소들을 하나씩 구출, 콜백함수로 전달
function testForEach() {
    console.log("============ testForEach ============");
    let source = ["Apple", "Banana", "Carot", "Durian"];

    console.log("============ 요소들만 전달");
    source.forEach(item =>{
        console.log(item)
    })

    console.log("============ 요소와 함께 인덱스 전달");
    source.forEach((item, index) => { // 콜백전체 매개변수임을 나타내기위해 () 사용해서 묶어줌
        console.log(`${index} -> ${item}`);
    })

    console.log("============ 요소, 인덱스와 함께 배열 자체도 전달");
    source.forEach((item, index, arr) => {
        console.log(`${index} -> ${item}`, arr);
    })
}
//  testForEach();

function testEverySome() {
    let data = [
        {name: "홍길동", age: 28},
        {name: "장길산", age: 35},
        {name: "전우치", age: 25},
    ];
    console.log("원본 데이터: ", data);

    // data 내부의 모든 객체의 나이가 25세를 초과하는지 검증해보자
    let result = data.every(obj => {
        return obj.age > 25     // 검증 로직
    });
    console.log("모든 인물의 나이가 25세 초과?: ", result)

    // data 내부의 일부 객체의 나이가 25세를 초과하는지 검증해보자
    result = data.some(obj => obj.age > 25); // 이렇게 쓰일수있는데 여러 결과값은 리턴할수없음
    console.log("일부 인물의 나이가 25세 초과?: ", result)
}
// testEverySome(); 

// 데이터처리 파이프라인
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const source = [12, 4, 19, 33, 86];
// map -> filter -> sort -> reduce
function testMap() {
    console.log("============ Map");
    // numbers 배열의 모든 요소를 2배로 만들자
    // 기존방식 구현
    let multiply = [];
    for (let i =0; i < numbers.length; i++) {
        multiply.push(numbers[i] * 2);
    }
    console.log("기존방식 * 2: ", multiply)
    // Map - 배열 형태는 그대로, 내부 요소 조작(변경)
    let result = numbers.map(item => item * 2);
    console.log("원본배열: ", numbers);
    console.log("원본배열 * 2: ", result);
}
// testMap();

function testFilter() {
    console.log("==============Filter")
    // numbers 배열 요소 중 짝수만 필터링
    // Filter = 내부 요소는 그대로 , 조건을 만족하는 요소만 뽑아서 새배열을 생성
    let result = numbers.filter(item => item % 2 == 0);
    console.log("원본데이터: ", numbers);
    console.log("필터링데이터: ", result);
}
// testFilter();

function testReduce() {
    console.log("==============Reduce");
    console.log("원본배열: ", source);
    // source 배열 내부요소 모두 합산
    let sum = source.reduce((acc, value, index, arr) => {
        console.log(`이전 값은 ${acc}`);
        console.log(`${arr}의 ${index}번째 요소는 ${value}입니다.`);
        return acc + value; // 다음번 콜백의 acc 매개변수로 전달하는 값이다
    }, 0);

    console.log("합산결과: ", sum);
}
// testReduce();

function testReduce2() {
    // 반복되는 모든 것에는 reduce 함수를 적용할 수 있다
    // map 함수의 기능을 reduce 함수로 구현해보자
    // testMap 함수의 기능을 reduce 함수로 작성해보자 : 요소값 * 2
    console.log("원본배열: ", numbers);
    let result = numbers.reduce((acc, value) => {
        console.log(`callback params(acc: ${acc}, value: ${value})`)
        acc.push(value * 2);
        console.log(`   -> ${acc}`);

        return acc;
    }, []);
    console.log("요소 두배: ", result);
}
// testReduce2();

function testReduce3() {
    // reduce 함수를 이용하여 filter 함수 구현해보기
    // reduce 함수를 이용하여 numbers 배열의 짝수 배열을 만들어보기
    console.log("원본데이터: ", numbers);
    let result = numbers.reduce((acc, value) => {
        if (value % 2 == 0) {
            acc.push(value);
        }
        return acc;
    }, []); // 배열을 리턴해줘야할거라서 빈배열을 초기값으로 설정
    console.log("필터링: ", result);
}
// testReduce3();

const data = [
    {name: '철수', kor: 85, eng: 92, math: 88},
    {name: '영희', kor: 70, eng: 74, math: 95},
    {name: '지원', kor: 91, eng: 89, math: 85},
    {name: '예성', kor: 65, eng: 70, math: 72},
    {name: '윤정', kor: 80, eng: 90, math: 91}
];

function testDataPipeline() {
    console.log("==============map, filter, sort, reduce 테스트")
    console.log("원본데이터: ", data);

    //map 함수 이용 -> total 파생변수 생성하자
    const studentWithTotal = data.map(student => 
        ({ // 그냥 {} 이렇게 하면 코드로 파악하기 때문에 값임을 명시하기 위해 ({}) 이렇게 표시해줘야함
        ...student,
        total: student.kor + student.eng + student.math
    }))
    console.log("map: ", studentWithTotal)

    // filter 함수 이용 -> total >= 240만 추출
    const filterStudents = studentWithTotal.filter(student => student.total >= 240);
    console.log("총점240점이상: ", filterStudents);

    // sort 함수 이용 -> 총점 기준으로 정렬
    // const sortedStudents = filterStudents.sort((a, b) => a.total - b.total); // ASC
    const sortedStudents = filterStudents.sort((a, b) => b.total - a.total); // DESC
    console.log("총점기준 정렬: ", sortedStudents);

    // reduce 함수 이용 -> 학생들의 총점 평균 추출
    const totalSum = sortedStudents.reduce((acc, student) => acc + student.total, 0);
    console.log("총점 240점이상 학생들의 총점: ", totalSum);
    const avgTotalScore = totalSum / sortedStudents.length;
    console.log("데이터 파이프라인 구축: ", avgTotalScore);
}
testDataPipeline();
