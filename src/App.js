import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Banner from './component/Banner';
import Movies from './component/Movies';
import Pagination from './component/Pagination';
import { BrowserRouter ,Routes , Route } from 'react-router-dom';
import Favourite from './component/Favourites';



function App() {
  return (
    <BrowserRouter>
      
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<>
          <Banner />
          <Movies></Movies>
          {/*<Pagination></Pagination>*/}
        
        </>
        }/>
        <Route path="/favourites" element={<Favourite />}/>
      </Routes>
      
      
     
      
      {/*
      <h2> Trending music</h2>
      <h2> Pagination</h2>*/}

    </BrowserRouter>
    
  );
}

export default App;
