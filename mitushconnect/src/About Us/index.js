import './index.css'
const About = ()=>{
    return(
                
        <div>   
          <h1 className='about-heading'>About Us</h1>
          
          <div className='about-container'>
           
           <div className="about-text">
           <p > 
            MitushConnect believes in creating and enabling sustainable partnerships
            between mitumba traders and 
            recycling companies to reduce textile waste in Kenya.
            Our goal is to empower Mitumba traders
            through impactful partnerships with recyclers.
            </p>

           </div>
           

           <div  className = "image" >
            <img className='image' src="/Images/about2.png" alt='about2'/>
           </div>

          </div>

         </div>
     
    )
}
export default About;
