import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import Homepage from './components/Homepage';

function App() {

  const [ loading, setLoading ] =  useState(true)
 
  useEffect(() => {
    // this simulates an async action, after which the component will render the content
    demoAsyncCall().then(() => setLoading(false));
  },[])

  if(loading){
    return null
  }

  return (
    <div>
      <Homepage />
    </div>
  );
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 4000));
}

export default App;
