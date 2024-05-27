// 클래스
class Shape {
    // static -> 모든 인스턴스가 공유되고 new를 하지 않아도 접근 가능한 코드영역
    static create(x, y) {
        return new shape(x, y);
    }
    // 생성자
    constructor(x, y) {
            this.name = "Shape";  // 속성 : ES6에서부터 등장한 부분
            this.move(x, y);
    }
    // 매서드
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    //면적 재는 매서드
    area() {
        return 0;
    }
}
console.log(Shape);

// 상속
class Circle extends Shape {
    // Shape으로부터 x, y를 상속
    // radius(반지름)만 추가로 선언해준다
    constructor (x, y, radius) {
        super(x, y);    // 부모 생성자 -> 물려받은 필드를 초기화
        this.radius = radius;
    }
    // 물려받은 area 매서드 재정의
    area() {
        if (this.radius === 0) {
            return super.area();
        }
        return Math.PI * this.radius ** 2;
    }
}

let s = new Shape(10, 20);
console.log(s, s.area());

let c = new Circle(30, 40, 10);
console.log(c, c.area());       //출력값에 name = Shape 인 이유는 상속받았기 때문이다