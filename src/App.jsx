import { useState } from 'react';
import './App.css';
import LandingPage from './components/Pages/LandingPage';
// import About from './components/Pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
      {/* <About/> */}
    </>
  )
}

export default App;
