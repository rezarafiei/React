import ReactDOM from 'react-dom/client'
import './index.css'

const showNames = ['reza', 'ashkan', 'parisa']


const sayHello = <div>
  <ul>
{/* چرا اینجا ما ارور داریم زمانی که اکولاد میگذاریم */}
    {
      showNames.map((element) => {<li key={element}>{element}</li>})
    }
  </ul>
</div>
ReactDOM.createRoot(document.getElementById('root')).render(sayHello)