import React from 'react'


import SiparisForm from '../components/SiparisForm';
import Footer from '../components/Footer'


const SiparisSayfa = () => {
  return (
    <div>
      <header className='siparisHeader'>
        
      
      <img src="images\iteration-1-images\logo.svg" alt="ty logo" className='siparisHeaderLogo'/>
      <nav>
        <a href="/">Ana Sayfa</a> - <a href="./SiparisSayfa">Sipariş Oluştur</a>
      </nav>
        </header>
        
      

      <SiparisForm />





      <Footer />

      </div> 
  )
}

export default SiparisSayfa;