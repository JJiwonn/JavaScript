// 객체 생성 방법 첫번째
console.log("=======객체생성 방법 첫번째=========")
const person = new Object(); // 인스턴스(객체) 생성

console.log(person); // 출력하면 {} 이것만 표시되는데 이건 객체가 생성됐다는 의미

// 동적으로 속성(프로퍼티, 메서드) 동적으로 추가해준다
person.name = "김지원";
person.age = 30;
person.showInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`); // this는 현재 인스턴스, 현재 객체를 의미
}
console.log(person);
person.showInfo();

console.log("=======객체생성 방법 두번째 : JSON=========")
const personJson = {
    name : "김지원",
    age : 30,
    showInfo : function(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};
console.log(personJson);
person.showInfo();

console.log("=======객체생성 방법 세번째 : Prototype 상속=========")
// Prototype 영역 : 해당 객체를 이용해서 새로운 모든 인스턴스가 공유할 수 있는 공용영역
// 함수를 기반으로 객체 설계도를 구현해야한다
const Member = function(name,position) {
    this.name = name,
    this.position = position;
}

m1 = new Member("강백호", "PF");
m2 = new Member("서태웅", "SF");

console.log("m1: ", m1);
console.log("m2: ", m2);

// ES는 동적으로 속성을 추가할 수 있다
m1.sayHi = function() {
    console.log(`${this.name}님이 당신에게 인사합니다.`);
} // m1 객체 전용 메서드
m1.sayHi();
// m2.sayHi(); -> sayHi는 m1에만 추가되어 있는 function이기 때문에 m2에 실행하면 에러가 난다.
console.log("m1: ", m1);
console.log("m2: ", m2);

// m1, m2의 생성자는 무엇인가?
console.log("m1의 생성자:", m1.constructor);  // Member
console.log("m2의 생성자:", m2.constructor);  // Member
// Member의 prototype 영역 확인
console.log("Member의 prototype:", Member.prototype) // {} 출력되는데 빈 객체임을 의미

Member.prototype.team = "상북";
Member.prototype.introduce = function() {
    console.log(`안녕하세요, 저는 ${this.team}에서 
${this.position}을 담당하는 ${this.name} 입니다.`);
}

m1.introduce();
m2.introduce();

console.log("Member의 prototype:", Member.prototype);
console.log("m1: ", m1);

// ES는 동적으로 속성을 추가할 수 있기 때문에
// 기존 객체에도 동적으로 속성 추가가 가능하다

// String 객체 - sayHi 매서드를 만들어보자
String.prototype.sayHi = function() {
    return `안녕하세요, ${this}님`;
}
console.log("희동이".sayHi());