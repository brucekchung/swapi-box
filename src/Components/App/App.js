import React, { Component } from 'react'
import { cleanData } from '../../helper'
import { getStarWarsData } from '../../api'
import './App.css'

//components
import Banner from '../Banner/Banner'
import Nav from '../Nav/Nav'
import Main from '../Main/Main'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.getApiData('films')
  }

  async getApiData(type) {
    const data = await getStarWarsData(type)
    const formatData = await cleanData(data, type)

    this.setState({ [type]: formatData })
  }

  handleClick = (e) => {
    const type = e.target.id
    this.getApiData(type)
  }

  render() {
    return (
      <section>
        <Banner />
        <Nav handleClick={this.handleClick}/>
        <Main allData={this.state}/>
      </section>
    )
  }
}

export default App