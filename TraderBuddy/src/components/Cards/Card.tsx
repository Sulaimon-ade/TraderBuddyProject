import './card.css'
import Rectangle7Image from '../../assets/Rectangle7.png';
import Rectangle9Image from '../../assets/Rectangle9.png';

function card() {
  return (
    <>
      <section className='cardSection'>
        <div className="firstCard">
          <div className='firstCardText'>
            <h2>get insight about the <br /> crypto market with  just <br /> a click of a button.</h2>
            <p>get detailed insight about different currencies, <br /> and currency pairs with ai. built for traders, by <br /> traders.</p>
          </div>
          <img src={Rectangle7Image} alt='Card' style={{ width: '100%', borderRadius: '10px' }} />
        </div>
        <div className="secondCard">
          <div className='secondCardText'>
            <h2>perform complex <br /> technical, and <br /> fundamental analysis <br /> with just a click.</h2>
            <p>save time performing complex <br /> analysis with our ai powered <br /> analysis tool.</p>
          </div>
          <img src={Rectangle9Image} alt='Card' style={{ width: '100%', borderRadius: '10px' }} />
        </div>
      </section>
    </>
  )

}
export default card