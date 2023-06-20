import img from "./error.gif"

const ErrorMessage = () => {
	return (
		<img src={img} alt='Error' style={{ display: "block", margin: "0 auto" }} />
	)
}

export default ErrorMessage
