import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Body from "./components/Body";


import { useState } from "react";

function App() {
  const [current, setCurrent] = useState("About");
  const [lastClick, setLastClick] = useState();
  return( 
    <div >
      <Navigation current = {current} setCurrent = {setCurrent}/>
      <section style={{backgroundColor:'blue',height:'100vh'}}>
        <Body current = {current} lastClick ={lastClick} setLastClick ={setLastClick}/>
        <Footer/>
      </section>
    </div>
    )
}

export default App;
