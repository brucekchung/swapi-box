import React, { Component } from 'react'
import { getStarWarsData } from '../../api'
import { cleanData } from '../../cleaner'
import { checkFavorite, addFavorite, removeFavorite } from '../../helper'
import './App.css'

//components
import Banner from '../Banner/Banner'
import Nav from '../Nav/Nav'
import Main from '../Main/Main'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: []
    }
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

  toggleFavorite = (e) => {
    const name = e.target.closest('div').id
    const isFavorite = checkFavorite(this.state, name)

    if (isFavorite) {
      this.setState(removeFavorite(this.state, name))
    } else {
      //also need to set favorite in state.type
      this.setState(addFavorite(this.state, name))
    }
  }

  render() {
    return (
      <section>
        <Banner />
        <Nav handleClick={this.handleClick} />
        <Main allData={this.state} favorite={this.toggleFavorite} />
      </section>
    )
  }
}

export default App