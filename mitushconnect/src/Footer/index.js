
import './index.css'
const footer = ()=>{
    return(
 <div>

<footer class="footer">
        <div class="box">
          
            <ul class="links">
                <li><a href="#"> Home </a></li>
                <li><a href="#"> Blogs </a></li>
                <li><a href="#"> Services </a></li>
                <li><a href="#"> About Us </a></li>
                <li><a href="#"> Contact Us </a></li>
            </ul>
        </div>
       
        <div class="box">
            <h2> Chat with us</h2>
            <img  className = "one" src="image/facebook50.png" alt="facebook" />
          <img className= " two" src="image/twitter11.png" alt="twitter"/>
            <img className= "three" src="image/linkedin50.png" alt="linke"/>
          
         </div>

        <div class="box">
            <h2> News Letter </h2>
            <form action="" class="registration">
                <input type="email" name="email" id="email" placeholder="Enter your email "/>
                <button type="submit"> Subscibe Now </button>
            </form>
        </div>
    </footer>
 </div>


   
    )
}


export default footer;