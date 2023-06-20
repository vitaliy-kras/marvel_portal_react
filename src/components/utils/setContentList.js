import ErrorMessage from "../errorMessage/ErrorMessage"
import Spinner from "../spinner/Spinner"

export const setContentList = (process, Component, newItemLoading) => {
	switch (process) {
		case "waiting":
			return <Spinner />
		case "loading":
			return newItemLoading ? <Component /> : <Spinner />
		case "confirmed":
			return <Component />
		case "error":
			return <ErrorMessage />
		default:
			throw new Error("Помилка")
	}
}
