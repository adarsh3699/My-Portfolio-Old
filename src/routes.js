import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Routes as Switch, Route } from 'react-router-dom';

import ScroolToTop from './components/ScrollToTop';
import Loader from './components/Loader/Loader';
import NavBar from './components/Bar/NavBar';
import FootBar from './components/Bar/FootBar';

// import HomePage from './pages/HomePage';
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage"
// import Learning from "./components/Learning";

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const WorksPage = lazy(() => import('./pages/WorksPage'));

function Routes() {
	return (
		<BrowserRouter>
			<Suspense
				fallback={
					<div className="background">
						<div id="loadingScreen">
							<div> Loading </div>
							<Loader />
						</div>
					</div>
				}
			>
				<ScroolToTop />
				<NavBar />
				<Switch>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/about" element={<AboutPage />} />
					<Route exact path="/works" element={<WorksPage />} />
					<Route exact path="/contact" element={<ContactPage />} />

					<Route path="*" element={<Navigate to="/" />} />
				</Switch>
				<FootBar />
			</Suspense>
		</BrowserRouter>
	);
}

export default Routes;
