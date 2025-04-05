import React from "react";
import Footer from "../components/Footer";
import { Card, CardBody, CardTitle } from "reactstrap";
import { useHistory } from "react-router-dom";

const AnaSayfa = () => {

  function siparisLink() {
    useHistory().push("/SiparisSayfa");
  }

  function NavButtons({ src, text }) {
    return (
      <button     onClick={siparisLink}

        className="navbtn"
        style={{
          textAlign: "center",

          gap: "10px",
          padding: "0.5rem 1rem",
          display: "flex",
          backgroundColor: "white",
          border: "solid 1px white",
          borderRadius: "40px",
          flexDirection: "row",
        }}
      >
        <img src={src} />
        <p
          style={{
            textAlign: "center",
            fontWeight: "500",
            alignItems: "center",
            margin: "6px 0px 0px 0px",
          }}
        >
          {text}
        </p>
      </button>
    );
  }

  function AnaSayfaCard({ src, extra, yazi, color1 }) {
    return (
      <Card
        style={{
          backgroundImage: `url('${src}')`,
          width: "550px",
          height: "240px",
          backgroundSize: "cover",
          borderRadius: "12px",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <CardBody>
          <CardTitle
            style={{
              maxWidth: "300px",
              fontWeight: "500",
              fontSize: "2rem",
              color: `${color1}`,
            }}
          >
            <span style={{ color: "#CE2829" }}>{extra}</span>
            {yazi}
          </CardTitle>
          <button      onClick={siparisLink}
 className="siparis">SİPARİŞ VER</button>{" "}
        </CardBody>
      </Card>
    );
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
      <section
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <NavButtons
          src={"../images/iteration-2-images/icons/1.svg"}
          text={"YENİ! Kore"}
        />
        <NavButtons
          src={"../images/iteration-2-images/icons/2.svg"}
          text={"Pizza"}
        />
        <NavButtons
          src={"../images/iteration-2-images/icons/3.svg"}
          text={"Burger"}
        />
        <NavButtons
          src={"../images/iteration-2-images/icons/4.svg"}
          text={"Kızartmalar"}
        />
        <NavButtons
          src={"../images/iteration-2-images/icons/5.svg"}
          text={"Fast food"}
        />
        <NavButtons
          src={"../images/iteration-2-images/icons/6.svg"}
          text={"Gazlı İçecek"}
        />
      </section>
      <Footer />
    </>
  );
};

export default AnaSayfa;
