/**
 * Firebase project settings
 *
 * 1) https://console.firebase.google.com/ 에서 프로젝트 생성
 * 2) Authentication → Sign-in method → Email/Password 사용 설정
 * 3) Firestore Database 생성 (시작 모드는 test/production 후 Rules 적용)
 * 4) Storage 사용 설정
 * 5) 프로젝트 설정 → 일반 → 웹 앱 설정값을 아래에 붙여넣기
 * 6) Authentication → Users 에서 회원 추가
 * 7) firestore.rules / storage.rules 내용을 Console Rules에 붙여넣기
 * 8) 상품 등록은 admin.html 또는 Firebase Console 에서
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
