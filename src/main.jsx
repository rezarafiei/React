import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'

const sayHello = <div>
  <p className='text'>HI React</p>
</div>
ReactDOM.createRoot(document.getElementById('root')).render(sayHello)