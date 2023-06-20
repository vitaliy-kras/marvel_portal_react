import { Link } from "react-router-dom"
import ErrorMessage from "../errorMessage/ErrorMessage"

const Page404 = () => {
	return (
		<div>
			<ErrorMessage />
			<p style={{ textAlign: "center" }}>Сторінки не існує</p>
			<Link
				style={{
					textAlign: "center",
					fontWeight: "bold",
					textDecoration: "underline"
				}}
				to='/'
			>
				На головну сторінку
			</Link>
		</div>
	)
}

export default Page404
