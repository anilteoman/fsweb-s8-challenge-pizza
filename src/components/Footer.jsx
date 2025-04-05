import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#292929",
        color: "white",
        justifyContent: "center",
      }}
    >
      <div className="footermain">
        <div className="a">
          <img
            src="../images/iteration-2-images/footer/logo-footer.svg"
            style={{ width: "80%", height: "50%" }}
          />

          <p>
            <img
              src={"../images/iteration-2-images/footer/icons/icon-1.png"}
              style={{ marginRight: "1rem" }}
            />
            610 Londonberry Road , Trabzon Türkiye
          </p>
          <p>
            <img
              src={"../images/iteration-2-images/footer/icons/icon-2.png"}
              style={{ marginRight: "1rem" }}
            />
            aciktim@teknolojikyemekler.com
          </p>
          <p>
            <img
              src={"../images/iteration-2-images/footer/icons/icon-3.png"}
              style={{ marginRight: "1rem" }}
            />
            +90 561 661 61 61
          </p>
        </div>

        <div className="b">
          <h3>Hot Menu</h3>
          <a href='#' style={{ marginTop: "1.5rem", textDecoration:"none", color:"white" ,paddingBottom:"1rem"}}>Terminal Pizza</a>
          <a href='#'style={{textDecoration:"none", color:"white", paddingBottom:"1rem"}}>5 Kişilik Hackathlon Pizza</a>
          <a href="#" style={{textDecoration:"none", color:"white",paddingBottom:"1rem"}}>useEffect Tavuklu Pizza</a>
          <a href='#' style={{textDecoration:"none", color:"white",paddingBottom:"1rem"}}>Beyaz Console Frosty</a>
          <a href='#' style={{textDecoration:"none", color:"white",paddingBottom:"1rem"}}>Testler Geçti Mutlu Burger</a>
          <a href='#' style={{textDecoration:"none", color:"white"}}>Position Absolute Acı Burger</a>
        </div>

        <div className="c">
          <h3>Instagram</h3>
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              
              maxWidth: "400px",
            }}
          >
            <img
              src="../images/iteration-2-images/footer/insta/li-0.png"
              className="imgs"
            />
            <img
              src="../images/iteration-2-images/footer/insta/li-1.png"
              className="imgs"
            />
            <img
              src="../images/iteration-2-images/footer/insta/li-2.png"
              className="imgs"
            />
            <img
              src="../images/iteration-2-images/footer/insta/li-3.png"
              className="imgs"
            />
            <img
              src="../images/iteration-2-images/footer/insta/li-4.png"
              className="imgs"
            />

            <img
              src="../images/iteration-2-images/footer/insta/li-5.png"
              className="imgs"
            />
          </div>
        </div>
      </div>

      <div style={{ borderBottom: "1px solid gray", margin: "10px 0" }}></div>

      <p
        style={{
          margin: "0 20rem",
          padding: "1rem",
          fontSize: "1rem",
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        © 2023 Teknolojik Yemekler. <FontAwesomeIcon icon={faTwitter} />
      </p>
    </footer>
  );
}