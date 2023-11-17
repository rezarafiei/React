import ReactDOM from 'react-dom/client'
import './index.css'


const fname = "reza";

const sayHello = <div>
  <p className='text harchi' id="alaki">HI {fname}</p>
  <br />
  <label htmlFor="fname">First {Fname}</label>
</div>
ReactDOM.createRoot(document.getElementById('root')).render(sayHello)