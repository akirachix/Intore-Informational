
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import './App.css';

import Services from "./OurServices"
import Footer from "./Footer"

const App = () =>{
  return(
    <div>
        <Services/>
        <Footer/>
    </div>
  )
}
// import App from "./Team";

import OurServices from "./OurServices";

function App() {
  return (
    <div >
       <Navbar/>
       <LandingPage/>
       <OurServices/> 
    </div>
  )

}

export default App;

