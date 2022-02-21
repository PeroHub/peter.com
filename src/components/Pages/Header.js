import './Header.css'
import { useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa';
import { BsXLg } from "react-icons/bs";

import logo from '../../assets/images/logo.svg'

const Header = ({click,handleClick,handleClose }) => {

  // const [ click, setClick ] = useState(false);

  // console.log(click)

  // const handleClick = () => {
  //   setClick(!click)
  // }

  // const handleClose = () => {
  //   setClick(false)
  // }

  const menuOpen = {
    border: "1px solid red"
  }
  
  // useEffect(() => {
  //   window.addEventListener('click', handleClick);
  
  //   return () => {
  //     window.removeEventListener('click', handleClick);
  //   };
  // }, [handleClick]);
  
  return (
    <div className="header">
        <div className="img-con">
          <img src={logo} alt="logo" />
        </div>
        <div  onClick={handleClick} className="toggle">
          { click ? <BsXLg onClick={handleClose} style={{fontSize: "30px"}} /> : < FaBars onClick={handleClick} style={{fontSize: "30px"}} /> }
         
        </div>
      </div>
  );
};

export default Header;
