import Dashboard from '../pages/Dashboard';
import Form from '../pages/Form';
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
		children: [
			{
				name: 'Nova Ordem de Serviço',
				path: '/orders/form',
				component: Form,
			},
		],
	},
	{
		name: 'Kits',
		path: '/kits',
		component: Kits,
		children: [
			{
				name: 'Novo Kit',
				path: '/kits/form',
				component: Form,
			},
		],
	},
	{
		name: 'Materiais',
		path: '/materials',
		component: Kits,
		children: [
			{
				name: 'Novo Material',
				path: '/materials/form',
				component: Form,
			},
		],
	},
	{
		name: 'Etiquetas',
		path: '/tags',
		component: Tags,
		children: [
			{
				name: 'Novo QR code',
				path: '/tags/form',
				component: Form,
			},
		],
	},
	{
		name: 'Usuário',
		path: '/users',
		component: Users,
		children: [
			{
				name: 'Novo usuário',
				path: '/users/form',
				component: Form,
			},
		],
	},
	{ name: 'Sair', path: '/', component: Dashboard },
];
