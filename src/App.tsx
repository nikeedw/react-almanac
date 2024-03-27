import { Outlet } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/UI/navbar/Navbar';

function App() {
	// const { isAuth } = useContext(AuthContext);
	// console.log(isAuth);

	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
}

export default App;