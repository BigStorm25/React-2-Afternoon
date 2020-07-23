import React, { Component } from 'react';
import './App.css';
import data from './data';
import counter from './counter';
import faveMovies from './faveMovies'


class App extends Component() {
  constructor() {
    super()
    this.state = {
      name: `${data.first} ${data.last}`,
      city: '',
      country: '',
      employer: '',
      title: ''
    }
  }
  next(index) {

  }
  previous(index) {
    return ()
  }
  render() {
    return (
      <header>
        <h2>Home</h2>
      </header>
      <div className='App'>
        <h1>{this.state.name}</h1>
        <br></br>
        <h2>From: {this.state.city}</h2>
        <h2>Job Title: {this.state.title}</h2>
        <h2>Employer: {this.state.employer}</h2>
        <br></br>
        <h2>Favorite Movies: </h2>
        <h1 id='counter'>{data.id}/{data.id.length}</h1>
      </div>
        <data />
        <div className='background'>
        <button id='next' onClick={this.next}>Next</button>
        <button id='previous' onClick={this.previous}>Previous</button>
        </div>
      
    )
  }
}

export default App;
