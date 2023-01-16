// import ComingSoon from './pages/ComingSoon';
import Home from './pages/home'
import Event from './pages/events'
import Team from './pages/team'
import './App.css';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'

const App = () => {
	return (
		<>
		<Router>
			<Routes>
				<Route exact path='/' element={<Home/>}/>		
				<Route path='/team' element={<Team/>} />
				<Route path='/event' element={<Event/>} />		
			</Routes>
		</Router>
		</>
	);
}

export default App;