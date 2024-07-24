import './index.css';
import React, {useState} from 'react';

const Navbar=() =>{
    const [isMenuOpen,setIsMenuOpen] = useState(false)
    
    const toggleMenu = ()=> {
      setIsMenuOpen(!isMenuOpen)
    }

    return(

   <div className={`navbar ${isMenuOpen ? 'open' : ''}`} >

               <div className='bothLogo'>
          <img className='logo' src="/Images/mitushlogo.png" alt='logo'/>

            <div className='menu'>
              <button className= {`hamburgerMenu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>

              </button>

            </div>
            </div>
        
        
        


           <nav className='list'>
             
              <ul>
               
               <li><a href='Home'><b>Home</b></a></li>
               <li><a href='About' >About</a></li>
               <li><a href='Services'>Services</a></li>
               <li> <a href='Mission'>Mission</a></li>
               <li> <a href='Team'>Team</a></li> 
               <li> <a href='Contact'>Contact</a></li>
              </ul>
          
       
            </nav>
            </div>


    )
}

export default Navbar;