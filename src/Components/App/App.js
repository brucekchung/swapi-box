import React, { Component } from 'react'
import './App.css'
import Cleaner from '../../helper'

//components
import Prologue from '../Prologue/Prologue'
import Banner from '../Banner/Banner'

class App extends Component {
  constructor(props) {
    super(props)
    this.cleaner
    this.state = {}
  }

  componentDidMount() {
    this.cleaner = new Cleaner()
    this.apiCall()
  }

  apiCall() {
    const randomMovie = this.cleaner.randomMovie()
    let movie

    fetch(`https://swapi.co/api/films/${randomMovie}/`)
      .then(data => data.json())
      .then(data => movie = this.cleaner.movie(data))
      //.then(data => console.log('movie ', movie))
      .then(data => this.setState({load: movie}))
  }

  render() {
    return (
      <div>
        <Banner />
        <Prologue prologue={this.state.load} />
      </div>
    )
  }
}

export default App