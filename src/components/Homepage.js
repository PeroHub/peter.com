import Header from './Pages/Header'
import { useState } from 'react'
import Main from './Pages/Main'
import Footer from './Pages/Footer'
import { TogglePage } from './Toggle/TogglePage'
import './Homepage.css'

const Homepage = () => {
  const [ click, setClick ] = useState(false);

  console.log(click)

  const handleClick = () => {
    setClick(!click)
  }

  const handleClose = () => {
    setClick(false)
  }

  return (
    <>
    {click ? <TogglePage handleClose={handleClose} /> : <div className="homepage">
      <Header 
        click={click}
        handleClick={handleClick}
        handleClose={handleClose}
      />
      <Main />
      <Footer />
  </div>}
    
    </>
    
  );
};

export default Homepage;
