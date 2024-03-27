import { createContext } from "react";

interface AuthContextType {
	isAuth: boolean;
	setIsAuth: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({ isAuth: false, setIsAuth: () => {} });


