//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
//import {FiSearch} from 'react-icons/fa'


const App = () => {
  //92e40431
  const API_URL = 'http://www.omdbapi.com?apikey=92e40431';
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  const[movies,setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    searchMovies('Spiderman');
  }, [])


  return (
    
  <div className="App">
      <div><h3 className='title'>A Movie App</h3></div>
    <header className="App-header">
    <br /> <br />
    <input type="text" 
    placeholder='Search Movies'
    value={searchTerm}
    onChange={(e)=> setSearchTerm(e.target.value)}
    
    />
    <br />
    <button onClick={searchMovies(searchTerm)}>Search</button>
    
    {
      movies?.length > 0
      ?(
        <div className="container">
        {movies.map((movie) => (
          <MovieCard movie = {movie}/>
        ))}
 
     </div>

      ):
      (
        <div className="empty">There are no movies</div>
      )
    }
       
    
    


      </header>
      
  </div>
  );
}

export default App;
