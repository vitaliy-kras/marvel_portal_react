import { Link, NavLink } from "react-router-dom"
import "./appHeader.scss"

const AppHeader = () => {
	return (
		<header className='app__header'>
			<h1 className='app__title'>
				<Link to='/'>
					<span>Marvel</span> - інформаційний портал
				</Link>
			</h1>
			<nav className='app__menu'>
				<ul>
					<li>
						<NavLink
							end //без атрибута end це посилання завжди активне
							style={({ isActive }) => ({ color: isActive ? "#9f0013" : "inherit" })}
							to='/'
						>
							Персонажі
						</NavLink>
					</li>
					/
					<li>
						<NavLink
							style={({ isActive }) => ({ color: isActive ? "#9f0013" : "inherit" })}
							to='/comics'
						>
							Комікси
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default AppHeader
