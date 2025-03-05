//black 빼기
document.addEventListener("DOMContentLoaded", function () {
    const categoryList = document.querySelector(".about_category");
    const listItems = document.querySelectorAll(".about_category li a");

    categoryList.addEventListener("mouseover", function (event) {
        if (event.target.tagName === "A") {
            listItems.forEach((el) => el.classList.remove("black")); // 모든 요소에서 black 제거
        }
    });
});
//2. about
// 마우스 갖다 대면 dispaly:none -> block으로 바꾸기
const txt = document.querySelectorAll('.about_category li a');
const aniBox1 = document.querySelector('.ani_box1');
const aniBox2 = document.querySelector('.ani_box2');
const aniBox3 = document.querySelector('.ani_box3');
const aniBox4 = document.querySelector('.ani_box4');
console.log(aniBox1, aniBox2);
console.log(txt.length);

txt[0].addEventListener('mouseover', ()=>{
    aniBox1.style.display = 'block';
    aniBox2.style.display = 'none';
    aniBox3.style.display = 'none';
    aniBox4.style.display = 'none';
    up0();
})
txt[1].addEventListener('mouseover', ()=>{
    aniBox1.style.display = 'none';
    aniBox3.style.display = 'none';
    aniBox4.style.display = 'none';
    aniBox2.style.display = 'block';
    up();
})
txt[2].addEventListener('mouseover', ()=>{
    aniBox1.style.display = 'none';
    aniBox2.style.display = 'none';
    aniBox4.style.display = 'none';
    aniBox3.style.display = 'block';
    up2();
})
txt[3].addEventListener('mouseover', ()=>{
    aniBox1.style.display = 'none';
    aniBox2.style.display = 'none';
    aniBox3.style.display = 'none';
    aniBox4.style.display = 'block';
    up4();
})


//아래에서 원래자리로 올라가는 function 만들기
const leftTop = document.querySelectorAll('.left_top');
const leftBottom = document.querySelectorAll('.left_bottom');
const rightTop = document.querySelectorAll('.right_top');
const rightBottom = document.querySelectorAll('.right_bottom');
console.log(leftTop, leftBottom, rightTop, rightBottom);

function up() {
    // 나열 - 1
    leftTop[1].style.transition = 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out';
    leftTop[1].style.transform = 'translateY(50px)';
    leftTop[1].style.opacity = '0';
    // 나열 - 2
    leftBottom[1].style.transition = 'transform 0.7s ease-in-out, opacity 0.8s ease-in-out';
    leftBottom[1].style.transform = 'translateY(100px)';
    leftBottom[1].style.opacity = '0';
    // 나열 - 3
    rightTop[1].style.transition = 'transform 0.88s ease-in-out, opacity 0.88s ease-in-out';
    rightTop[1].style.transform = 'translateY(200px)';
    rightTop[1].style.opacity = '0';
    // 나열 - 4
    rightBottom[1].style.transition = 'transform 0.8s ease-in-out, opacity 0.6s ease-in-out';
    rightBottom[1].style.transform = 'translateY(140px)';
    rightBottom[1].style.opacity = '0';
    // 함수
    setTimeout(() => {
        leftTop[1].style.opacity = '1';
        leftTop[1].style.transform = 'translateY(-145px)'; 
        // 아래로 이동
        leftBottom[1].style.opacity = '1';
        leftBottom[1].style.transform = 'translateY(-90px)'; 
        // 아래로 이동
        rightTop[1].style.opacity = '1';
        rightTop[1].style.transform = 'translateY(-6px)'; 
        // 아래로 이동
        rightBottom[1].style.opacity = '1';
        rightBottom[1].style.transform = 'translateY(-90px)'; 
    }, 100); // 2초 후 실행 (첫 애니메이션 완료 후 실행)
}

function up0() {
    // 나열 - 1
    leftTop[0].style.transition = 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out';
    leftTop[0].style.transform = 'translateY(10px)';
    leftTop[0].style.opacity = '0';
    // 나열 - 2
    leftBottom[0].style.transition = 'transform 0.68s ease-in-out, opacity 0.8s ease-in-out';
    leftBottom[0].style.transform = 'translateY(200px)';
    leftBottom[0].style.opacity = '0';
    // 나열 - 3
    rightTop[0].style.transition = 'transform 0.7s ease-in-out, opacity 0.88s ease-in-out';
    rightTop[0].style.transform = 'translateY(80px)';
    rightTop[0].style.opacity = '0';
    // 나열 - 4
    rightBottom[0].style.transition = 'transform 0.8s ease-in-out, opacity 0.6s ease-in-out';
    rightBottom[0].style.transform = 'translateY(100px)';
    rightBottom[0].style.opacity = '0';
    // 함수
    setTimeout(() => {
        leftTop[0].style.opacity = '1';
        leftTop[0].style.transform = 'translateY(-145px)'; 
        // 아래로 이동
        leftBottom[0].style.opacity = '1';
        leftBottom[0].style.transform = 'translateY(-90px)'; 
        // 아래로 이동
        rightTop[0].style.opacity = '1';
        rightTop[0].style.transform = 'translateY(-6px)'; 
        // 아래로 이동
        rightBottom[0].style.opacity = '1';
        rightBottom[0].style.transform = 'translateY(-90px)'; 
    }, 100); // 2초 후 실행 (첫 애니메이션 완료 후 실행)
}
function up2() {
    // 나열 - 1
    leftTop[2].style.transition = 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out';
    leftTop[2].style.transform = 'translateY(10px)';
    leftTop[2].style.opacity = '0';
    // 나열 - 2
    leftBottom[2].style.transition = 'transform 0.7s ease-in-out, opacity 0.8s ease-in-out';
    leftBottom[2].style.transform = 'translateY(140px)';
    leftBottom[2].style.opacity = '0';
    // 나열 - 3
    rightTop[2].style.transition = 'transform 0.88s ease-in-out, opacity 0.88s ease-in-out';
    rightTop[2].style.transform = 'translateY(200px)';
    rightTop[2].style.opacity = '0';
    // 나열 - 4
    rightBottom[2].style.transition = 'transform 0.8s ease-in-out, opacity 0.6s ease-in-out';
    rightBottom[2].style.transform = 'translateY(140px)';
    rightBottom[2].style.opacity = '0';
    // 함수
    setTimeout(() => {
        leftTop[2].style.opacity = '1';
        leftTop[2].style.transform = 'translateY(-145px)'; 
        // 아래로 이동
        leftBottom[2].style.opacity = '1';
        leftBottom[2].style.transform = 'translateY(-90px)'; 
        // 아래로 이동
        rightTop[2].style.opacity = '1';
        rightTop[2].style.transform = 'translateY(-6px)'; 
        // 아래로 이동
        rightBottom[2].style.opacity = '1';
        rightBottom[2].style.transform = 'translateY(-90px)'; 
    }, 100); // 2초 후 실행 (첫 애니메이션 완료 후 실행)
}



function up4() {
    // 나열 - 1
    leftTop[3].style.transition = 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out';
    leftTop[3].style.transform = 'translateY(50px)';
    leftTop[3].style.opacity = '0';
    // 나열 - 2
    leftBottom[3].style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
    leftBottom[3].style.transform = 'translateY(110px)';
    leftBottom[3].style.opacity = '0';
    // 나열 - 3
    rightTop[3].style.transition = 'transform 0.88s ease-in-out, opacity 0.88s ease-in-out';
    rightTop[3].style.transform = 'translateY(200px)';
    rightTop[3].style.opacity = '0';
    // 나열 - 4
    rightBottom[3].style.transition = 'transform 0.8s ease-in-out, opacity 0.6s ease-in-out';
    rightBottom[3].style.transform = 'translateY(140px)';
    rightBottom[3].style.opacity = '0';
    // 함수
    setTimeout(() => {
        leftTop[3].style.opacity = '1';
        leftTop[3].style.transform = 'translateY(-145px)'; 
        // 아래로 이동
        leftBottom[3].style.opacity = '1';
        leftBottom[3].style.transform = 'translateY(-90px)'; 
        // 아래로 이동
        rightTop[3].style.opacity = '1';
        rightTop[3].style.transform = 'translateY(-6px)'; 
        // 아래로 이동
        rightBottom[3].style.opacity = '1';
        rightBottom[3].style.transform = 'translateY(-90px)'; 
    }, 100); // 2초 후 실행 (첫 애니메이션 완료 후 실행)
}







 /* 스크롤트리거 */
gsap.registerPlugin(ScrollTrigger);

gsap.to('.top_title h2, h2+p',{
    scrollTrigger:{
        trigger:'.top_title h2',
        start:'top 80%',
        end:'top 20%',
        // markers:true,
        toggleActions:'play none reverse  none',
        scrub:true,
    },
    opacity:1,
})

gsap.to('.contents .bottom_ani_box',{
    scrollTrigger:{
        trigger:'.contents .bottom_ani_box',
        start:'top 80%',
        end:'top 20%',
        // markers:true,
        toggleActions:'play none none  none',
        // scrub:true,
    },
    duration: 1,
    opacity:1,
    // y:200
})

// 아이템 왼쪽 
gsap.from('.left_top, .left_bottom',{
    scrollTrigger:{
        trigger:'.left_top',
        start:'top 70%',
        end:'top 20%',
        // markers:true,
        toggleActions:'play none none  none',
    },
    duration:0.6,
    opacity:1,
    y:200,
})
// 아이템 오른쪽
gsap.from('.right_top, .right_bottom',{
    scrollTrigger:{
        trigger:'.left_top',
        start:'top 70%',
        end:'top 20%',
        // markers:true,
        toggleActions:'play none none  none',
    },
    duration: 0.6,
    opacity:1,
    y:200,
})

//===========================================================제품 소개
gsap.to('.move_contents .main_title',{
    scrollTrigger:{
        trigger:'.move_contents .main_title',
        start:'top 80%',
        end:'top 20%',
        // markers:true,
        toggleActions:'play reverse restart reverse',
        scrub:true,
        onEnter: () => {
            gsap.to('.move_contents .main_title',{
                opacity: 1,
                y: 50,
                duration: 1,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeaveBack: () => {
            gsap.to('.move_contents .main_title', {
                opacity: 0,
                y: 0,
                duration: 0.8,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
    },
    opacity:1,
    // y:200,
})


gsap.to('.img_left_box .left1',{
    scrollTrigger:{
        trigger:'.img_left_box .left1',
        start:'top 30%',
        end:'top 10%',
        // markers:true,
        toggleActions:'play reverse restart none',
        scrub:true,
    },
    // duration: 3,
    y:50,
})


gsap.utils.toArray(".img_left_box .left2").forEach((img) => {
    gsap.to(img,{
        scrollTrigger:{
            trigger:img,
            start:'top 80%',
            end:'top 20%',
            // markers:true,
            toggleActions:'play reverse restart reverse',
            scrub:true,
        },
        y:-30,
    })
})

gsap.utils.toArray(".move_contents .img_right").forEach((img) => {
    gsap.to(img, {
        scrollTrigger:{
            trigger:img,
            start:'top 80%',
            end:'top 20%',
            // markers:true,
            toggleActions:'play reverse restart reverse',
            scrub:true,
        },
        y:-400,
    })
})



//========================== 챗 gbt
let contents = gsap.utils.toArray(".move_contents");

contents.forEach((move_contents, index) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: move_contents,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true, // 섹션을 고정하여 다음 요소가 자연스럽게 등장하도록 설정
            anticipatePin: 1
        }
    });

    // 현재 섹션 등장 효과
    tl.fromTo(move_contents, { opacity: 0 }, { opacity: 1, duration: 2 });

    // 다음 섹션 등장 시 현재 섹션을 서서히 사라지게
    if (index < contents.length - 1) {
        tl.to(move_contents, { opacity: 0, duration: 1 }, "+=0.9");
    }
});


gsap.utils.toArray(".move_contents .main_title").forEach((title) => {
    gsap.to(title, {
        backgroundPosition: "left", // 배경 이동 (글자 색 채우기)
        scrollTrigger: {
            trigger: title, // 각 개별 `.main_title` 요소를 트리거
            start: "top 50%", // 화면의 50% 지점에서 시작
            end: "top 30%", // 30%까지 진행
            scrub: 1, // 부드러운 스크롤 연동
        }
    });
});

const serviceItems = document.querySelectorAll('.bottom_contents > a')

gsap.to(serviceItems,{
    scrollTrigger:{
        trigger:serviceItems,
        start:'top 80%',
        // end:'top 20%',
        // markers:true,
        toggleActions:'play reverse restart reverse',
        onEnter: () => {
            gsap.to(serviceItems,{
                opacity: 1,
                y: 50,
                duration: 1,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeaveBack: () => {
            gsap.to(serviceItems, {
                opacity: 0,
                y: 0,
                duration: 0.8,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
        onEnterBack: () => {
            gsap.to(serviceItems,{
                opacity: 1,
                y: 50,
                duration: 1,
                stagger: 0.2, // ★ 순차적으로 등장 ★
            });
        },
        onLeave: () => {
            gsap.to(serviceItems, {
                opacity: 0,
                y: 0,
                duration: 0.8,
                stagger: 0.1, // ★ 사라질 때도 순차적으로 ★
            });
        },
    },
})