// 민주
window.addEventListener("load", function () {
  var swiper = new Swiper(".nanumsns", {
    loop: true,
    // slidesPerView: 4,
    // spaceBetween: 0,
    breakpoints: {
      1300: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
    },
    // centeredSlides: true,
  });

  // 스크롤 이벤트를 감지하여 메뉴의 상태를 변경하는 함수
  window.addEventListener("scroll", function () {
    var menu = document.getElementById("bt-menu");
    if (window.scrollY > 100) {
      // 스크롤이 100px 이상 되었을 때
      menu.style.bottom = "0"; // 메뉴를 나타나게 합니다.
    } else {
      menu.style.bottom = "-50px"; // 메뉴를 숨깁니다.
    }
  });


  //배너
  var swiper = new Swiper(".nanumbanner", {
    autoplay: {
      delay: 2000, // 슬라이드 간격을 여기에 밀리초 단위로 설정합니다.
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // centeredSlides: true,
  });



  //pc배너
  var swiper = new Swiper(".nanumPcbanner", {
    autoplay: {
      delay: 2000, // 슬라이드 간격을 여기에 밀리초 단위로 설정합니다.
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // centeredSlides: true,
  });




  // top 버튼 스크롤 기능
  const topBtn = document.getElementById("top-btn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });




  // 화살표 이미지 회전
  const topBtnImg = document.getElementById("top-btn-img");
  window.addEventListener("scroll", function () {
    const scTop = window.document.documentElement.scrollTop;
    if (scTop > 0) {
      topBtnImg.classList.add("up");
    } else {
      topBtnImg.classList.remove("up");
    }
  });



});
