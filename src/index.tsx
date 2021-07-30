import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import { firebaseapp } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebaseContext'
ReactDOM.render(
  // 리덕스 사용을 위한 프로바이더
  <Provider store={store}>
    {/* 파이어베이스 사용을 위한 프로바이더. */}
    <FirebaseContext.Provider value={{ firebaseapp }}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
