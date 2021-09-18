import React from "react";
import "./Footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ {currentYear} Afik ziv.</p>
    </footer>
  );
}

export default Footer;
