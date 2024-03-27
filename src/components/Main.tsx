import { useEffect, useState } from "react";
import { AuthContext } from "../context";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { RoutesEnum, privateRoutes, publicRoutes } from "../routes/RoutesEnum";
import Error from "../pages/Error";
import App from "../App";
import Loader from "./UI/loader/Loader";


function Main() {
	const [isAuth, setIsAuth] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const item = localStorage.getItem('auth');
		if(item === 'true') {
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}

		setIsLoading(false);
	}, [])

	if(isLoading) {
		return <Loader />
	}

	const router = createBrowserRouter([
		{
			path: '/',
			element: <App />,
			errorElement: <Error />,
			children: [
				...publicRoutes.map(route => ({
					path: route.path,
					element: !isAuth ? route.element : <Navigate to={RoutesEnum.Posts} replace />,
					exact: route.exact,
				})),
				...privateRoutes.map(route => ({
					path: route.path,
					element: isAuth ? route.element : <Navigate to={RoutesEnum.Login} replace />,
					exact: route.exact,
				}))
			]
		}
	]);

	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth
		}}>
			<RouterProvider router={router} />
		</AuthContext.Provider>
	);
}

export default Main;