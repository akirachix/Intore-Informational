
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
<<<<<<< HEAD
import OurServices from "./OurServices ";
import About from "./About Us";
import Team from "./Team";
=======
import './App.css';
import OurServices from "./OurServices";
import Team from "./Team";
import Footer from "./Footer";
>>>>>>> 5e8b9cfadc69865b7a211a3a4e4b66d136a21cac

const App = () =>{
  return (
    <div >
       <Navbar/>
       <LandingPage/>
<<<<<<< HEAD
       <div id="OurServices"><OurServices/></div>
       <div id="About"><About/></div>
      <div id="Team"><Team/></div>  
=======
       <OurServices/> 
       <Team/>
       <Footer/>

>>>>>>> 5e8b9cfadc69865b7a211a3a4e4b66d136a21cac
    </div>
     
   
  );
}
export default App;

