import React from 'react';
import reacticon from '../../assets/react.svg';
import '../header/header.css'
import nodeicon from '../../assets/node-js-brands.svg'
import linkedincon from '../../assets/linkedin-in-brands.svg'
import githubicon from '../../assets/github.svg'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='header_nav'>
      <ul>
        <li className='icon-nav'> <a className='icon-nav' href='https://es.reactjs.org/'><img src={reacticon} alt='logo react'/></a>  </li>
        <li> <a className='icon-nav' href='https://nodejs.dev/learn/nodejs-with-typescript'><img src={nodeicon} alt='logo react'/></a>  </li>
        <li> <a className='icon-nav' href='https://www.linkedin.com/in/roderick-medina-173b05169/'><img src={linkedincon}></img></a></li>
        <li> <a className='icon-nav' href='https://github.com/nyxt4s'><img src={githubicon} alt='github'></img></a></li>
      </ul>
    </nav>
  )
}

export default Header