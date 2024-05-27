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
testEverySome();