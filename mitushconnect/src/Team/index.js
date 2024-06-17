import './index.css'
const Team= ()=>{
    return (
    
        <div id='container'>
        <h1 className='h1'>Team</h1>
        <div id='teams' >
       
            <div className='team'>
            <img src="/Images/Aline.jpeg" alt="Aline" className='team' />
            <p> Aline Mutesi <br/>Software Developer </p>
            </div>
         
            <div className='team'>
            <img src="/Images/Chemtai.jpeg" alt="Chemtai" className='team'  />
            <p> Mercy Chemtai <br/>Software Developer </p>
            </div>
            
            <div className='team'>
            <img src="/Images/Faith.jpeg" alt="Faith" className='team'/>
            <p> Faith Wachira<br/>Software Developer </p>
            </div>
            
            <div className='patricia'>
            <img src="/Images/Patricia.jpeg" alt="Patricia" className='patricia'/>
            <p> Patricia Ainembabazi<br/>Software Developer </p>
           </div>

           <div className='raziah'>
            <img src="/Images/Raziah.jpeg" alt="Raziah"  className='raziah'/>
            <p> Raziah Abdullahi <br/>Software Developer </p>
            </div>
            </div>
            </div>

      
    )
}
export default Team