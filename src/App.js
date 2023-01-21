import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
// import components
import Home from './components/home/Home';
import Create from './components/create/Create';
import Search from './components/search/Search';
import Recipe from './components/recipe/Recipe';
import NavBar from './components/NavBar';
// styles
import './App.css'

// import React Bootstrap
// import 

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/search" component={Search} />
        <Route path="/recipe:id"> 
          <Recipe />
        </Route>
        </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
