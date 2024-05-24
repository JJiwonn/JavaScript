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


