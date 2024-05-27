console.log("============배열의 전개 연산============");

let arr1 =["홍길동", "장길산"];
let arr2 =["임꺽정", "전우치"];
console.log(arr1, arr2);

// 두개의 배열을 합치고 싶을 때
let combined = [];
// 첫번째 : 기존 방식으로 합치기
combined = [arr1[0], arr1[1], arr2[0], arr2[1]];
console.log(combined);
// 첫번재 방법은 내부데이터의 이름을 다 알고있어야 사용가능하다
// 하지만 넘어오는 데이터를 알지 못하기에 사용이 어렵다

// 첫번째 방법보다 사용해야 하는 방법
// 기존 cancat
combined = arr1.concat(arr2);
console.log(combined);

// 빈 배열에 cancat으로 추가하는 방식
combined = [].concat(arr1, arr2);
console.log(combined);

// ES Next 방식 : 전개 연산자 활용방법
combined = [...arr1, ...arr2] // arr1과 arr2을 끄집어 낸 후에 다시 묶는다는 느낌
console.log(combined);

console.log("============배열의 전개============");

console.log("원본 배열: ", combined);

// 배열 전개
let[first,
    second,
    third = "empty"/*= 기본값*/,
    ...others/*= 나머지*/] = arr1;
console.log(first, second, third, others);

[first, second, third = "empty", ... others] = combined
console.log(first, second, third, others);

console.log("============객체 전개 연산============");
let obj1 = {one: 1, two: 2, other: 0};
let obj2 = {three: 3, four: 4, other: -1};
console.log("obj1: ", obj1);
console.log("obj2: ", obj2);

// 기존 방식 : 방법 1(추천하지않음)
combined = {
    one: obj1.one,
    two: obj1.two,
    three: obj2.three,
    four: obj2.four,
    other: obj1.other
}
console.log("기존방식 1: ", combined);

// 기존 방식 : 방법 2
combined = Object.assign({}, obj1, obj2);
console.log("기존방식 2-1: ", combined);

combined = Object.assign({}, obj2, obj1);
console.log("기존방식 2-2: ", combined);

combined = {
    ...obj1, // obj1의 모든 속성을 전개
    ...obj2  // obj2의모든 속성을 전개
} // 전개 순서에 유의하자
console.log("전개연산자활용: ", combined);

// 특성 속성 제거
delete combined.other;  // other 속성 제거
console.log("other 속성 제거: ", combined);

// 객체 속성 전개
let {one,two,five, ...rest}= combined;
console.log(one,two,five,rest);