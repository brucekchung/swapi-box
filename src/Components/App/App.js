import React, { Component } from 'react'
import Cleaner from '../../helper'
import getStarWarsData from '../../api'
import './App.css'

//components
import Banner from '../Banner/Banner'
import Nav from '../Nav/Nav'
import Main from '../Main/Main'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      films: {}
    }
  }

  componentDidMount() {
    this.cleaner = new Cleaner()
    this.getApiData('films')
  }

  async getApiData(type) {
    const data = await getStarWarsData(type)
    const types = {
      films: this.cleaner.films(data),
      people: this.cleaner.people(data)
    }

    this.setState({ [type]: types[type] })
  }

  getStuff = async (e) => {
    const type = e.target
    this.getApiData(type)
  }

  render() {
    return (
      <section>
        <Banner />
        <Nav getStuff={this.getStuff}/>
        <Main films={this.state.films}/>
      </section>
    )
  }
}

export default App