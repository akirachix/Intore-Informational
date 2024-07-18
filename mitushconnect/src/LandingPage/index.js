import './index.css';
import React, {useState} from 'react';
 


const LandingPage=() =>{
  
    return(
    <div className='landingpage'>
        


            <div className='openingtext'>
              <div className='landingPage-heading'>
              <h1 >Mitush Connect</h1>
              </div>



              <div className='landing-text'>
              <p  >
             Creating  Impactful business collaborations to reduce textile waste in Kenya
              </p>
                </div>            
          
           
              
              
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

