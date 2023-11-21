import ReactDOM from 'react-dom/client'
import "./assets/general.scss"
import stylesA from './main.modules.scss'
console.log(stylesA)

// علت اجرا نشدن ماژول سی اس  اس من چی هست؟
const sayHello = <div>
  <button className={stylesA.btn}>click me</button>

</div>
ReactDOM.createRoot(document.getElementById('root')).render(sayHello)