import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom';
import "./anaSayfa.css";



import styled from 'styled-components';

const Button = styled.button `

background:#FDC913;
padding:0.8rem 3rem;
border:1px solid rgba(0,0,0,0);
border-radius:1rem;
cursor:pointer;
font-weight: bold;


`

const Baslik = styled.h1`
color:white;
font-size:2rem;

`

const AnaSayfaYazi = styled.h2`
color:white;
font-size: 3.5rem;
padding:1rem;
`

const StyledLink = styled(Link)`
text-decoration: none;
color:black;
`



const AnaSayfa = () => {
  return (
    <div><Baslik>Teknolojik Yemekler</Baslik>
    <AnaSayfaYazi>KOD ACIKTIRIR <br/> PIZZA, DOYURUR</AnaSayfaYazi>
    <StyledLink to="./SiparisSayfa"><Button>ACIKTIM</Button></StyledLink>

    </div>
    
  )
}

export default AnaSayfa;