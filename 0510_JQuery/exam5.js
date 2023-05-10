$(function () {
    // 초기화 버튼 클릭 시, 모든 입력 필드 초기화
    $("input[value='취소']").click(function () {
      clearInputs();
    });
  
    // 회원가입 버튼 클릭 시, 입력된 정보 검증
    $("input[value='회원가입']").click(function () {
      if (validateInputs()) {
        alert("회원가입이 완료되었습니다!");
        clearInputs();
      }
    });
  
    // 입력 필드 초기화 함수
    function clearInputs() {
      $("#id").val("");
      $("#password").val("");
      $("input[name='gender']").prop("checked", false);
      $("#job option:first").prop("selected", true);
      $("input[name='hobby']").prop("checked", false);
    }
  
    // 입력 필드 유효성 검증 함수
    function validateInputs() {
      var id = $("#id").val();
      var password = $("#password").val();
      var gender = $("input[name='gender']:checked").val();
      var job = $("#job").val();
      var hobbies = $("input[name='hobby']:checked").length;
  
      // 아이디 검증: 이메일 형식
      var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(id)) {
        alert("아이디는 이메일 형식이어야 합니다.");
        return false;
      }
  
      // 비밀번호 검증: 5자 이상
      if (password.length < 5) {
        alert("비밀번호는 5자 이상이어야 합니다.");
        return false;
      }
  
      // 성별 검증: 최소 1개 선택
      if (gender === undefined) {
        alert("성별을 선택해주세요.");
        return false;
      }
  
      // 직업 검증: 최소 1개 선택
      if (job === "") {
        alert("직업을 선택해주세요.");
        return false;
      }
  
      // 취미 검증: 최소 3개 선택
      if (hobbies < 3) {
        alert("취미는 최소 3개 이상 선택해주세요.");
        return false;
      }
  
      return true;
    }
  });
  

// $(document).ready(function () {
//   // 초기화 버튼 클릭 시, 모든 입력 필드 초기화
//   $("input[value='취소']").click(function () {
//     $("#id").val("");
//     $("#password").val("");
//     $("input[name='gender']").prop("checked", false);
//     $("#job option:first").prop("selected", true);
//     $("input[name='hobby']").prop("checked", false);
//   });

//   // 회원가입 버튼 클릭 시, 입력된 정보 검증
//   $("input[value='회원가입']").click(function () {
//     var id = $("#id").val();
//     var password = $("#password").val();
//     var gender = $("input[name='gender']:checked").val();
//     var job = $("#job").val();
//     var hobbies = $("input[name='hobby']:checked").length;

//     // 아이디 검증: 이메일 형식
//     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (!emailPattern.test(id)) {
//       alert("아이디는 이메일 형식이어야 합니다.");
//       return;
//     }

//     // 비밀번호 검증: 5자 이상
//     if (password.length < 5) {
//       alert("비밀번호는 5자 이상이어야 합니다.");
//       return;
//     }

//     // 성별 검증: 최소 1개 선택
//     if (gender === undefined) {
//       alert("성별을 선택해주세요.");
//       return;
//     }

//     // 직업 검증: 최소 1개 선택
//     if (job === "") {
//       alert("직업을 선택해주세요.");
//       return;
//     }

//     // 취미 검증: 최소 3개 선택
//     if (hobbies < 3) {
//       alert("취미는 최소 3개 이상 선택해주세요.");
//       return;
//     }

//     // 모든 조건이 만족되면 회원가입 완료
//     alert("회원가입이 완료되었습니다!");
//   });
// });

// $(document).ready(function () {
//   // 폼 제출 이벤트 핸들러 등록
//   $("form").submit(function (event) {
//     event.preventDefault(); // 기본 동작 취소

//     // 아이디 유효성 검사
//     const id = $("#id").val();
//     if (!validateEmail(id)) {
//       alert("아이디는 이메일 형식이어야 합니다.");
//       return;
//     }

//     // 비밀번호 유효성 검사
//     const password = $("#password").val();
//     if (password.length < 5) {
//       alert("비밀번호는 5자 이상이어야 합니다.");
//       return;
//     }

//     // 성별 유효성 검사
//     const gender = $("input[name='gender']:checked").val();
//     if (!gender) {
//       alert("성별을 선택해야 합니다.");
//       return;
//     }

//     // 직업 유효성 검사
//     const job = $("#job").val();
//     if (!job) {
//       alert("직업을 선택해야 합니다.");
//       return;
//     }

//     // 취미 유효성 검사
//     const hobbies = $("input[name='hobby']:checked");
//     if (hobbies.length < 3) {
//       alert("취미는 3개 이상 선택해야 합니다.");
//       return;
//     }

//     // 모든 조건 만족시 알림 출력
//     alert("회원가입이 완료되었습니다.");
//   });

//   // 취소 버튼 클릭 이벤트 핸들러 등록
//   $("input[type='reset']").click(function () {
//     // 폼 초기화
//     $("#id").val("");
//     $("#password").val("");
//     $("input[name='gender']").prop("checked", false);
//     $("#job").val("");
//     $("input[name='hobby']").prop("checked", false);
//   });
// });

// // 이메일 유효성 검사 함수
// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }
