

import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import AnaSayfa from './pages/AnaSayfa'
import SiparisSayfa from './pages/SiparisSayfa'
import SiparisSonuc from './pages/SiparisSonuc'
import ScrollToTop from './components/ScrollToTop'


function App() {
  
  

  return (
    <>
    <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <AnaSayfa />
        </Route>
        <Route path ="/SiparisSayfa">
          <SiparisSayfa />
        </Route>
        <Route path ="/SiparisSonuc">
          <SiparisSonuc />
        </Route>
        
      </Switch>
    </>
  )
}

export default App
