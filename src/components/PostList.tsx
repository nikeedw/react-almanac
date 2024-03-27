import React from 'react'
import PostItem from './PostItem'
import { IPost } from '../models/interfaces'

interface PostListProps {
	posts: IPost[] 
	title: string
	remove: (post: IPost) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, title, remove }) => {

	if(!posts?.length) return <h1 style={{ textAlign: 'center', marginTop: 15 }}>Посты не найдены</h1>

	return (
		<>
			<h1 style={{textAlign: 'center', marginTop: 15}}>
				{title}
			</h1>
			{posts.map((post) =>
				<PostItem key={post.id} remove={remove} post={post} />
			)}
		</>
	)
}

export default PostList
