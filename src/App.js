import React, {useState, useEffect} from 'react';

import Sidebar from './component/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsList from './component/NewsList';
import NewsContent from './component/NewsContent';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = async () => {
    const response = await fetch(`https://api.example.com/search?q=${searchQuery}`);
    const data = await response.json();
    setSearchResults(data);
  };
    return (
    <nav>
      <input type="text" value={searchQuery} onChange={handleSearchInput} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </nav>
  );
}








function App( ) {


  return (
  <>



{/* 
 <div className="App">
      <Sidebar />
    </div> */}



    {/* <div className="container my-5"  >

      
        <div className="row text-center">
           {
            news.map((val)=>{
              return (
                <div className="col my-3">
                 <div class="card" style={{width: "18rem"}}>
  <img src={val.urlToImage} class="card-img-top" alt="..."/>
  
  <div class="card-body">
    <h5 class="card-title">{val.title}</h5>
    <p class="card-text">{val.description}</p>
    <a href="https://newsapi.org/" class="btn btn-primary">See Details</a>
    
  </div>
</div>
</div>
              )
                })
              }
           </div>
            </div> */}
  
<Routes>
          <Route  path="/" element={  <NewsList />}/>
          <Route path ="/content" element={<NewsContent />}/>
          {/* <Route path="/content/:id">
            <NewsCard />
          </Route> */}
</Routes>


            
      </>
  );
}
export default App;









































