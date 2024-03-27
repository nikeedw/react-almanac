import React, { FormEvent, useContext } from 'react'
import Button from '../components/UI/button/Button'
import Input from '../components/UI/input/Input'
import { AuthContext } from '../context'

const Login: React.FC = () => {
	const { setIsAuth } = useContext(AuthContext);
	
	const login = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsAuth(true);
		localStorage.setItem('auth', 'true');
	}

	return (
		<div>
		<h1>Страница для логина</h1>
		<form onSubmit={(e) => login(e)}>
			<Input type="text" placeholder='Введите логин' />
			<Input type="password" placeholder='Введите пароль' />
			<Button>
				Войти
			</Button>
		</form>
		</div>
	)
}

export default Login
