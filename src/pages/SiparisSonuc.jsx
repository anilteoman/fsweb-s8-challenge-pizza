import React from "react";
import { useLocation } from "react-router";
import Footer from "../components/Footer";

const SiparisSonuc = () => {
  const location = useLocation();
  const { response } = location.state || {};

  return (
    <div className="siparisSonucFullscreen">
      <div className="siparisSonucContainer">
        <img src="\images\iteration-1-images\logo.svg" alt="ty logo" />

        <p className="siparisSonucYazi">
          <span className="sariYazi">lezzetin yolda</span>
          <br />
          SİPARİŞ ALINDI
          <hr />
        </p>

        <div className="siparisOzeti bej">
          <p>Boyut : <span className="bold">{response.boyut}</span></p> 
          <p>Hamur : <span className="bold"> {response.hamurKalinlik}</span></p> 
          <p>Ek Malzemeler :<span className="bold"> {response.malzemeler?.join(", ") || "Yok"}</span></p> 


          <div className ="siparisToplamOzet bold">
            <p className="siparisToplam">Sipariş Toplamı</p>
            <div className="siparisVerSecimler">
              <p>Seçimler</p>
              <p>{response.secimFiyat} ₺</p>
            </div>
            <div className="siparisVerToplam">
              <p>Toplam</p>
              <p>{response.toplamFiyat} ₺</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default SiparisSonuc;
