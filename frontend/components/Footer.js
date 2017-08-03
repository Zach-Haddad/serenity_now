import React from 'react';

const Footer = () => {
  const cloud = 'http://res.cloudinary.com/zach/image/upload/';

  return(
    <div className="Footer">
    <a href="https://github.com/Zach-Haddad" target="_blank">
    <img src={cloud + 'v1485545222/linkedin_rxxvr3.png'} alt=""/>
    </a>

    <a href="https://www.linkedin.com/in/zach-haddad" target="_blank">
    <img src={cloud + 'v1485545221/github_vibk1u.png'}alt=""/>
    </a>
    </div>
  );
};

export default Footer;
