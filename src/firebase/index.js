import { initializeApp } from 'firebase/app'; // firebase 모듈에 있는 initializeApp 이라는 함수를 가져와 사용한다고 선언

// firebase를 사용하기 위한 기본정보
const firebaseConfig = {
    apiKey: "AIzaSyAbZ3OAJXzmme2wXTJIVj5y5dOlHgdbNOQ",
  authDomain: "practice1-zed.firebaseapp.com",
  projectId: "practice1-zed",
  storageBucket: "practice1-zed.appspot.com",
  messagingSenderId: "72946375927",
  appId: "1:72946375927:web:d578b065572476170147f2",
  measurementId: "G-609JTMW4EQ"
};

export const firebaseApp = initializeApp(firebaseConfig); // firebaseApp이라는 객체를 만들어 다른 파일에서 사용할 수 있도록 내보낸다