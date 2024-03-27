import { FC } from "react"
import { usePagination } from "../../../hooks/usePagination";

interface PaginationProps {
	totalPages: number;
	page: number;
	changePage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalPages, page, changePage }) => {
	let pagesArray: number[] = usePagination(totalPages);

	return (
		<div className='page__wrapper'>
			{pagesArray.map(p =>
				<button
					onClick={() => changePage(p)}
					key={p}
					className={page === p ? 'page page__current' : 'page'}
				>
					{p}
				</button>
			)}
		</div>
	)
}

export default Pagination
