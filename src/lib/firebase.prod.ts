import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'

const firebaseConfig = {
  // firebase 내의 사용자환경 CDN 으로 정보를 불러옵니다.
  apiKey: 'AIzaSyBgVNrhaUG_EFOExO7_9knnKGuYx_PGIo8',
  authDomain: 'perrychriss-e3b80.firebaseapp.com',
  projectId: 'perrychriss-e3b80',
  storageBucket: 'perrychriss-e3b80.appspot.com',
  messagingSenderId: '951775111575',
  appId: '1:951775111575:web:ea449b3df16f0db367bcd2',
  measurementId: 'G-TN2MB1CTC4',
}
const firebaseapp = firebase.initializeApp(firebaseConfig)
//    firebase 정보를 불러와줍니다.

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
// firebase 정보를 불러오는 다른방법
const db = app.firestore()
// 파이어베이스 db를 가져옵니다.
const auth = app.auth()
// 파이어베이스 auth 정보를 가져옵니다.
const GoogleauthProvider = new firebase.auth.GoogleAuthProvider()
// 파이어베이스 Google 로그인 방법을 가져옵니다.

const Storage = app.storage()
// 파이어베이스 스토리지를 가져옵니다.

export { db, auth, GoogleauthProvider, Storage, firebaseapp }
