import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";

function Routes() {
    return (
        <BrowserRouter >
           <Switch>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/about" element={<AboutPage />} />
                
                <Route path="*" element={<div>page not found</div>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;