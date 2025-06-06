import css from '../../../css/style.scss'
import pic from '../../../images/external_pic/pa-bulgogi.jpg';

function List(){
    return(
        <div className='list-wrap'>
            <h1>오늘의 카페 & 디저트</h1>
            <ul>
            <li>
                    <a href='#'>
                        <div><img src={pic} alt="#" /></div>
                        <div className="info">
                            <p className='title'>가게이름</p>
                            <p className='sort'>카페 전문점</p>
                            <p className='price'>가격 2500원</p>
                        </div>
                    </a>
                </li>
               

                <li>
                    <a href='#'>
                    <div><img src={pic} alt="#" /></div>
                        <div className="info">
                            <p className='title'>가게이름</p>
                            <p className='sort'>카페 전문점</p>
                            <p className='price'>가격 2500원</p>
                        </div>
                    </a>
                </li>

                <li>
                    <a href='#'>
                    <div><img src={pic} alt="#" /></div>
                        <div className="info">
                            <p className='title'>가게이름</p>
                            <p className='sort'>카페 전문점</p>
                            <p className='price'>가격 2500원</p>
                        </div>
                    </a>
                </li> 

                
                <li>
                    <a href='#'>
                    <div><img src={pic} alt="#" /></div>
                        <div className="info">
                            <p className='title'>가게이름</p>
                            <p className='sort'>카페 전문점</p>
                            <p className='price'>가격 2500원</p>
                        </div>
                    </a>
                </li> 


                
                <li>
                    <a href='#'>
                    <div><img src={pic} alt="#" /></div>
                        <div className="info">
                            <p className='title'>가게이름</p>
                            <p className='sort'>카페 전문점</p>
                            <p className='price'>가격 2500원</p>
                        </div>
                    </a>
                </li> 

                
                <li>
                    <a href='#'>
                    <div><img src={pic} alt="#" /></div>
                        <div className="info">
                            <p className='title'>가게이름</p>
                            <p className='sort'>카페 전문점</p>
                            <p className='price'>가격 2500원</p>
                        </div>
                    </a>
                </li> 

            </ul>
        </div>
    )
}

export default List;