import "./skeleton.scss"

const Skeleton = () => {
	return (
		<>
			<p className='char__select'>Виберіть персонажа для перегляду інформації</p>
			<div className='skeleton'>
				<div className='pulse skeleton__header'>
					<div className='pulse skeleton__circle'></div>
					<div className='pulse skeleton__mini'></div>
				</div>
				<div className='pulse skeleton__block'></div>
				<div className='pulse skeleton__block'></div>
				<div className='pulse skeleton__block'></div>
			</div>
		</>
	)
}

export default Skeleton
