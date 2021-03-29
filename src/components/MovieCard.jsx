import { Button } from "bootstrap";
import React from "react";
import {Card} from 'react-bootstrap'
import {RouterBrowse as Router,Link,Route} from 'react-router-dom'  ;


const MovieCard = ({ movie }) => {
  return (
    
    <div className='col-md-4 mt-3'>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            {movie.description}
          </Card.Text>
          <Card.Text>
            {"⭐".repeat(movie.rate)}
          </Card.Text>
        </Card.Body>
      </Card>
      <Router>
        <Route path="/Trailer" component={Trailer}>
      <button>Info</button>
      </Route>
      </Router>
    </div>
    
  );
};

export default MovieCard;
