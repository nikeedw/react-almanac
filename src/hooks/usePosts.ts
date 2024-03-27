import { useMemo } from "react";

export const useSortedPosts = (posts: any[], sort?: string) => {
	// хук для каких-то вычислений
	const sortedPosts = useMemo(() => {
		// console.log('отработала функция');
		if (sort && posts) {
			return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
		}

		return posts;
	}, [sort, posts])

	return sortedPosts;
}

export const usePosts = (posts: any[], sort?: string, query?: string) => {
	const sortedPosts = useSortedPosts(posts, sort);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts?.filter(post => post.title.toLowerCase().includes(query?.toLowerCase()));
	}, [query, sortedPosts]);

	return sortedAndSearchedPosts;
}