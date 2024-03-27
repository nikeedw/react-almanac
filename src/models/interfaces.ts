export interface IPost {
	id: number;
	title: string;
	body: string;
}

export interface IOption {
	value: string | number;
	name: string;
}

export interface IComment {
	id: string
	name: string;
	email: string;
	body: string;
}
