import './App.css'
import Homepage from './Homepage/homepage'
import Product from './Product/Product'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from './Homepage/Header'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch >
      <Route exact path='/'> 
      <Homepage /> 
      </Route>

      <Route path='/product'>
        <Product />
      </Route>
        
        </Switch>

        
    </div>
  )
}

export default App
