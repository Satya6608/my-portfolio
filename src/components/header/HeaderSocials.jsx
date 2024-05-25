import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaCodepen } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/satya6608/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/satya6608" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://codepen.io/satya6608" target="_blank" rel="noreferrer" ><FaCodepen /></a>
    </div>
  )
}

export default HeaderSocials