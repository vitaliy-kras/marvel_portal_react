import { useRef } from "react"

export const RenderCharList = (charList, setCharId) => {

	const itemRefs = useRef([])

	const focusOnItem = id => {
		itemRefs.current.forEach(item => item.classList.remove("char__item_selected"))
		itemRefs.current[id].classList.add("char__item_selected")
		itemRefs.current[id].focus()
	}

	
	return (
		<ul className='char__grid'>
			{charList.map((item, i) => {
				let imgStyle = { objectFit: "cover" }
				if (item.thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
					imgStyle = { objectFit: "unset" }
				}
				return (
					<li
						className='char__item'
						tabIndex={0}
						ref={el => (itemRefs.current[i] = el)}
						key={item.id}
						onClick={() => {
							setCharId(item.id)
							focusOnItem(i)
						}}
						onKeyPress={e => {
							if (e.key === " " || e.key === "Enter") {
								setCharId(item.id)
								focusOnItem(i)
							}
						}}
					>
						<img src={item.thumbnail} alt={item.name} style={imgStyle} />
						<div className='char__name'>{item.name}</div>
					</li>
				)
			})}
		</ul>
	)
}
