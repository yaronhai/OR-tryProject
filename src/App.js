import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route} from 'react-router-dom';
import {
  onAuthStateChangedListener, 
  createUserDocumentFromAuth
} from './utils/firebase/firebase';

import Home from './Pages/Home/Home';
import NavBar from './Pages/NavBar/NavBar.jsx';
import CurrentUser from './Pages/CurrentUser/CurrentUser';
import Rooms from './Pages/Rooms/Rooms.jsx'
import './App.css';
import SignIn from './Pages/sign-in/sign-in';
import { setCurrentUser } from './redux/user/user.actions';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  },[dispatch]) //dispatch never changes!

  return (
    <Routes>
      <Route path = '/' element = {<NavBar />}>
        <Route index element = { <Home />} />
        <Route path='user' element = {<CurrentUser /> } /> 
        <Route path='rooms' element = { <Rooms /> } /> 
        <Route path='sign-in' element = { <SignIn /> } />
      </Route>
    </Routes>
 
  );
}
export default App;
