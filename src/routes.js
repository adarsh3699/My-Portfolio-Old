import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage"
import Learning from "./components/Learning";
function Routes() {
    return (
        <BrowserRouter >
           <Switch>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/about" element={<AboutPage />} />
                <Route exact path="/contact" element={<ContactPage />} />
                <Route exact path="/learn" element={<Learning />} />
                
                <Route path="*" element={<div>page not found</div>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;