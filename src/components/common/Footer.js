import styled, {css} from "styled-components";

const Footer = styled.footer`
   color: black;
   font-size: 1.5em;
   border: 3px solid black;
   padding: 25px;


   @media (min-width: 720px){
       grid-column: 1 / span 12;
       grid-row: 3;
   }

`;

export default Footer;