/**
 * Firebase project settings
 *
 * 1) https://console.firebase.google.com/ 에서 프로젝트 생성
 * 2) Authentication → Sign-in method → Email/Password 사용 설정
 * 3) Firestore Database 생성 (시작 모드는 test/production 후 Rules 적용)
 * 4) Storage 사용 설정
 * 5) 프로젝트 설정 → 일반 → 웹 앱 설정값을 아래에 붙여넣기
 * 6) Authentication → Users 에서 회원 추가
 * 7) firestore.rules / storage.rules 내용을 Console Rules에 붙여넣기 (관리자 이메일 목록 포함)
 * 8) firebase-config.js 의 FIREBASE_ADMIN_EMAILS 에 관리자 이메일 지정
 * 9) 상품 등록은 admin.html (관리자만) 또는 Firebase Console 에서
 * 10) Sheet CSV 일괄 이전은 migrate.html (관리자만)
 *
 * 참고: 로그인은 이메일 형식 필요 (예: member01@amor.local)
 */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBn8vRKMWgFNB_O4LR6O5Vyzc760z8NECo",
  authDomain: "order-system-firebase.firebaseapp.com",
  projectId: "order-system-firebase",
  storageBucket: "order-system-firebase.firebasestorage.app",
  messagingSenderId: "676974352468",
  appId: "1:676974352468:web:56074a616e2a9ebe78f5c1"
};

/** false면 앱에서 회원가입 버튼을 숨기고, Firebase 콘솔에서만 회원 추가 */
window.FIREBASE_ALLOW_SIGNUP = false;

/**
 * 상품 등록/수정(admin.html) 가능한 관리자 이메일.
 * Authentication → Users 에 있는 이메일과 정확히 같아야 합니다.
 * firestore.rules / storage.rules 의 목록과도 반드시 같게 맞춘 뒤 Console에 Publish 하세요.
 */
window.FIREBASE_ADMIN_EMAILS = [
  "bruceryu77@gmail.com"
];
