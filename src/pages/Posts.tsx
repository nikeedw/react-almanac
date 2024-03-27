import { FC, useEffect, useRef, useState } from 'react';
import { IPost } from '../models/interfaces';
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import { getPageCount } from '../utils/pages';
import Button from '../components/UI/button/Button';
import Modal from '../components/UI/modal/Modal';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import PostFilter from '../components/PostFilter';
import Pagination from '../components/UI/pagination/Pagination';
import Loader from '../components/UI/loader/Loader';
import { useObserver } from '../hooks/useObserver';

export type TSelect = 'title' | 'body';

export type TFilter = {
	sort: string;
	query: string
}

const Posts: FC = () => {
	const [posts, setPosts] = useState<IPost[]>([]);
	const [filter, setFilter] = useState<TFilter>({sort: '', query: ''});
	const [modal, setModal] = useState<boolean>(false);
	const [totalPages, setTotalPages] = useState<number>(0);
	const limit = 10;
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const lastElement = useRef<HTMLDivElement>(null);

	const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		setPosts([...posts, ...response.data]);
		const totalCount = response.headers['x-total-count'] as number;
		const pages = getPageCount(totalCount, limit);
		setTotalPages(pages);
	});

	useObserver(lastElement, page < totalPages, isPostLoading, () => {
		setPage(page + 1);
	})

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page])

	const createPost = (newPost: IPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	}

	const removePost = (post: IPost) => {
		setPosts(posts.filter(p => p.id !== post.id));
	}

	const changePage = (page: number) => {
		setPage(page);
	}

	return (
		<div className="App">
			<Button style={{marginTop: 30}} onClick={() => setModal(true)}>
				Создать пользователя
			</Button>
			<Modal visible={modal} setVisible={setModal} >
				<PostForm create={createPost} />
			</Modal>
			<hr style={{ margin: '15px 0' }} />
			<PostFilter filter={filter} setFilter={setFilter} />
			{postError && 
				<h1 style={{color: 'red', textAlign: 'center', marginTop: 15 }}>
					Произошла ошибка: {postError}
				</h1>
			}
			<PostList posts={sortedAndSearchedPosts} title='Список постов' remove={removePost} />
			<div ref={lastElement} style={{height: 20}}></div>
			{isPostLoading &&
				<div style={{display: 'flex', justifyContent: 'center', marginTop: 200}}><Loader /></div>
			}
			<Pagination totalPages={totalPages} page={page} changePage={changePage} />
		</div>
	)
}

export default Posts;
