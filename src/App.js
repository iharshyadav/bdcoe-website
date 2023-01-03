// import ComingSoon from './pages/ComingSoon';
import Home from './pages/home'
import './App.css';
import {Routes ,Route} from 'react-router-dom'

const App = () => {
	return (
		<>
		<Routes>
		<Route path='/' element={<Home/>}/>		
		<Route path='/team' element={<Home/>} />
		<Route path='/event' element={<Home/>} />		
		</Routes>
		</>
	);
}

export default App;