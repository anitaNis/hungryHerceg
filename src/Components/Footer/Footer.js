import React from 'react';
import './style.css'
import styled from "styled-components";

const FooterP = styled.p`
  background-color: transparent;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;`

const Footer = () => {
    return ( <div className="footer">
        <FooterP>Copyright @ 2020 | Tesla Team</FooterP>
    </div> );
}
 
export default Footer;