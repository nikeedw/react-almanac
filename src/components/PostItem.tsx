import React from "react";
import { IPost } from "../models/interfaces";
import Button from "./UI/button/Button";
import { useNavigate } from "react-router-dom";

interface PostItemProps {
	post: IPost;
	remove: (post: IPost) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, remove }) => {
	const navigate = useNavigate();

	return (
		<div className="post">
			<div className="post__content">
				<strong>{post.id}. {post.title}</strong>
				<div>{post.body}</div>
			</div>
			<div className="post__btns">
				<Button onClick={() => navigate(`/posts/${post.id}`)}>Открыть</Button>
				<Button onClick={() => remove(post)}>Удалить</Button>
			</div>
		</div>
	);
};

export default PostItem;
