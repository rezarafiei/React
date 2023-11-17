import ReactDOM from 'react-dom/client'
import './index.css'

const showNames = ['reza', 'ashkan', 'parisa']


const sayHello = <div>
  <ul>
    {/* چرا با foreach اجرا نمیشه؟ */}
    {
      showNames.forEach(element => 
        <li>{element}</li>
      )
    }
  </ul>
</div>
ReactDOM.createRoot(document.getElementById('root')).render(sayHello)