import React, {useEffect, useRef, useState} from 'react';
import home from '../../assets/icons/Group 46.png'
import watchLater from '../../assets/icons/Group 47.png'
import genres from '../../assets/icons/Group 53.png'
import movies from '../../assets/icons/Group 54.png'
import shows from '../../assets/icons/Group 56.png'
import search from  '../../assets/icons/ICON - Search.png'
import avatar from '../../assets/david-beckham-portrait-painting-atsurge-jk-wang.jpg'
import './index.scss'

const Menu = ({items}) => {
    const [active,setActive]=useState(false)
    const [selectItem,setSelectItem]= useState(0)


    let hendler=()=>{
        setActive(true)
    }

    const rootEl = useRef(null);

    useEffect(() => {
        const onClick = e => rootEl.current.contains(e.target) || setActive(false);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    const changeSelectItem=(index)=>{
        setSelectItem(index)
        setActive(true)}
    return (
        <div>
            {
                active&&(
                    <div className='menu-block' >
                        <div className='avatar-block'><img className='avatar-img' src={avatar}/>
                            <h2 >David</h2></div>
                        <div className='active-menu' ref={rootEl}>
                        {
                            items.map((item,index)=>(
                                <button onClick={()=>changeSelectItem(index)} className={selectItem===index?'select-item':'menu-button'} key={`${item}-${index}`}><h1>{item}</h1></button>
                            ))
                        }
                        </div>
                    </div>
                )}
            <div className='menu' onMouseOver={hendler}>
                <a className='circle' href="">
                    <img className='icon' src={search}/>
                </a>
                <a className='circle' href="">
                    <img className='icon' src={home}/>
                </a>
                <a className='circle' href="">
                    <img className='icon' src={shows}/>
                </a>
                <a className='circle' href="">
                    <img className='icon' src={movies}/>
                </a>
                <a className='circle' href="">
                    <img className='icon' src={genres}/>
                </a>
                <a className='circle' href="">
                    <img className='icon' src={watchLater}/>
                </a>
            </div>
        </div>

    );
};

export default Menu;
