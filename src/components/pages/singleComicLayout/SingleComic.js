import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import "./singleComic.scss"

const SingleComic = ({ data }) => {
	const { title, description, thumbnail, pageCount, language, price } = data

	return (
		<div className='single-comic'>
			<Helmet>
				<meta name='description' content='Page with list of our comics' />
				<title>{title}</title>
			</Helmet>
			<img src={thumbnail} alt={title} className='single-comic__img' />
			<div className='single-comic__info'>
				<h2 className='single-comic__name'>{title}</h2>
				<p className='single-comic__descr'>{description}</p>
				<p className='single-comic__descr'>{pageCount}</p>
				<p className='single-comic__descr'>Мова: {language}</p>
				<div className='single-comic__price'>{price}</div>
			</div>
			<Link to='/comics' className='single-comic__back'>
				Назад до всіх
			</Link>
		</div>
	)
}

export default SingleComic
