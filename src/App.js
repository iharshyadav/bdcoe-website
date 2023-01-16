// import ComingSoon from './pages/ComingSoon';
import Home from './pages/home'
import Event from './pages/events'
import './App.css';
import {Routes ,Route} from 'react-router-dom'

const App = () => {
	return (
		<>
		<Routes>
		<Route path='/' element={<Home/>}/>		
		<Route path='/team' element={<Home/>} />
		<Route path='/event' element={<Event/>} />		
		</Routes>
		</>
	);
}

export default App;