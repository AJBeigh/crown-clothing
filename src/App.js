import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import Shop from './components/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in/sign-in.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{ 
      this.setState({
        currentUser: user,
      });
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  
  return (
    <div>
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/signin" component={SignInSignUp}/>
      </Switch>
    </div>
  );
  }
}

export default App;
