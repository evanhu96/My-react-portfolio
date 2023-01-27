import "./App.css";
import Navigation from "./components/Navigation";

import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState("about");


  return( 
    <div >
      <Navigation selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
      <section style={{backgroundColor:'blue',height:'100vh'}}>

      </section>
    </div>
    )
}

export default App;
