import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import Shop from './components/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
