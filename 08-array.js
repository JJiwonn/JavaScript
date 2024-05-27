//배열 생성 방법 첫번째 : new 키워드를 생성한다
console.log("==============배열생성 방법==============")
const v1 = new Array(10); // 10개짜리 배열
const v2 = new Array();   // 빈 배열
const v3 = new Array(2024, "String", true); // 초기값이 있을 때, 어떤 객체들(함수포함) 다 들어간다

console.log(v1, v1.length, typeof v1);
console.log(v2, v2.length, typeof v2);
console.log(v3, v3.length, typeof v3);

// 배열의 생성 두번째 : 리터럴을 생성한다 -> 추천방법
const v4 =[];
const v5 = ["red", "green", "blue", "yellow"];

console.log(v4, v4.length);
console.log(v5, v5.length);

// ES 특성상 변수가 참조하는 객체의 Type 체크가 필요하다
console.log(typeof v5); // object로 확인되는데 이것이 이제 어떤 Type인지 확인해야한다

// 주로 Array 판별 함수를 이용, 배열 여부를 판단
console.log("is v5 Array?", Array.isArray(v5)); 
// Array Type인가? true로 확인 -> 이렇게 에러 없음을 확인해야한다

// ES의 경우 객체 속성도 배열(맵)처럼 사용할 수 있다
const person = {
    name : "김지원",
    age : 30
};
console.log(person.name, person.age);
console.log(person['name'], person['age']); // 객체의 속성을 배열처럼 사용가능하다

// ES 배열은 인덱스 범위를 엄격하게 체크하지 않는다
// 인덱스 범위를 벗어난 접근도 허용한다

const v6 = [];
console.log(v6, v6.length);
v6[10] = 2024;
console.log(v6,v6.length); // 11개로 확인
// ㄴv6 = <10 empty items>, 2024 -> 빈 배열10개, [2024] 배열 1개로 총 11개이다


console.log("============== 주요 메서드 ==============");
// 합치기 : concat
const veges = ['무', '배추', '쪽파'];
console.log(veges, veges.length);
const sources = ['소금', '고춧가루', '새우젓'];
console.log(sources, sources.length);

const ingr = veges.concat(sources);
console.log(ingr, ingr.length);

// join : 배열 내부의 요소(아이템)를 한 문장으로 합친다
console.log(ingr, "-> 김장재료: "+ ingr.join(", ")); // (", ")(콤마)를 기준으로 끄집어낸다

console.log("============== push, pop -> Stack ==============");
// push, pop -> Stack 자료형처럼 활용이 가능하다
// Stack : Last Input First Output(LIFO 자료형)
let fruits = [];
console.log(fruits.push("Apple"), fruits);
console.log(fruits.push("Banana"), fruits);
console.log(fruits.push("Carot"), fruits);
// 인출 : pop -> 배열의 뒤에서
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);
console.log(fruits.pop(), fruits);

console.log("============== push, shift -> queue ==============");
// push, shift -> queue 자료형처럼 활용이 가능하다
// queue : First Input First Output(FIFO 자료형)
console.log(fruits);
console.log(fruits.push("Apple"), fruits);
console.log(fruits.push("Banana"), fruits);
console.log(fruits.push("Carot"), fruits);
// shift : 배열의 첫번째 요소를 인출하여 삭제한다
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);
console.log(fruits.shift(), fruits);

console.log("============== splice ==============");
// splice : 배열 요소 인출 후 삭제하거나 추가를 동시에 할 수 있는 메서드
fruits = ["Apple", "Banana", "Carot", "Durian"];
console.log(fruits);
// 조건인수가 1개이면 시작인덱스에서 끝까지 추출한다
console.log(fruits.splice(2)); // 삭제한 결과값을 보여준다
console.log(fruits); // 삭제 후 남은 결과값만 보여준다

fruits = ["Apple", "Banana", "Carot", "Durian"];
console.log(fruits);
// 조건 인수가 2개이면 시작인덱스로부터 조건갯수만큼 추출한다
console.log(fruits.splice(2, 1));
console.log(fruits);

fruits = ["Apple", "Banana", "Carot", "Durian"];
console.log(fruits);
// 조건 인수가 3개이면 시작인덱스로부터 조건갯수만큼 추출하고 추가할 요소를 입력하여 추출한다
console.log(fruits.splice(2, 1, "kiwi", "Mango"));
console.log(fruits);

// reverse : 순서 반전시키기
fruits = ["Apple", "Banana", "Carot", "Durian"];
console.log(fruits);
fruits.reverse();
console.log(fruits);

// slice : 배열의 요소를 추출하여 새로운 배열 생성
console.log(fruits);
let slice = fruits.slice(1, 2);
console.log(slice);
console.log(fruits);

// split : 구분자를 기준으로 문자열을 분리하여 배열을 생성
const str = "JavaScript is something strange than other languages";
let chunks = str.split(" ");
console.log(chunks);

console.log("=============sort=============");
fruits = ["Carot", "Durian", "Apple", "Mango", "kiwi", "Banana"];
console.log("원본배열: ", fruits);
fruits.sort(); // 정렬순서 : 오름차순
console.log("오름차순정렬: ", fruits);

// 정렬 규칙을 정하고자 할 때 : sort 메서드를 매개변수로 전달해줘야한다
fruits = ["Carot", "Durian", "Apple", "Mango", "kiwi", "Banana"];
console.log("원본배열: ", fruits);

// 역순정렬 정의
fruits.sort((v1, v2) => {
    // 정렬 키 함수 : 두개 요소의 선후 관계를 결정해줘야 한다
    // 리턴값이
    //         음수일 경우 v1이 앞에 온다
    //         양수일 경우 v1이 뒤에 온다 (v2가 앞에 온다)
    //         0일 경우 순서를 바꾸지 않는다 (순위가 같다)
        if(v1 < v2) return 1;
        if(v1 > v2) return -1;
        if(v1 == v2) return 0;
});
console.log(fruits);

// 문자열 길이로 소팅
fruits.sort((v1, v2) => {
    return v1.length - v2.length;
});
console.log("문자열 길이로  소팅: ", fruits);