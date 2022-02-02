import React from 'react';
import "./index.scss"
import cover from '../../assets/FeaturedCoverImage.png'
import title from '../../assets/FeaturedTitleImage.png'
import triangle from '../../assets/right-arrow-black-triangle.png'

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='left-block'>
                <img className='title' src={title}/>
                <p className='text'>2021  18+  1h 48m<br/><br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className='buttons'>
                <button className='button-1'><img className='triangle' src={triangle}/>Play</button>
                <button className='button-2'>More Info</button>
            </div>

        </div>
    );
};

export default Homepage;
