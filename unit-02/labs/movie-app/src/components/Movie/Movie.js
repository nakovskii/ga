import React, { Component } from 'react';
import './Movie.css'

// import MovieList from '../MovieList/MovieList'
import Review from '../Review/Review'


const Movie = (props) => {
    console.log(props)
        return (
            <div className="Movie">
            <h1>Title: {props.props.title}</h1>
            <Review/>
            <div>Rating: {props.props.rating}</div>
            <p>Description: {props.props.description} </p>
          </div>
        )
    
}

export default Movie;