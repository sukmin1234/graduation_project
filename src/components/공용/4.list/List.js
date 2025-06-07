import { useEffect, useState } from 'react';
import css from '../../../css/style.scss';

import pic from '../../../images/external_pic/pa-bulgogi.jpg';
import pic1 from '../../../images/external_pic/sushi.jpg';
import pic2 from '../../../images/external_pic/분식.jpg';
import pic3 from '../../../images/external_pic/스테이크.jpg';
import pic4 from '../../../images/external_pic/치킨.jpg';
import pic5 from '../../../images/external_pic/감자탕.jpg';
import pic6 from '../../../images/external_pic/짜장면.jpg';
import pic7 from '../../../images/external_pic/카페.jpg';
import { useNavigate, useSearchParams } from 'react-router-dom';

const allStores = [
  { title: '김밥천국', sort: '분식', price: '3500원', category: '분식', img: pic2 },
  { title: '한식당', sort: '한식', price: '8000원', category: '한식', img: pic },
  { title: '홍콩반점', sort: '중식', price: '9000원', category: '중식', img: pic6 },
  { title: '오사카스시', sort: '일식', price: '12000원', category: '일식', img: pic1 },
  { title: '미국스테이크', sort: '양식', price: '20000원', category: '양식', img: pic3 },
  { title: 'BHC치킨', sort: '치킨', price: '18000원', category: '치킨', img: pic4 },
  { title: '고기굽는집', sort: '고기', price: '15000원', category: '고기', img: pic1 },
  { title: '감자탕집', sort: '탕', price: '10000원', category: '탕', img: pic5 },
  { title: '카페라떼', sort: '카페', price: '4500원', category: '카페', img: pic7 },
  { title: '스윗디저트', sort: '디저트', price: '6000원', category: '디저트', img: pic7 },
];

const categories = ['전체', '한식', '중식', '일식', '양식', '치킨', '고기', '탕', '분식', '카페', '디저트'];

function List() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const defaultCategory = searchParams.get("category") || "전체";
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  
    // localStorage에서 좋아요 상태 불러오기
    const getInitialLikes = () => {
      const stored = localStorage.getItem("likes");
      if (stored) return JSON.parse(stored);
      return allStores.map(() => ({ count: 0, liked: false }));
    };
  
    const [likes, setLikes] = useState(getInitialLikes);
  
    // 좋아요 상태가 바뀔 때마다 localStorage에 저장
    useEffect(() => {
      localStorage.setItem("likes", JSON.stringify(likes));
    }, [likes]);
  
    // URL 변경 하면 카테고리 반영함
    useEffect(() => {
      setSelectedCategory(defaultCategory);
    }, [defaultCategory]);
  
    const filteredStores =
      selectedCategory === '전체'
        ? allStores
        : allStores.filter((store) => store.category === selectedCategory);
  
    return (
      <div className="list-wrap">
        <h1>오늘의 맛집 추천</h1>
  
        <div className="category-btns">
          {categories.map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? 'btn active' : 'btn'}
              onClick={() => {
                setSelectedCategory(cat);
                navigate(`?category=${cat}`);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
  
        <ul>
          {filteredStores.map((store, index) => {
            const actualIndex = allStores.findIndex((s) => s.title === store.title);
            const likeInfo = likes[actualIndex];
  
            return (
              <li key={store.title}>
                <a href="#">
                  <div><img src={store.img} alt={store.title} /></div>
                  <div className="info">
                    <p className="title">
                      {store.title}{' '}
                      <span
                        className="heart_button"
                        style={{ cursor: 'pointer', color: likeInfo.liked ? 'red' : 'gray' }}
                        onClick={(e) => {
                          e.preventDefault();
                          const updatedLikes = [...likes];
                          updatedLikes[actualIndex] = {
                            count: likeInfo.liked ? likeInfo.count - 1 : likeInfo.count + 1,
                            liked: !likeInfo.liked,
                          };
                          setLikes(updatedLikes);
                        }}
                      >
                        ♥
                      </span>
                    </p>
                    <p className="sort">{store.sort} 전문점 / ♥ {likeInfo.count}</p>
                    <p className="price">가격 {store.price}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
  export default List;
