import { useEffect, useState } from 'react'
import useMarvelService from '../../services/MarvelService'
import setContent from '../utils/setContent'
import { ViewCharInfo } from './ViewCharInfo'

import './charInfo.scss'

const CharInfo = ({ charId }) => {
	const [char, setChar] = useState(null)
	const { getCharacter, clearError, process, setProcess } = useMarvelService()

	useEffect(() => {
		if(!charId) return
		clearError()
		getCharacter(charId)
			.then(char => setChar(char))
			.then(() => setProcess('confirmed'))
		//eslint-disable-next-line
	}, [charId])

	return (
		<div className='char__info'>{setContent(process, ViewCharInfo, char)}</div>
	)
}

export default CharInfo
