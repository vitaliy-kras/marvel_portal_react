import { useState } from "react"
import { Link } from "react-router-dom"
import useMarvelService from "../../services/MarvelService"
import ErrorMessage from "../errorMessage/ErrorMessage"
import "./FindChar.scss"
import FormFindChar from "./FormFindChar"

const FindChar = () => {
	const [char, setChar] = useState(null)
	const { process, getCharacterByName, clearError } = useMarvelService()

	const updateChar = name => {
		clearError()
		getCharacterByName(name).then(char => setChar(char))
	}

	return (
		<div className='char__search-form'>
			<FormFindChar updateChar={updateChar} />
			{!char ? null : char.length > 0 ? (
				<div className='char__search-wrapper'>
					<div className='char__search-success'>
						Персонажа {char[0].name} знайдено!
					</div>
					<Link
						to={`/characters/${char[0].id}`}
						className='button button__secondary'
					>
						<div className='inner'>На сторінку персонажа</div>
					</Link>
				</div>
			) : (
				<div className='char__search-error'>
					Персонажа не знайдено. Перевірте ім'я та спробуйте ще!
				</div>
			)}
			{process === "error" && (
				<div className='char__search-critical-error'>
					<ErrorMessage />
				</div>
			)}
		</div>
	)
}

export default FindChar
