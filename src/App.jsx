

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'

function App() {
  const history = useHistory();

  const aciktimButton = () => {
    history.push("/SiparisForm")
  }
  

  return (
    <>
      <h1>Teknolojik Yemekler</h1>
      <p>KOD ACIKTIRIR</p>
      <p>PIZZA, DOYURUR</p>
      <button onClick={aciktimButton}>ACIKTIM</button>
    </>
  )
}

export default App
