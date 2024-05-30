function testAttributes() {
    // main-image -> 속성확인
    let mainImage = document.getElementById("main-image");
    console.log("main-image: ", mainImage);

    // 속성 조회 : getAttribute
    // 가지고 있는 모든 속성 확인
    console.log(mainImage.getAttributeNames());
    // ID 속성 확인
    console.log("id: ", mainImage.getAttribute("id"));
    // class 속성 확인
    console.log("class: ", mainImage.getAttribute("class"));
    // title 속성 확인
    console.log("title: ", mainImage.getAttribute("title"));

    // 속성 값 변경 : 
    mainImage.setAttribute("title",
        `제품: ${mainImage.getAttribute("title")}`
    )
    console.log("변경된 타이틀:",
        mainImage.getAttribute("title"));

    // 하단 Products 이미지들의 title 속성도 변경해보자
    let subs = document.getElementsByClassName("sub-image");
    console.log(".sub-image", subs);
    // 루프를 돌면서 속성 변경
    for (let i = 0; i < subs.length; i++) {
        subs[i].setAttribute("title",
            `제품: ${subs[i].getAttribute("title")}`);
    }
}
// testAttributes();

window.addEventListener("load", (event) => {
    // #main-image을 click하면 발생하는 이벤트(정보) 확인
    document.getElementById("main-image").onclick = (event) => {
        // 이벤트 처리함수의 첫번째 매개변수는 이벤트 정보객체
        alert("메인이미지 클릭!");
        // console.log(event);
        // console.log("이벤트명: ", event.name);
        // console.log("이벤트 발생 객체: ", event.target);
    }

    // 문서로드 완료 이벤트 load
    // 문서의 초기화 코드는 load 이벤트 핸들러 안에 작성해준다
    //  - 요소에 이벤트 핸들러를 부착한다
    //  - 서버로부터 데이터 전송받아서 내부 요소에 반영한다
    let products = document.getElementsByClassName("sub-image");
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        console.log(product);
        // 개별 click 이벤트 핸들러 부착
        product.addEventListener("click", event => {
            let obj = event.target;     // 이벤트 발생객체
            
            let mainImage = document.getElementById("main-image");
            mainImage.setAttribute("src", obj.getAttribute("src"));
            mainImage.setAttribute("title", obj.getAttribute("title"));

            let productTitle = document.querySelector("#product-info h2");
            // console.log(productTitle);
            // 콘텐츠 변경 방법 : innerText, innerHTML
            productTitle.innerText = obj.getAttribute("title");
        });
    }
    // 키보드 상품입력하기
    document.getElementById("keyword")
        .addEventListener("keypress", event => {
        // .addEventListener("keydown", event => {
        // .addEventListener("change", event => {
            console.log(event);
            let message = event.target.value;
            console.log(message);

            let btnSearch = document.getElementById("btn-search");
            btnSearch.innerText = `검색: ${message}`;
            
    });
    });