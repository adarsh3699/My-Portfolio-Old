import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

// import HomePage from './pages/HomePage';
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage"
// import Learning from "./components/Learning";

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const Learning = lazy(() => import('./components/Learning'));

function Routes() {
    return (
        <BrowserRouter >
            <Suspense fallback={
                <>
                    <div id='loadingScreen'>
                        loading
                        <div id='loadingIcon'>
                            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                        </div>
                    </div>
                </>
            }>
                <Switch>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/contact" element={<ContactPage />} />
                    <Route exact path="/learn" element={<Learning />} />

                    <Route path="*" element={<div>page not found</div>} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default Routes;