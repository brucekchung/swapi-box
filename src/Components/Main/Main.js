import React from 'react'
import { Switch, Route } from 'react-router-dom'

//components
import Prologue from '../Prologue/Prologue'
import People from '../People/People'
import Planets from '../Planets/Planets'
import Vehicles from '../Vehicles/Vehicles'
import Favorites from '../Favorites/Favorites'

const Main = ({ films }) => (
    <Switch>
      <Route exact path='/' render={() => (
          <Prologue load={films} />
        )}
      />
      <Route path='/People' render={() => (
          <People />
        )}
      />
      <Route path='/Planets' render={() => (
          <Planets />
        )}
      />
      <Route path='/Vehicles' render={() => (
          <Vehicles />
        )}
      />
      <Route path='/Favorites' render={() => (
          <Favorites />
        )}
      />
    </Switch>
)

export default Main