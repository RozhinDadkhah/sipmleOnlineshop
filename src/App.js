import Header from "./containes/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductsList from "./containes/ProductsList";
import ProductDetail from "./containes/ProductDetail";
import './App.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductsList} />
          <Route path='/product/:productId' exact component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
