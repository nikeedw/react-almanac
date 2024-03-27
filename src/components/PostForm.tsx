import { FC, useState } from 'react'
import Input from './UI/input/Input'
import { IPost } from '../models/interfaces'
import Button from './UI/button/Button'

type InitialPostType = typeof initialPost & {}

const initialPost = { 
	title: '', 
	body: ''
}

interface PostFormProps {
	create: (newPost: IPost) => void
}

const PostForm: FC<PostFormProps> = ({ create }) => {

	const [post, setPost] = useState<InitialPostType>(initialPost);

    const addNewPost = () => {
        const newPost: IPost = {
            ...post, id: Date.now(),
        };
		create(newPost);

        setPost({ title: '', body: '' });
    };

	return (
		<form onSubmit={(e) => e.preventDefault()}>
			<Input
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })}
				type="text"
				placeholder='Название поста'
			/>
			<Input
				value={post.body}
				onChange={e => setPost({ ...post, body: e.target.value })}
				type="text"
				placeholder='Описание поста'
			/>
			<Button onClick={addNewPost}>Добавить</Button>
		</form>
	)
}

export default PostForm
