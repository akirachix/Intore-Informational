import './index.css'
function OurServices(){
    return(

        <div className="div-container">
            <h1 className='services-heading'>Our Services</h1>

        <div className='cardsContainer'>
       
        <div className="cardsText" id='delivery-card'>
            <h1 className="h1Tag">Pick-up</h1>
            <p>
            Enjoy convenient door to door delivery at an affordable rate with our network of experienced riders.
            Save time with our errand services where we pick up your bales at your preferred location.
            </p>
        </div>

        <div className="cardBox" id='delivery-card'>
            <h1 className="h1Tag">Company</h1>
            <p>
            Through the facilitation of a circular economy for textiles and footwear, we promote 
            environmental conservation.We make the most of the resources available, assist the 
            communities impacted by textile waste, and create new employment opportunities by 
            gathering, classifying, and upcycling unwanted textiles.
            </p>
        </div>

        <div className="cardStack" id='delivery-card'>
            <h1 className="h1Tag">Drop-Off</h1>
            <p>
            Recycling and Upcycling Services. The recycling company can process the sorted materials 
            into new products such as insulation, rags, or other textile products. This helps reduce
             waste and creates new revenue streams for the traders
            </p>
        </div>

    </div>
    
    </div>
        
        
    )
}

export default OurServices;