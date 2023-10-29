import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app'
import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyAj95edejzZ_AAC3jcXbomsiBLQemep9g8",
  authDomain: "react-ecommerce-dmcp.firebaseapp.com",
  projectId: "react-ecommerce-dmcp",
  storageBucket: "react-ecommerce-dmcp.appspot.com",
  messagingSenderId: "705767897315",
  appId: "1:705767897315:web:80e8546015337436492dd6"
}

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
