import { useEffect, useMemo, useState } from "react"

import useMarvelService from "../../services/MarvelService"
import { setContentList } from "../utils/setContentList"
import { RenderCharList } from "./RenderCharList"
import "./charList.scss"

const CharList = ({ setCharId }) => {
	const [charList, setCharList] = useState([])
	const [newItemLoading, setNewItemLoading] = useState(false)
	const [offset, setOffset] = useState(210)

	const { getAllCharacters, process, setProcess } = useMarvelService()

	useEffect(() => {
		onRequest(offset, true)
		//eslint-disable-next-line
	}, [])

	const onRequest = (offset, initial) => {
		initial ? setNewItemLoading(false) : setNewItemLoading(true)
		getAllCharacters(offset)
			.then(newCharList => {
				setCharList([...charList, ...newCharList])
				setNewItemLoading(false)
				setOffset(offset + 9)
			})
			.then(() => setProcess("confirmed"))
	}

	const content = useMemo(() => {
		return setContentList(process, () => RenderCharList(charList, setCharId), newItemLoading)
		//eslint-disable-next-line
	}, [process])

	return (
		<div className='char__list'>
			{content}
			<button
				className='button button__main button__long'
				disabled={newItemLoading}
				style={{ display: charList.length < 9 ? "none" : "block" }}
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

export default CharList
