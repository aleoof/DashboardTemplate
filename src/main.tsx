import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { publicRoutes } from './routes/PublicRoutes.ts';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			{publicRoutes.map(({ path, component }) => (
				<Route path={path} Component={component} />
			))}
		</Routes>
	</BrowserRouter>
);
