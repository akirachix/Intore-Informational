import './index.css';
import React, {useState} from 'react';
 // import recycle from './recycle.png'


const LandingPage=() =>{
  
    return(
    <div className='landingpage'>
        


            <div className='openingtext'>
              <h1 className='landingPage-heading'>Mitush Connect</h1>
          
           
              <p className='landing-text' >
             Creating  Impactful business collaborations to reduce textile waste in Kenya
              </p>
              
              <button className='Joinbtn' > Join Us 
              <img className='handshake' src="/Images/hanshake.png" alt='handshake'/>
              </button>
            </div>


            <div className='landingimage'>
             <img className='photo' src="/Images/recycle.png" alt='recycle'/>
            </div>
          




    </div>
    )
}


export default LandingPage;

