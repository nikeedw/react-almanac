import { FC } from 'react'
import { Link } from 'react-router-dom'

const Error: FC = () => {
  return (
	<div style={{
		width: '100vw',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		gap: 15
	}}>
	  <h1 style={{color: 'red'}}>Эта страница не существует</h1>
	  <Link to='/'>На главную</Link>
	</div>
  )
}

export default Error
