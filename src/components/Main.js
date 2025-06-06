import Header from './공용/1.header/Header';
import Footer from './공용/3.footer/Footer';
import img from '../images/coupon/gay.jpg'
import chicken from '../images/icon/chicken-leg.png'
import plane from '../images/icon/plane.png'
import coffee from '../images/icon/coffee.png'
import dollar from '../images/icon/dollar.png'
import css from '../css/main.scss'
import ad from '../images/coupon/그라데이션.jpg'
function Main(){
    return(
        <div className="wrap">
            <Header></Header>
            <section>
                <h1 className='title'>우리 오늘 뭐할까?</h1>

                <p>저희 어플은 2030 세대들의 맞는 서비스를 제공하는 데이터 코스 추천 어플입니다</p>
                <p>알고리즘과 다른 사용자들이 추천하는 여러 장소들을 만나보세요</p>

                <button><a className='recommendation' href='#'>코스추천</a></button>

                <img src={img}></img>



                <h1>오늘의 카테고리</h1>
                <div className='categories'>
                    
                        <div className='categories_wrap_1'>
                            <div>
                                <a><img src={chicken}></img></a>
                                <p>맛집</p>
                            </div>

                            <div>
                            <a><img src={plane}></img></a>
                            <p>여가</p>
                            </div>
                        </div>

                        <div className='categories_wrap_2'>
                            <div>
                                <a><img src={coffee}></img></a>
                                <p>카페</p>
                            </div>

                            <div>
                                <a><img src={dollar}></img></a>
                                <p>예산</p>
                            </div>
                        </div>
                   
                    
                    <a><div><img src={ad}></img></div></a>

                </div>

                
            </section>
            <Footer/>
        </div>
    )
}

export default Main;