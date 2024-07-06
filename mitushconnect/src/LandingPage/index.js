import './index.css';
import React, {useState} from 'react';
 // import recycle from './recycle.png'


const LandingPage=() =>{
  
    return(
    <div className='landingpage'>
        


        <div className='openingtext'>
            <div className='cto'>
              <div className='header'> <h1 >Mitush
              Connect</h1></div>
             


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


export default LandingPage;

