import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Webby from '../assets/web logo (3).png';
import styled from 'styled-components';
import { BrowserRouter, NavLink } from "react-router-dom";


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);

  return (
    <BrowserRouter>
    <header className='flex justify-between px-5 py-5 bg-primary text-white fixed w-full z-10 opacity-95 border-b-[1px] border-gray-700 backdrop-blur-lg' id='heady'>
      <HomeNavLink exact to='/'>
       <Logo src={Webby}></Logo>
      </HomeNavLink>
      {/* <a href="/" className='logo text-3xl font-bold text-accent'>Luke</a> */}

      {/* Desktop Nav */}
      <nav className='hidden md:block'>
       <ul className='flex'>
        <li><a href="/#about">About</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#education">Education</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li><a href="https://drive.google.com/file/d/1DTsimr-TBKUCPJ94qtveheHv8xp_9luQ/view?usp=sharing"
               target="_blank"
            >Resume</a></li>
       </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={
        !toggle 
        ? "mobile-nav left-[-100%]"
        : "mobile-nav left-0"
     }
    >
       <ul className='flex flex-col'>
        <li><a href="/#about">About</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#education">Education</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li><a href="https://drive.google.com/file/d/1DTsimr-TBKUCPJ94qtveheHv8xp_9luQ/view?usp=sharing"
               target="_blank"
            >Resume</a>
        </li>
       </ul>
      </nav>

      {/* Toggle Button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
      </button>
    </header>
    </BrowserRouter>
  )
}



const HomeNavLink = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled.img`
height: 40px;
`


export default Header
