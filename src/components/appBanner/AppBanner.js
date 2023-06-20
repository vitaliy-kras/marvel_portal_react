import avengers from "../../resources/img/Avengers.png"
import avengersLogo from "../../resources/img/Avengers_logo.png"
import "./appBanner.scss"

const AppBanner = () => {
	return (
		<div className='app__banner'>
			<img src={avengers} alt='Avengers' />
			<div className='app__banner-text'>
				Нові комікси кожного тижня!
				<br />
				Залишайтесь на зв'язку!
			</div>
			<img src={avengersLogo} alt='Avengers logo' />
		</div>
	)
}

export default AppBanner
