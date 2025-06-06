import { Link } from "react-router-dom";
import Header from "../공용/1.header/Header";
import Footer from "../공용/3.footer/Footer";

import bibimbap from '../../images/icon/bibimbap.png'
import dumpling from '../../images/icon/dumpling.png'
import pizza from '../../images/icon/pizza.png'
import chicken from '../../images/icon/chicken-leg2.png'
import meat from '../../images/icon/meat.png'
import sundae from '../../images/icon/sundae.png'
import tteokbokki from '../../images/icon/tteokbokki.png'
import nigiri from '../../images/icon/nigiri.png'

import korean from '../../images/coupon/한식 쿠폰.jpg'
import css from '../../css/popular_spot.scss'
import Popular_spot_list from "../공용/4.list/Popular_spot_list";
function Popular_spot(){
    return(
        <div className="pop_wrap">
            <Header/>

            <section className="popular-spot-section">
                
                <div className="coupon_image">
                <span>OO식당 <br/><br/> <br/>현재 최대 30% <br/><br/> <br/>할인중!</span><img src={korean}></img>
                </div>
                
                
                
                <ul>
                    <li>                      
                        <Link className="link_tag">
                            <img src={bibimbap}></img>
                            <p>한식</p>
                        </Link>
                    </li>
                    <li>                      
                        <Link className="link_tag">
                            <img src={dumpling}></img>
                            <p>중식</p>
                        </Link>
                    </li>
                    <li>                      
                        <Link className="link_tag"> 
                            <img src={pizza}></img>
                            <p>양식</p>
                        </Link>
                    </li>
                    <li>                      
                        <Link className="link_tag">
                            <img src={chicken}></img>
                            <p>치킨</p>
                        </Link>
                    </li>
                    <li>                      
                        <Link className="link_tag">
                            <img src={meat}></img>
                            <p>고기</p>
                        </Link>
                    </li>
                    <li>                      
                        <Link className="link_tag">
                            <img src={sundae}></img>
                            <p>탕</p>
                        </Link>
                    </li>
                    <li>                      
                        <Link className="link_tag">
                            <img src={tteokbokki}></img>
                            <p>분식</p>
                        </Link>
                    </li>
                    <li>                      
                        <Link className="link_tag">
                            <img src={nigiri}></img>
                            <p>일식</p>
                        </Link>
                    </li>
                    
                </ul>


                <h1>오늘의 맛집</h1>

                <div className="flex_wrap">
                    <Popular_spot_list/>
                    <Popular_spot_list/>
                    <Popular_spot_list/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Popular_spot;