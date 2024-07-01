import './index.css'
const About = ()=>{
    return(
                
        <div>   
          <h1 className='about'>About Us</h1>
          
          <div className='aboutdiv'>
            <div className='aboutUs'>
           {/* <h1 className='aboutHeading'>Mitush
           <br/>Connect</h1> */}
           <p className="abouttext"> 
            MitushConnect believes in creating and<br></br> enabling sustainable partnerships
           
            to  <br></br> between mitumba traders and 
            recycling companies  <br></br>to reduce textile waste in Kenya.
            <br></br>Our goal is to empower Mitumba traders
            through<br></br>impactful partnerships with recyclers.
            </p>
           </div>

           <div >
            <img className='image' src="/Images/about2.png" alt='about2'/>
           </div>

          </div>

         </div>
     
    )
}
export default About;