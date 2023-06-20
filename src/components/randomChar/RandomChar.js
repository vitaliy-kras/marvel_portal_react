import { useEffect, useState } from "react"
import useMarvelService from "../../services/MarvelService"
import setContent from "../utils/setContent"

import mjolnir from "../../resources/img/mjolnir.png"
import "./randomChar.scss"
import { ViewRandomChar } from "./ViewRandomChar"

const RandomChar = () => {
	const [char, setChar] = useState(null)
	const { getCharacter, clearError, process, setProcess } = useMarvelService()

	useEffect(() => {
		updateChar()
		const timerId = setInterval(updateChar, 60000)

		return () => {
			clearInterval(timerId)
		}
		//eslint-disable-next-line
	}, [])

	const updateChar = () => {
		clearError()
		getCharacter(Math.floor(Math.random() * (1011400 - 1011000)) + 1011000)
			.then(char => setChar(char))
			.then(() => setProcess("confirmed"))
	}

	return (
		<div className='randomchar'>
			{setContent(process, ViewRandomChar, char)}
			<div className='randomchar__static'>
				<p className='randomchar__title'>
					Випадковий персонаж на сьогодні!
					<br />
					Можете дізнатись про нього детальніше?
				</p>
				<p className='randomchar__title'>Або обрати іншого</p>
				<button onClick={updateChar} className='button button__main'>
					<div className='inner'>спробувати !</div>
				</button>
				<img src={mjolnir} alt='mjolnir' className='randomchar__decoration' />
			</div>
		</div>
	)
}

export default RandomChar
