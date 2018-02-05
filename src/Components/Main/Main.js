import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './Main.css'
import { object, func } from 'prop-types'

//components
import Prologue from '../Prologue/Prologue'
import People from '../People/People'
import Planets from '../Planets/Planets'
import Vehicles from '../Vehicles/Vehicles'
import Favorites from '../Favorites/Favorites'

const Main = ({ allData, favorite }) => (
  <Switch>
    { 
      allData.films &&
      <Route exact path='/' render={() => 
        ( <Prologue filmData={allData.films} favorite={favorite}/> )} />
    }

    { 
      allData.people && !allData.showImage &&
      <Route path='/People' render={() => 
        ( <People peopleData={allData.people} favorite={favorite}/> )} />
    }

    { 
      allData.planets && !allData.showImage &&
      <Route path='/Planets' render={() => 
        ( <Planets planetData={allData.planets} favorite={favorite}/> )} />
    }

    { 
      allData.vehicles && !allData.showImage &&
      <Route path='/Vehicles' render={() => 
        ( <Vehicles vehicleData={allData.vehicles} favorite={favorite}/> )} />
    }

    <Route path='/Favorites' render={() => 
      ( <Favorites favoriteData={allData.favorites} favorite={favorite}/> )} />

  </Switch>
)

Main.propTypes = {
  favorite: func.isRequired,
  allData: object.isRequired,
}

export default Main