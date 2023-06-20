import { lazy, Suspense } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import AppHeader from "../appHeader/AppHeader"

import Spinner from "../spinner/Spinner"
const Page404 = lazy(() => import("../pages/404"))
const MainPage = lazy(() => import("../pages/MainPage"))
const ComicsPage = lazy(() => import("../pages/ComicsPage"))
const SingleComic = lazy(() => import("../pages/singleComicLayout/SingleComic"))
const SingleCharacter = lazy(() =>
	import("../pages/singleCharacterLayout/SingleCharacter")
)
const SingleComicOrCharPage = lazy(() =>
	import("../pages/SingleComicOrCharPage")
)

const App = () => {
	return (
		<Router>
			<div className='app'>
				<AppHeader />
				<main>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path='/' element={<MainPage />} />
							<Route path='/comics' element={<ComicsPage />} />
							<Route
								path='/comics/:id'
								element={
									<SingleComicOrCharPage Component={SingleComic} dataType='comic' />
								}
							/>
							<Route
								path='/characters/:id'
								element={
									<SingleComicOrCharPage
										Component={SingleCharacter}
										dataType='character'
									/>
								}
							/>
							<Route path='*' element={<Page404 />} />
						</Routes>
					</Suspense>
				</main>
			</div>
		</Router>
	)
}

export default App
