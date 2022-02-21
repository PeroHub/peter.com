import React from 'react'
import './TogglePage.css'
import logo from '../../assets/images/logoToggle.svg'
import { BsXLg } from "react-icons/bs";
import Header from '../Pages/Header'

export const TogglePage = ({handleClose}) => {
  return (
    <div className="togglepage">
       <div className=" headerToggle">
            <div className="img-con">
                <img src={logo} alt="logo" />
            </div>
            <div className="toggle">
                <BsXLg onClick={handleClose} style={{fontSize: "30px", color: "#fff"}} /> 
            </div>
        </div>

        <div className="headerMain">
            <p>Home</p>
            <p>Projects</p>
            <p>About</p>
            <p>COntact</p>
        </div>
    </div>
  )
}
