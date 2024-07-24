
import './index.css'
const Footer = ()=>{
    return(
 <div>

<footer class="footer">
        <div class="footer-col">
          
            <ul class="links">
                <li><a href="#"> Home </a></li>
                <li><a href="#"> Blogs </a></li>
                <li><a href="#"> Services </a></li>
                <li><a href="#"> About Us </a></li>
                <li><a href="#"> Contact Us </a></li>
            </ul>
        </div>
       
        <div class="footer-col">
            <h2> Chat with us</h2>
            <img  className = "facebook" src="image/facebook50.png" alt="facebook" />
          <img className= " twitter" src="image/twitter11.png" alt="twitter"/>
            <img className= "linkedin" src="image/linkedin50.png" alt="linke"/>
          
         </div>










        <div class="footer-col">
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


export default Footer;