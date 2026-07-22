/**
 * Firebase project settings
 *
 * 1) https://console.firebase.google.com/ 에서 프로젝트 생성
 * 2) Authentication → Sign-in method → Email/Password 사용 설정
 * 3) 프로젝트 설정 → 일반 → 내 앱 → 웹 앱 추가 후 아래 값 복사
 * 4) Authentication → Users 에서 회원 계정 추가 (이메일 + 비밀번호)
 *
 * 참고: Firebase 로그인은 "이메일" 형식이 필요합니다.
 *       예) member01@amor.local  /  staff@yourshop.com
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
