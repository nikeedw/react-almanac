import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import { AuthContext } from '../../../context';


const Navbar: React.FC = () => {
	const navigate = useNavigate();
	const { setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth');
	}

	return (
		<div className="navbar">
			<Button onClick={logout}>
				Выйти
			</Button>
			<div className="navbar__links">
				<button onClick={() => navigate('/posts')}>Посты</button>
				<button onClick={() => navigate('/about')}>Инфо</button>
			</div>
		</div>
	)
}

export default Navbar
