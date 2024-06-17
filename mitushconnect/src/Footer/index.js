
import './index.css'
const footer = ()=>{
    return(
 <div className='Footer'>
     <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><a href="aboutUs">About Us</a></li>
            <li><a href="Compressions">Compressions</a></li>
            <li><a href="Customers service">Customers Service</a></li>
            <li><a href="Service">Service</a></li>
            <li><a href="Collections">Collection</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Explore</h4>
          <ul class="links">
            <li><a href="Recycling">Recycling Tips</a></li>
            <li><a href="Blogs">Blogs</a></li>
            <li><a href="Uploads">New Uploads</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Customer Service</h4>
          <ul class="links">
            <li><a href="#">Customer Agreement</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Site Map</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our Website  for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required/>
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div class="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </section>

 </div>


   
    )
}


export default footer;