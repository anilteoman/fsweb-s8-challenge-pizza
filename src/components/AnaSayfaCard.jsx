import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'

const AnaSayfaCard = ({ src, extra, yazi, color1 ,siparisLink}) => {
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
className="cardSiparisVerBtn">SİPARİŞ VER</button>{" "}
    </CardBody>
  </Card>
  )
}

export default AnaSayfaCard