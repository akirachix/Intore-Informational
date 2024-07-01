import './index.css';
import React, {useState} from 'react';
 // import recycle from './recycle.png'


const Navbar=() =>{
  const [menuOpen,setMenuOpen] = useState(false)
  
  const toggleMenu = ()=> {
    setMenuOpen(!menuOpen)
  }
    return(
    <div className='landingpage'>
        <div className={`navbar ${menuOpen ? 'open' : ''}`} >

          <img className='logo' src="/Images/mitushlogo.png" alt='logo'/>
            {/* <h6 className='brand'>MitushConnect</h6> */}

            <div className='menu'>
              <button className= {`hamburgerMenu ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>

              </button>

            </div>
        
        


           <nav>
             {/* <img className='logo' src="/Images/mitushlogo.png" alt='logo'/>    */}
              <ul>
               
               <li><a href='Home'><b>Home</b></a></li>
               <li><a href='About' >About Us</a></li>
               <li><a href='Services'>Services</a></li>
               <li> <a href='Mission'>Mission</a></li>
               <li> <a href='Team'>Team</a></li> 
               <li> <a href='Contact'>Contact</a></li>
              </ul>
          
       
            </nav>


        </div>


        <div className='openingtext'>
            <div className='cto'>
              <h1 className='header'>Mitush
              <br></br>Connect</h1>


              <p className='text'>
             Creating  Impactful business collaborations to reduce textile waste in Kenya
              </p>
              <button className='Joinbtn' > Join Us <span><img className='handshake' src="/Images/hanshake.png" alt='handshake'/></span></button>
            </div>


            <div>
             <img className='landingimage1' src="/Images/recycle.png" alt='recycle'/>
            </div>
          


        </div>


    </div>
    )
}


export default Navbar;

