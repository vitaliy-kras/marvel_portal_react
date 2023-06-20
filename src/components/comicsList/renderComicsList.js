import { Link } from "react-router-dom"

export const renderComicsList = comicsList => {
	return (
		<ul className='comics__grid'>
			{comicsList.map((item, i) => {
				return (
					<li className='comics__item' key={i}>
						<Link to={`/comics/${item.id}`}>
							<img
								src={item.thumbnail}
								alt={item.title}
								className='comics__item-img'
							/>
							<div className='comics__item-name'>{item.title}</div>
							<div className='comics__item-price'>{item.price}</div>
						</Link>
					</li>
				)
			})}
		</ul>
	)
}
