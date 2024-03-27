import axios from "axios";
import { IComment, IPost } from "../models/interfaces";

export default class PostService {
	static async getAll(limit = 10, page = 1) {
		const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts', {
			params: {
				_limit: limit,
				_page: page
			}
		})
		return response;
	}

	static async getPostById(id: string | undefined) {
		const response = await axios.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + id)
		return response;
	}

	static async getCommentsByPostId(postId: string | undefined) {
		const response = await axios.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
		return response;
	}
}
