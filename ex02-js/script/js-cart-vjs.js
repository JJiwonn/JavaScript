// 초기화 코드
window.addEventListener("load",event => {
    // ul#list로부터 자식 li 모두 삭제
    let cartItems = document.querySelectorAll("#list > li");
    // 첫번째 방법: 부모 list 아래 자식 li들을 다 찾아준다(직접찾아줌)
    console.log(cartItems);

    /* //두번째 방법: 나눠서 찾기
    //부모찾는것
    let parent = document.getElementById("list"); 
    console.log(parent);
    // 찾은 부모가 자식노드를 가지고 있는가
    console.log("자식을 가지고 있는가?", parent.hasChildNodes());
    // true라면 자식 목록을 확인
    console.log("자식목록: ", parent.children);*/

    // 반대로 부모찾기
    for (let i =0; i < cartItems.length; i++) {
        let parent = cartItems[i].parentNode;
        console.log(parent);
    // 부모를 찾은 후에 부모로부터 자식들 제거하기 
        parent.removeChild(cartItems[i]);
    }

    // 추가버튼(#btn-add)에 이벤트 처리 함수 연결
    document.getElementById("btn-add")
        .addEventListener("click", addItem);
});

function addItem() {
    // input#item으로부터 value 속성 값을 가져오자
    const itemInput = document.getElementById("item");
    const item = itemInput.value.trim();

    if(item.length > 0) {
        console.log("추가아이템: ", item);

        // 추가할 요소 생성
        let itemNode = document.createElement("li");
        itemNode.innerText = item;
        let toolbar = document.createElement("div");
        toolbar.style.display = "inline";
        toolbar.style.cssFloat = "right";
        let btnDel = document.createElement("button");
        btnDel.innerText = "삭제";

        toolbar.append(btnDel);
        itemNode.append(toolbar);
        // 부모찾기
        let container = document.getElementById("list");
        container.appendChild(itemNode);

        // 입력된 데이터 삭제
        itemInput.value = "";
        itemInput.focus();

        btnDel.addEventListener("click",event => {
            console.log(event.target.parentNode.parentNode);
            // 삭제해야할 요소: event.target.parentNode.parentNode

            let removeItem = event.target.parentNode.parentNode;

            container.removeChild(removeItem);
    })
    }
}