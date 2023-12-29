import "./heropage.css";
import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { mobile, tablet, desktop } from "../responsive";
import styled from "styled-components";
import logo from "../../images/logo.png"
import { Link } from "react-scroll";
import Contact from "../contactus/Contact";


const Hamburger = styled.div`
  display: none;
  position: absolute;
  top: 55px;
  right: 10px;
 
  
  @media (max-width: 767px) {
    display: block;
    border-radius: 10%;
    padding: 10px;
    cursor: pointer;
    .MuiSvgIcon-root {
        font-size: 35px; /* Change the font size to your desired value */
      }
    
    &:hover {
        background-color: rgba(128, 128, 128, 0.2);
      }

  }
  ${mobile({
    fontSize: "1px",
    '.MuiSvgIcon-root': {
      fontSize: "30px"
    }
  })}
`;


const Nav = styled.nav`
  display: flex;
  flex:3;
  margin-left: 20px;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 20px;
  
  @media (max-width: 767px) {
    margin: 0px;
    padding: 0px;
    margin-top: 40px;
    flex-direction: column;
    margin-left: 0px;
    position: absolute;
    top: 60px;
    left: 3px;
    right: 3px;
    background-color: rgba(245, 243, 204, 1);
    width: 100%;
    height:auto;
    padding-top: 10px;
    padding-bottom: 10px;
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    z-index: 9999;
    opacity: 1;

  }
`;

const MenuItem = styled.div`
   
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 10%;
  padding: 15px;
  margin-left: 25px;

  ${mobile(
    { 
      fontSize: "18px", 
      margin: "auto",
      marginBottom: "1em",
      width:"8em",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
     }
  )}
  ${tablet(
    { 
      fontSize: "20px", 
      margin: "auto",
      marginTop: "1em",
      width:"10em",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
      

    }
  )}

    &:hover {
        background-color: rgba(128, 128, 128, 0.2);
    }
  `;


function Heropage() {
    const [open, setOpen] = useState(false);

    
    return (
        <div id="heroPage">
           
          <div className="heroPageNave">
                <div className="heropageLogo">
                        <img src={logo} alt="logo" />
                </div>
                
                <Hamburger onClick={() => setOpen(!open)} >
                    <MenuIcon/>
                </Hamburger>

                <Nav open={open}> 
               
                    <MenuItem >
                        <Link to='heroPage' smooth={true} duration={1000}>Home</Link>
                    </MenuItem>
                   
                    <MenuItem >
                        <Link to='products' smooth={true} duration={1000}>Products</Link>
                    </MenuItem>
                    <MenuItem >
                      <Link to='location-container' smooth={true} duration={1000}>Location</Link>
                        
                    </MenuItem>
                    <MenuItem >
                      <Link to='ContactUsPage' smooth={true} duration={1000}>Contact Us</Link>
                         
                    </MenuItem>

                </Nav>
            </div> 

            <div className="heroDesc">
                <h2>Breif Description</h2>
                <h1>PesticidePros</h1>
                
                <p>Unleash the Power of Precision Pest Control. Our Pesticide Platform is Your Shield, Bridging Science and Safety. Book with Confidence, Protecting Environments with Targeted Solutions. Empowering Your World, One Spray at a Time. Your Trusted Partner in Pest Management Excellence.</p>
              <button >BOOK NOW</button>
              
                
            </div>
        
        </div>
    )
}

export default Heropage
