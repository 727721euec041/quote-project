import React from 'react';

function Footer() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <footer>
        <h2 style={{backgroundColor:"white"}}><p>DATE: {date}</p>  <p>TIME: {time}</p>
            </h2>
      
    </footer>
  );
}

export default Footer;





