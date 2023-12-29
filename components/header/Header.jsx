import React from 'react'
import "./header.css"
import {
    Facebook,
    Instagram,
    
   
} from "@mui/icons-material";
import { Link } from "react-scroll";

import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ExploreIcon from '@mui/icons-material/Explore';

function Header() {
    const backgroundImage = "url('../../images/highres.png')";

  return (
    <div id='header' style={{ backgroundImage }}>
        <header className="header">
            <nav className="headerNav">
                <div className='Left'>
                    <a>ENGLISH</a>
                </div>
            
                <div className='center'>
                    <Link to='heroPage' smooth={true} duration={1000}>
                        <HomeIcon />
                    </Link>

                    <Link to='products' smooth={true} duration={1000}>
                        <CategoryIcon />
                    </Link>
                    
                    <Link to='ContactUsPage' smooth={true} duration={1000}>
                        <ContactPageIcon />
                    </Link>

                    <Link to='location-container' smooth={true} duration={1000}>
                        <ExploreIcon />
                    </Link>
                
                
                </div>

                <div className='right'>

                    <div className="SocialIcon-facebook">
                        <Facebook/>
                    </div>
                    <div className="SocialIcon-instagram">
                        <Instagram/>
                    </div>
            
            </div>
            </nav>
        </header>
    </div>
  )
}

export default Header
