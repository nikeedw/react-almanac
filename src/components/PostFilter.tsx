import { FC } from 'react'
import Input from './UI/input/Input'
import Select from './UI/select/Select'
import { TFilter } from '../pages/Posts';

interface PostFilterProps {
	filter: TFilter
	setFilter: (objet: TFilter) => void;
}

const PostFilter: FC<PostFilterProps> = ({ filter, setFilter }) => {
	return (
		<div>
			<Input
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
				placeholder='Поиск...'
			/>
			<Select
				value={filter.sort}
				onChange={(e) => setFilter({...filter, sort: e.target.value})}
				defaultValue='Сортировка по...'
				options={[
					{ value: 'title', name: 'По названию' },
					{ value: 'body', name: 'По описанию' }
				]}
			/>
		</div>
	)
}

export default PostFilter
