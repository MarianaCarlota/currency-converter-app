import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/default.layout';
import { CurrencyConverter } from './pages/CurrencyConverter';
import { PageNotAvailable } from './pages/PageNotAvailable';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route path="/" element={<CurrencyConverter />} />
                <Route path="/page-not-found" element={<PageNotAvailable />} />
            </Route>
        </Routes>
    )
}