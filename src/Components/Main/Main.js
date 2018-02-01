import React from 'react'
import { Switch, Route } from 'react-router-dom'

//components
import Prologue from '../Prologue/Prologue'
import People from '../People/People'
import Planets from '../Planets/Planets'
import Vehicles from '../Vehicles/Vehicles'
import Favorites from '../Favorites/Favorites'

const Main = ({ allData }) => (
  <Switch>
    { 
      allData.films &&
      <Route exact path='/' render={() => 
        ( <Prologue filmData={allData.films}/> )} />
    }

    { 
      allData.people &&
      <Route path='/People' render={() => 
        ( <People peopleData={allData.people} /> )} />
    }

    { 
      allData.planets &&
      <Route path='/Planets' render={() => 
        ( <Planets /> )} />
    }

    { 
      allData.vehicles &&
      <Route path='/Vehicles' render={() => 
        ( <Vehicles /> )} />
    }

    <Route path='/Favorites' render={() => 
      ( <Favorites /> )} />
      
  </Switch>
)

export default Main