import React from 'react';
import { useLocation } from 'react-router-dom';


const NewsCard = (props) => {
     const location = useLocation();
  const { content } = location.state;
return (
    <> 
   <p>{location.state}</p>
     </>
)
  


}

export default NewsCard;