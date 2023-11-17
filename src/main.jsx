import ReactDOM from 'react-dom/client'
import './index.css'


const fname = "reza";

const sayHello = <div>
  <p className='text'>HI <span style={{color:"rgb(0,0,255)",fontSize:"3em",padding:10}}>{fname}</span></p>
  <br />
  <label htmlFor="fname">First name</label>
</div>
ReactDOM.createRoot(document.getElementById('root')).render(sayHello)