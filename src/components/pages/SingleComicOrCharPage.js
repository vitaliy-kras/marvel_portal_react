import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useMarvelService from "../../services/MarvelService"
import AppBanner from "../appBanner/AppBanner"
import setContent from "../utils/setContent"

const SingleComicOrCharPage = ({ Component, dataType }) => {
	const { id } = useParams()
	const [data, setData] = useState(null)
	const { getCharacter, getComic, clearError, process, setProcess } =
		useMarvelService()

	useEffect(() => {
		clearError()
		if (dataType === "comic") {
			getComic(id)
				.then(data => setData(data))
				.then(() => setProcess("confirmed"))
		}
		if (dataType === "character") {
			getCharacter(id)
				.then(data => setData(data))
				.then(() => setProcess("confirmed"))
		}
		//eslint-disable-next-line
	}, [id])

	return (
		<>
			<AppBanner />
			{setContent(process, Component, data)}
		</>
	)
}

export default SingleComicOrCharPage
