import React from 'react';

const Footer = () => {
    var currYear = new Date().getFullYear();
    return (
        <footer>
          <p>Copyright @ {currYear} </p>  
        </footer>
    );
}

export default Footer;