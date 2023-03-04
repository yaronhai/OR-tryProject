import Home from './Pages/Home/Home';
import NavBar from './Pages/NavBar/NavBar.jsx';
import CurrentUser from './Pages/CurrentUser/CurrentUser';
import Rooms from './Pages/rooms/rooms.jsx'
import { Routes, Route} from 'react-router-dom';
import './App.css';
import SignIn from './Pages/sign-in/sign-in';


function App() {
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
