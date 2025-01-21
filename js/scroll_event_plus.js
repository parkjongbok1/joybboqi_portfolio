$(document).ready(function () {
  // 각 섹션의 변수
  const sec2_offset = $(".sec02").offset().top;
  const footer_offset = $("footer").offset().top;
  const window_height = $(window).height();

  // 화면 크기에 따라 top 값 설정 함수
  function updateFixedMenuTop(scrollTop) {
    const maxWidthMedia = window.matchMedia("(max-width: 1460px)");

    if (scrollTop >= sec2_offset) {
      $(".fixed_menu").css({
        position: "fixed",
        top: maxWidthMedia.matches ? "3vw" : "150px",
      });
    } else {
      $(".fixed_menu").css({
        position: "",
        top: "",
      });
    }
  }

  // 스크롤 이벤트
  $(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    $(".pos").text(scrollTop);

    // sec2
    updateFixedMenuTop(scrollTop);

    // footer detection and fixed_menu opacity adjustment
    if (scrollTop + window_height >= footer_offset + 100) {
      $(".fixed_menu").css("opacity", 0);
    } else {
      $(".fixed_menu").css("opacity", 1);
    }
  });

  // 초기 로드 시 상태 업데이트
  updateFixedMenuTop($(window).scrollTop());

  // 창 크기 변경 시 상태 업데이트
  $(window).resize(function () {
    updateFixedMenuTop($(window).scrollTop());
  });
});

// $(document).ready(function () {
//   function removeBrForSmallScreens() {
//     const maxWidthMedia = window.matchMedia("(max-width: 1460px)");

//     if (maxWidthMedia.matches) {
//       // max-width: 1460px 이하일 때 <br /> 태그 제거
//       $("p br").remove();
//     } else {
//       // max-width: 1460px 이상일 때 <br /> 태그 복구 (필요 시 추가)
//       // 원래 HTML 구조를 복구하려면 아래 내용을 작성
//       const originalHtml = `
//         저는
//         <strong
//           >3년간의 실무 경험을 통해 웹디자인과 퍼블리싱의 정교한
//           조화</strong
//         >를 이루는 데 주력해 왔습니다.<br />
//         <strong>사용자 경험(UX)과 인터페이스(UI)를 최적화</strong
//         >하여 브랜드 <strong>메시지를 효과적으로 전달하고,</strong
//         ><br />
//         <strong>시각적 완성도를 높이는 디자인</strong>을 구현하는
//         데 강점을 가지고 있습니다.
//       `;
//       $("p").html(originalHtml);
//     }
//   }

//   // 초기 로드 및 창 크기 변경 시 실행
//   removeBrForSmallScreens();
//   $(window).resize(removeBrForSmallScreens);
// });
