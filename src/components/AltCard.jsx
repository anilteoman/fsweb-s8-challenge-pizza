import React from 'react'
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'

const AltCard = ({ src, text}) => {
  return (
    <Card
        style={{
          width: "350px",
          height: "450px",
          padding:"1rem",
          borderColor:"white", 
          borderRadius: "12px",
        }}
      >
        <CardBody>
          <CardImg src={src} />
          <CardTitle style={{fontWeight:"600",fontSize:"1.1rem",textAlign:"start",marginTop:"1rem",fontFamily:"Barlow"}}>
          {text}
          </CardTitle>
        <div
            style={{
              textAlign:"start",
              display: "flex",
              flexDirection: "row",
              justifyContent:"space-between"
            }}
          >
            <span style={{fontWeight:"500"}}>4.9 (200)</span>
            <span style={{marginLeft:"2rem",color:"black",fontWeight:"bold"}}>60₺</span>
          </div>
        </CardBody>
      </Card>
  )
}

export default AltCard