import About from "../pages/About"
import Login from "../pages/Login"
import Post from "../pages/Post"
import Posts from "../pages/Posts"

export enum RoutesEnum {
	Main = '/',
	Posts = '/posts',
	Post = '/posts/:id',
	About = '/about',
	Login = '/login',
}

export const privateRoutes = [
	{
		path: RoutesEnum.Posts,
		element: <Posts />,
		exact: true,
	},
	{
		path: RoutesEnum.About,
		element: <About />,
		exact: true,
	},
	{
		path: RoutesEnum.Post,
		element: <Post />,
		exact: true,
	},
]

export const publicRoutes = [
	{
		path: RoutesEnum.Login,
		element: <Login />,
		exact: true,
	},
]
