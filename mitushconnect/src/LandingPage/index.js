import './index.css';
// import recycle from './recycle.png'

const Navbar=() =>{
    return(
    <div className='landingpage'>
        <div className='navbar'>
            <h6 className='brand'>MitushConnect</h6>

            <div className='nav'>
                
            <a href='Home'>Home</a>
            <a href='About'>About Us</a>
            <a href='Services'>Services</a>
            <a href='Mission'>Mission</a>
            <a href='Team'>Team</a>
            <a href='Contact'>Contact Us</a>
            </div>

        </div>

        <div className='openingtext'>
            <div className='cto'>
            <h1 className='header'>MitushConnect</h1>

            <p className='text'>
             Creating  Impactful business collaborations to reduce 
             textile waste in Kenya
            </p>
            <button>Join Us</button>
            </div>

            <div className='landingimage'>
            <img src="/Images/recycle.png" alt='recycle'/>
            </div>
            

        </div>

    </div>
    )
}

export default Navbar;