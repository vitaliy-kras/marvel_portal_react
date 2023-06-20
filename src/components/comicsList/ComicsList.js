import { useEffect, useState } from "react"
import useMarvelService from "../../services/MarvelService"
import { setContentList } from "../utils/setContentList"
import "./comicsList.scss"
import { renderComicsList } from "./renderComicsList"

const ComicsList = () => {
	const [comicsList, setComicsList] = useState([])
	const [newItemLoading, setNewItemLoading] = useState(false)
	const [offset, setOffset] = useState(0)
	const [comicsEnded, setComicsEnded] = useState(false)
	const { getAllComics, process, setProcess } = useMarvelService()

	useEffect(() => {
		onRequest(offset, true)
		//eslint-disable-next-line
	}, [])

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true)
		getAllComics(offset)
			.then(newComicsList => {
				setComicsList([...comicsList, ...newComicsList])
				setNewItemLoading(false)
				setOffset(offset + 8)
				setComicsEnded(newComicsList.length < 8)
			})
			.then(() => setProcess("confirmed"))
	}

	return (
		<div className='comics__list'>
			{setContentList(process, () => renderComicsList(comicsList), newItemLoading)}
			<button
				disabled={newItemLoading}
				style={{ display: comicsEnded ? "none" : "block" }}
				className='button button__main button__long'
				onClick={() => onRequest(offset)}
			>
				<div className='inner'>
					{newItemLoading || process === "loading"
						? "завантаження..."
						: "завантажити ще"}
				</div>
			</button>
		</div>
	)
}

export default ComicsList
