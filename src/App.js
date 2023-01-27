import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import { useState } from "react";

function App() {
  const [current, setCurrent] = useState("about");


  return( 
    <div >
      <Navigation current = {current} setCurrent = {setCurrent}/>
      <section style={{backgroundColor:'blue',height:'100vh'}}>
        <Footer/>
      </section>
    </div>
    )
}

export default App;
