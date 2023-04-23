import {React, useEffect, useState} from 'react';
import NewsCard from './NewsCard';
import Navbar from './Navbar';

import axios from 'axios';
const NewsList = () => {
    const [ news, setNews]= useState([]);
  useEffect( ( ) =>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=4d449fe5e5cd42f7bde72dfde2876919`)
      .then( (res)=> {
        setNews(res.data.articles);
     });
  }, [news ]); // <-- empty array means "run once"

  return (
    <>
    <Navbar/>
    <div className="container my-5">
      <div className="row text-center">
        {news.map((val) => (
          <div className="col my-3">
            <NewsCard title={val.title} description={val.description} imageUrl={val.urlToImage} content= {val.content} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default NewsList;
