import ReactDOM from 'react-dom/client'
import './index.css'

const showNames = ['reza', 'ashkan', 'parisa']

//const fname = "reza";

const sayHello = <div>
  <ul>
    {showNames.map(item => <li key={item}>{item}</li>)}
  </ul>
</div>
ReactDOM.createRoot(document.getElementById('root')).render(sayHello)