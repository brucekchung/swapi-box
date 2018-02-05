import React, { Component } from 'react'
import { getStarWarsData } from '../../api'
import { cleanData } from '../../cleaner'
import { checkFavorite, addFavorite, removeFavorite } from '../../helper'

//style
import hyperspace from '../../assets/images/hyper-space.gif'
import lightsaber from '../../assets/images/lightsaber.gif'
import trench from '../../assets/images/trench.gif'
import './App.css'

//components
import Banner from '../Banner/Banner'
import Nav from '../Nav/Nav'
import Main from '../Main/Main'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
      showImage: false,
    }
  }

  componentDidMount() {
    this.getApiData('films')
    for (var i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      const data = JSON.parse(localStorage.getItem(key))

      this.setState({[key]: data})
    }
  }

  async getApiData(type) {
    if (!localStorage[type]) {
      const data = await getStarWarsData(type)
      const formatData = await cleanData(data, type)

      localStorage.setItem([type], JSON.stringify(formatData))
      this.setState({ [type]: formatData })
    }
  }

  handleClick = (e) => {
    const type = e.target.id
    this.getApiData(type)

    this.setState({showImage: true})
    setTimeout(() => {
      this.setState({showImage: false})
    }, 3500)
    this.imageSource(type)
  }

  toggleFavorite = (e) => {
    const name = e.target.closest('div').id
    const isFavorite = checkFavorite(this.state, name)

    if (isFavorite) {
      this.setState(removeFavorite(this.state, name))
    } else {
      this.setState(addFavorite(this.state, name))
    }
  }

  imageSource(type) {
    if(type === 'planets') this.image = hyperspace
    if(type === 'people') this.image = lightsaber
    if(type === 'vehicles') this.image = trench
  }

  render() {
    return (
      <section className="content">
        <Banner />
        <Nav handleClick={this.handleClick} />
        {
          this.state.showImage &&
          <img className="load-image" src={this.image} alt="starwars"/>
        }
        <Main allData={this.state} favorite={this.toggleFavorite} />
      </section>
    )
  }
}

export default App