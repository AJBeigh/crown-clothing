import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import Shop from './components/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in/sign-in.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{ 
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
            userRef.onSnapshot( snapShot => {
              setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data()
                });
            });
      }
      else{
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
  
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/signin" component={SignInSignUp}/>
      </Switch>
    </div>
  );
  }
}
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
