import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import './index.scss'

const Trending = ({items}) => {
    return (
        <div className='slider-block'>
            <h1 style={{fontWeight:'inherit',marginBottom:'.5em'}}>Trending Now</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={8}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    items.map((item)=>(
                        <SwiperSlide key={item.Id}><a style={{cursor:'pointer'}}><img className="slider"  src={`../../assets/${item.CoverImage}`}/></a></SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
};

export default Trending;
