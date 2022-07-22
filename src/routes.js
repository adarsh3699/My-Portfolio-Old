import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

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
        <BrowserRouter >
            <Suspense fallback={
                <>
                    <div id='loadingScreen'>
                        Loading
                        <div id='loadingIcon'>
                            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>
                    </div>
                </>
            }>
                <Switch>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/works" element={<WorksPage />} />
                    <Route exact path="/contact" element={<ContactPage />} />

                    <Route path="*" element={<center><h1>Page Not Found</h1></center>} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default Routes;