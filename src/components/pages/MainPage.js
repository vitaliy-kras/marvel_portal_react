import { useState } from 'react'
import { Helmet } from 'react-helmet'
import decoration from '../../resources/img/vision.png'
import CharInfo from '../charInfo/CharInfo'
import CharList from '../charList/CharList'
import ErrorBoundary from '../errorBoundary/ErrorBoundary'
import FindChar from '../findChar/FindChar'
import RandomChar from '../randomChar/RandomChar'

const MainPage = () => {
	const [CharId, setCharId] = useState(null)

	return (
		<>
			<Helmet>
				<meta name='description' content='Marvel information portal' />
				<title>Marvel information 1</title>
			</Helmet>
			<ErrorBoundary>
				<RandomChar />
			</ErrorBoundary>
			<div className='char__content'>
				<ErrorBoundary>
					<CharList setCharId={setCharId} />
				</ErrorBoundary>
				<div>
					<ErrorBoundary>
						<CharInfo charId={CharId} />
					</ErrorBoundary>
					<ErrorBoundary>
						<FindChar />
					</ErrorBoundary>
				</div>
			</div>
			<img className='bg-decoration' src={decoration} alt='vision' />
		</>
	)
}

export default MainPage
