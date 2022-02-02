import './App.css';
import Homepage from "./Components/Homepage";
import Menu from "./Components/Menu";
import {useEffect, useState} from "react";
import Trending from "./Components/Trending";
import cover from './assets/FeaturedCoverImage.png'

function App() {
    let menu=['Search','Home','TV Shows','Movies','Genres','Watch Leter']
    const [tending,setTending]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/data.json').then((resp)=>
            resp.json()).then(json=>{setTending(json.TendingNow)
            });
    },[])
  return (
    <div className="App">
        <img className='responsive' src={cover}/>
        <Homepage/>
        <Menu items={menu}/>
        <Trending items={tending}/>

    </div>
  );
}

export default App;
