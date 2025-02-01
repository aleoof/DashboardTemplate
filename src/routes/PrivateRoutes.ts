import Dashboard from '../pages/Dashboard';
import Kits from '../pages/Kits';
import Orders from '../pages/Orders';
import Tags from '../pages/Tags';
import Users from '../pages/Users';

export const privateRoutes = [
	{ name: 'Dashboard', path: '/', component: Dashboard },
	{ name: 'Ordem de Serviço', path: '/orders', component: Orders },
	{ name: 'Kits', path: '/kits', component: Kits },
	{ name: 'Etiquetas', path: '/tags', component: Tags },
	{ name: 'Usuário', path: '/users', component: Users },
	{ name: 'Sair', path: '/', component: Dashboard },
];
