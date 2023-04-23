import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsList from './component/NewsList';
import NewsContent from './component/NewsContent';

function App( ) {


  return (
  <>




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









































