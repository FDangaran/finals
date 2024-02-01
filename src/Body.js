import React, { Component } from 'react'
import grab_generic from './IMAGES/grab_generic.png';
import pizza from './IMAGES/pizza.png';
import burger from './IMAGES/burger.png';
import bbq from './IMAGES/bbq.png';
import sushi from './IMAGES/sushi.png';
import vegan from './IMAGES/vegan.png';
import desserts from './IMAGES/desserts.png';
import BurgerKing from './IMAGES/BurgerKing.png';
import SnR from './IMAGES/S&R.png';
import SushiRoll from './IMAGES/SushiRoll.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default class Body extends Component{
render() {
return(
<div className="container-fluid promotion_parent">
  <div className="row">
    <div className="col-md-6 deals">
      <img className="img-fluid" src={grab_generic}  alt="Logo of Grab"/>
      <h5>Deals up to</h5>
      <h2 style={{color: '#00B14F'}}>30% OFF</h2>
    </div>
    <div className="col-md-6 exclusive">
      <img className="img-fluid" src={grab_generic} alt="Logo of Grab 2" />
      <h5>GrabFood</h5>
      <h2 style={{color: 'var(--secondary-default, #FD6D22)'}}>Exclusive</h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-2 bgcategory pizza">
      <img src={pizza} />
      <p>Pizza</p> 
    </div>
    <div className="col-md-2 bgcategory burger">
      <img src={burger} />
      <p>Burger</p> 
    </div>
    <div className="col-md-2 bgcategory bbq">
      <img src={bbq} />
      <p>BBQ</p> 
    </div>
    <div className="col-md-2 bgcategory sushi">
      <img src={sushi} />
      <p>Sushi</p> 
    </div>
    <div className="col-md-2 bgcategory vegan">
      <img src={vegan} />
      <p>Vegan</p> 
    </div>
    <div className="col-md-2 bgcategory desserts">
      <img src={desserts} />
      <p>Desserts</p> 
    </div>
  </div>
  <div className="row">
    <div className="col-md-12 restaurants">
      <h5>Nearby Restaurants</h5>
    </div>
  </div>
  <div className="row fdcategory">
    <div className="col-md-4 Burgerking resto">
      <a href="https://food.grab.com/ph/en/restaurant/burger-king-welcome-rotonda-delivery/AWhefkWqR-bAtZoKZM96?">
        <div className="card">
          <img className="card-img-top" src={BurgerKing}  alt="Burger King Logo"/>
          <div className="card-body">
            <h6 className="card-title">Burger King - UN Avenue Roxas</h6>
            <p className="card-text"><FontAwesomeIcon icon={faClock} className='fa-clock-o'/> 30-40 min ⋅ P79 min-sum</p>
            <div className="badge badge-secondary burger_icon">
              <img src={burger} />
              <p>Burger</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div className="col-md-4 snr resto">
      <a href="https://food.grab.com/ph/en/restaurant/s-r-new-york-style-pizza-lucky-chinatown-mall-available-for-long-distance-delivery-delivery/PHGFSTI000001d0?">
        <div className="card">
          <img className="card-img-top" src={SnR} alt="S&R Logo" />
          <div className="card-body">
            <h6 className="card-title">S&R New York Style Pizza - SM</h6>
            <p className="card-text"><FontAwesomeIcon icon={faClock} className='fa-clock-o'/> 40-60 min ⋅ P626 min-sum</p>
            <div className="badge badge-secondary burger_icon">
              <img src={burger} />
              <p>Burger</p>
            </div>
            <div className="badge badge-secondary pizza_icon">
              <img src={pizza} />
              <p>Pizza</p>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div className="col-md-4 SushiRoll resto">
      <a href="https://food.grab.com/ph/en/restaurant/kanzen-sushi-roll-p-noval-street-available-for-long-distance-delivery-delivery/2-CZLJRYNXTP4EPA?">
        <div className="card">
          <img className="card-img-top" src={SushiRoll}  alt="Kanzen Sushi Roll Logo"/>
          <div className="card-body">
            <h6 className="card-title">Kanzen Sushi Roll - P Noval Strt</h6>
            <p className="card-text"><FontAwesomeIcon icon={faClock} className='fa-clock-o'/> 20-40 min ⋅ P595 min-sum</p>
            <div className="badge badge-secondary burger_icon">
              <img src={sushi} />
              <p>Sushi</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>
) 
}
}