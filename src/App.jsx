import { BrowserRouter } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import{ About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
import Propulsion from "./components/Propulsion";
import LVM3 from "./components/LVM3";
import Footers from "./components/Footer";




const App = () => {

  return (
    <BrowserRouter>
    <div className="relative z-0 bg-black">
          <div className="bg-center bg-no-repeat bg-cover">

           <Navbar/>
          </div>
          <div className="relative z-0 bg-center bg-no-repeat bg-cover">
            <Hero />
            <StarsCanvas />
          </div>
        
          <About />
          <div className="relative z-0">
          <Propulsion />
          <StarsCanvas /> 
          </div>

          <Experience/>
          <div className="relative z-0">
          <Tech/>
          <Works/>
          <StarsCanvas /> 
          </div>
          <div className="relative z-0">
          
          <LVM3 />
          <StarsCanvas /> 
          </div>
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <div className="App ">
      <Footers />
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App
