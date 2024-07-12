import { useState } from "react";
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-[80%] mx-auto py-5">
    <Header setOpenMenu={setOpenMenu}/>     
    <HeroSection openMenu={openMenu}/> 
    </div>
  )
}

export default App
