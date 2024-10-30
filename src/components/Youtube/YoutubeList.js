import React from 'react';
import { YoutubeData } from '../../youtubeData';
import YoutubeItem from './YoutubeItem';
import "./YoutubeList.css"
const YoutubeList = () => {
    return (
    <div className="youtube-list">
    { YoutubeData.map((item,index) => { 
     
     return(
       <YoutubeItem
       key={item.id}
       YoutubeImage={item.image}
       YoutubeAvatar={item.avatar}
       title={item.title || item.image}
       author={item.author}
       className={index%2 === 0 ? "Background" : " "}
     ></YoutubeItem>
     )
     
    

    })}
    
   
  


 </div>)
};

export default YoutubeList;