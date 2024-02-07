import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Dashboard, Chess, Dota, DotaHero } from './Pages';
import { Routes as RoutesLink } from './constants/routes';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={RoutesLink.dashboard} element={<Dashboard />} />
				<Route path={RoutesLink.chess} element={<Chess />} />
				<Route path={RoutesLink.dota} element={<Dota />} />
				<Route path={`${RoutesLink.dotaHero}/:id/:name`} element={<DotaHero />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
