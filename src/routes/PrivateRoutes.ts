import Dashboard from '../pages/Dashboard';
import Kits from '../pages/Kits';
import Orders from '../pages/Orders';
import Tags from '../pages/Tags';
import Users from '../pages/Users';

export const privateRoutes = [
	{ name: 'Dashboard', path: '/', component: Dashboard },
	{
		name: 'Ordem de Serviço',
		path: '/orders',
		component: Orders,
		children: {
			name: 'Nova Ordem de Serviço',
			path: '/orders/new',
		},
	},
	{
		name: 'Kits',
		path: '/kits',
		component: Kits,
		children: {
			name: 'Novo Kit',
			path: '/kits/new',
		},
	},
	{
		name: 'Etiquetas',
		path: '/tags',
		component: Tags,
		children: {
			name: 'Novo QR code',
			path: '/tags/new',
		},
	},
	{
		name: 'Usuário',
		path: '/users',
		component: Users,
		children: {
			name: 'Novo usuário',
			path: '/users/new',
		},
	},
	{ name: 'Sair', path: '/', component: Dashboard },
];
