
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import OurServices from "./OurServices ";
import About from "./About Us";
import Team from "./Team";

const App = () =>{
  return (
    <div >
       <Navbar/>
       <LandingPage/>
       <div id="OurServices"><OurServices/></div>
       <div id="About"><About/></div>
      <div id="Team"><Team/></div>  
    </div>
     
   
  );
}
export default App;

