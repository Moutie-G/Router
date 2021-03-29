import { useState } from 'react';
import './App.css';
import {movies} from './assets/Data'
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
//mport { BrowserRoute,Link } from 'react-router-dom';



function App() {
  const [listMovie, setListMovie] = useState(movies)
  const addFilm=(form)=>{
    //form={title,posterUrl,description,rate}
    setListMovie([form,...listMovie])

  }
  return (
    <div className='container-fluid' >
      <MovieList listMovie={listMovie} addFilm={addFilm} />
    </div>
  );
}
//<switch>
//<Route path ="/:id" component ={App}/>
//<Route path ="/App/MovieList" component={MovieList}/>
//<route path ="/App/Movie/Card" component ={MovieCard}/>
//<route path ="/App/Add/Movie" componet ={MovieCard}/>
//</switch>

export default App;
