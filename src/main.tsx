import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { publicRoutes } from './routes/PublicRoutes.ts';
import { privateRoutes } from './routes/PrivateRoutes.ts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/index.tsx';

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			{publicRoutes.map(({ path, component }) => (
				<Route path={path} Component={component} />
			))}
		</Routes>

		<Layout>
			<Routes>
				{privateRoutes.map(({ path, component }) => (
					<Route path={path} Component={component} />
				))}
			</Routes>
		</Layout>
	</BrowserRouter>
);
