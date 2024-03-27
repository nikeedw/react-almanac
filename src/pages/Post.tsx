import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import { IComment, IPost } from '../models/interfaces';
import Loader from '../components/UI/loader/Loader';
import Button from '../components/UI/button/Button';

const Post: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [post, setPost] = useState<IPost | null>(null);
	const [comments, setComments] = useState<IComment[]>([]);

	const navigate = useNavigate();

	const [fetcthPost, isPostLoading, postError] = useFetching(async (id) => {
		const response = await PostService.getPostById(id);
		setPost(response.data);
	})
	const [fetcthComments, isComLoading] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id);
		setComments(response.data);
	})

	useEffect(() => {
		fetcthPost(id);
		fetcthComments(id);
	}, [])

	return (
		<div className='App' >
			<Button onClick={() => navigate(-1)} style={{margin: '15px 0px'}} >
				Назад
			</Button>
			<h1>Вы открыли страницу поста с ID = {id}</h1>
			{postError && <h1>Произошла ошибка</h1>}
			{isPostLoading 
				? 	<div style={{display: 'flex', justifyContent: 'center', marginTop: 200}}>
						<Loader/>
					</div>  
				: <div>{post?.id}. {post?.title}</div> 
			}
			<h1 style={{marginTop: 15, color: 'teal'}}>Комментарии</h1>
			{isComLoading
				? 	<div style={{display: 'flex', justifyContent: 'center'}}>
						<Loader/>
					</div>  
				: 	<div>
						{comments.map((comment) => 
							<div key={comment.id} style={{marginTop: 15}}>
								<h2>{comment.name}</h2>
								<h4>{comment.email}</h4>
								<div>{comment.body}</div>
							</div>
						)}
					</div> 
			}
		</div>
	)
}

export default Post
