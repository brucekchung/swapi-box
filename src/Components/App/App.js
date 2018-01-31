import React, { Component } from 'react'
import Cleaner from '../../helper'
import './App.css'

//components
import Banner from '../Banner/Banner'
import Nav from '../Nav/Nav'
import Main from '../Main/Main'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      load: {}
    }
  }

  async componentDidMount() {
    this.cleaner = new Cleaner()
    const data = await this.cleaner.apiCall()

    this.setState({ load: this.cleaner.movie(data) })
  }

  getStuff(e) {
    console.log(e.target.id)
  }

  render() {
    return (
      <section>
        <Banner />
        <Nav getStuff={this.getStuff}/>
        <Main prologueData={this.state.load}/>
      </section>
    )
  }
}

export default App