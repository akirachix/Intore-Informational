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
        
        
        


           <nav className={`list ${isMenuOpen ? 'open' : ''}`}>
             
              <ul>
               
               <li><a href='#Home'onClick={toggleMenu} className='link'><b>Home</b></a></li>
              
               <li><a href='#About' onClick={toggleMenu} className='link'><b>About</b></a></li>
               <li><a href='#OurServices'onClick={toggleMenu} className='link'>Services</a></li>
               <li> <a href='#Mission'onClick={toggleMenu}className='link'>Mission</a></li>
               <li> <a href='#Team'onClick={toggleMenu}className='link'>Team</a></li> 
               <li> <a href='#Contact'onClick={toggleMenu} className='link'>Contact</a></li>
              </ul>
          
       
            </nav>
            </div>


    )
}

export default Navbar;