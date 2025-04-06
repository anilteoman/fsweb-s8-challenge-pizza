import React from 'react'

const NavButtons = ({siparisLink , src , text}) => {
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


export default NavButtons