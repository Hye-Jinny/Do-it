/* 절차 지향 방식 

// 페이지 로드 이벤트 
window.addEventListener("load", () => {
    // article 레이아웃 재배치 
    const grid = new Isotope("section", { // 배치할 요소를 감싸고 있는 부모 요소명
        itemSelector: "article", // 배치할 요소명
        columnWidth: "article", // 너빗값을 구할 요소명
        transitionDuration: "0.5s" // 화면 재배치 시 요소가 움직이는 속도
    });

    // all, odd, even 버튼 클릭 시, 해당 article만 보이게 구현 
    const btns = document.querySelectorAll("main ul li");

    for (let i=0; i < btns.length; i++) {

        btns[i].addEventListener("click", e => {
            e.preventDefault();

            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            // grid에 저장된 결과값을 불러와 재정렬 기능 연결
            grid.arrange({
                filter: sort
            });

            for (let i=0; i < btns.length; i++) {
                btns[i].classList.remove("on");
            }
            e.currentTarget.classList.add("on");
        })
    }
});
*/

/* 함수를 이용해 기능별로 개선 */
const frame = "section";
const box = "article";
const speed = "0.5s";
const activeClass = "on";
const btns = document.querySelectorAll("main ul li");
let grid;   // 플러그인의 정보값이 담길 변수를 이곳에 전역으로 설정

// 이미지 소스를 활용한 모든 콘텐츠의 로딩이 완료되면
window.addEventListener("load", () => {
    init();   // 화면 초기화 함수 호출
    filter(btns);   // 정렬 버튼 기능의 함수 호출
})

// 화면 초기화 함수 정의
function init() {
    grid = new Isotope(frame, {
        itemSelector: box,
        columnWidth: box,
        transitionDuration: speed
    });
}

// 정렬 버튼 기능의 함수 정의
function filter(arr) {
    for (let el of arr) {
        el.addEventListener("click", e => {
            e.preventDefault();

            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            grid.arrange({
                filter: sort
            });

            for (let el of arr) {
                el.classList.remove(activeClass);
            }

            e.currentTarget.classList.add(activeClass);
        })
    }
}