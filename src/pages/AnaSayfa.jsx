import React from "react";
import Footer from "../components/Footer";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { useHistory } from "react-router-dom";
import NavButtons from "../components/NavButtons";
import AnaSayfaCard from "../components/AnaSayfaCard";
import AltCard from "../components/AltCard";

const AnaSayfa = () => {

  const history = useHistory();
  function siparisLink() {
    history.push("/SiparisSayfa");
  }




  return (
    <>
      <div className="homeBG">
        <div className="anaSayfaContainer">
          <img src="\images\iteration-1-images\logo.svg" alt="ty logo" />

          <p className="anaSayfaYazi">KOD ACIKTIRIR PIZZA, DOYURUR</p>

          <a href="/SiparisSayfa" className="aciktimBtn">
            ACIKTIM
          </a>
        </div>
      </div>
      <section className="navbtns"
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavButtons siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/1.svg"}
          text={"YENİ! Kore"}
        />
        <NavButtons siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/2.svg"}
          text={"Pizza"}
        />
        <NavButtons siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/3.svg"}
          text={"Burger"}
        />
        <NavButtons siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/4.svg"}
          text={"Kızartmalar"}
        />
        <NavButtons siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/5.svg"}
          text={"Fast food"}
        />
        <NavButtons siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/6.svg"}
          text={"Gazlı İçecek"}
        />
      </section>
      <section  className="mainCardsContainer">
        <Card
          style={{
            backgroundImage: `url('../images/iteration-2-images/cta/kart-1.png')`,
            width: "550px",
            height: "500px",
            backgroundSize: "cover",
            borderRadius: "12px",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <CardBody>
            <CardTitle
              style={{
                fontFamily: "Quattrocento",
                maxWidth: "250px",
                fontWeight: "bold",
                fontSize: "3rem",
                color: "white",
              }}
            >
              Özel Lezzetus
            </CardTitle>
            <CardText style={{ color: "white" }}>
              <b>Position: Absolute Acı Burger</b>
            </CardText>
            <button   onClick={siparisLink} data-cy="homeSiparis" className="cardSiparisVerBtn">SİPARİŞ VER</button>{" "}
          </CardBody>
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <AnaSayfaCard siparisLink={siparisLink}
            src={"../images/iteration-2-images/cta/kart-2.png"}
            yazi={"Hackathlon Burger Menü"}
            color1={"white"}
          />
          <AnaSayfaCard
            src={"../images/iteration-2-images/cta/kart-3.png"}
            extra={"Çoooook"}
            yazi={" hızlı npm gibi kurye"}
            color1={"black"}
          />
        </div>
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          paddingTop: "2rem",
          backgroundColor: "#FAF7F2",
        }}
      >
        <span
          style={{ fontFamily: "Satisfy", color: "#CE2829", fontSize: "2rem" }}
        >
          en çok paketlenen menüler
        </span>
        <h1 style={{fontWeight:"600"}}>Acıktıran Kodlara Doyuran Lezzetler</h1>
      </section>



       
      <section className="navbtns"
        style={{
          padding: "1rem",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          flexDirection: "row",
          background: "#FAF7F2",
          justifyContent: "center",
          gap: "1rem",
        }}
      > 
        <NavButtons siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/1.svg"}
          text={"Ramen"}
        />
        <NavButtons siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/2.svg"}
          text={"Pizza"}
        />
        <NavButtons siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/3.svg"}
          text={"Burger"}
        />
        <NavButtons siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/4.svg"}
          text={"French fries"}
        />
        <NavButtons siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/5.svg"}
          text={"Fast food"}
        />
        <NavButtons siparisLink={siparisLink}
          src={"../images/iteration-2-images/icons/6.svg"}
          text={"Soft drinks"}
        />
      </section>


       {/*alt bölüm kartlar*/}

      <section className="altCards"
        style={{
          padding: "1rem",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          background: "#FAF7F2",
          justifyContent: "center",
          gap: "1.8rem",
        }}
      >
        <AltCard
          src={"../images/iteration-2-images/pictures/food-1.png"}
          text={"Terminal Pizza"}
        />

        <AltCard
          src={"../images/iteration-2-images/pictures/food-2.png"}
          text={"Position Absolute Acı Pizza"}
        />

        <AltCard
          src={"../images/iteration-2-images/pictures/food-3.png"}
          text={"useEffect Tavuklu Burger"}
        />
      </section>

      {/*fOOTER*/}

      <Footer />
    </>
  );
};

export default AnaSayfa;
