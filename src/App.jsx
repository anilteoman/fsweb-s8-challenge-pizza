


import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import AnaSayfa from './pages/AnaSayfa'
import SiparisSayfa from './pages/SiparisSayfa'

function App() {
  
  

  return (
    <>
      <Switch>
        <Route exact path="/">
          <AnaSayfa />
        </Route>
        <Route path ="/SiparisSayfa">
          <SiparisSayfa />
        </Route>
        
      </Switch>
    </>
  )
}

export default App
