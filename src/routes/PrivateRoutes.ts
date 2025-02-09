import Dashboard from '../pages/Dashboard';
import Form from '../pages/Form';
import Kits from '../pages/Kits';
import Materials from '../pages/Materials';
import Orders from '../pages/Orders';
import Tags from '../pages/Tags';
import Users from '../pages/Users';
import Version from '../pages/Version';

export const privateRoutes = [
	{ name: 'Dashboard', path: '/', icon: 'dashboard', component: Dashboard },
	{
		name: 'Ordem de Serviço',
		path: '/orders',
		icon: 'order',
		component: Orders,
		access: [0, 1, 2],
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
		icon: 'kits',
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
		icon: 'materials',
		component: Materials,
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
		icon: 'tag',
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
		icon: 'users',
		component: Users,
		children: [
			{
				name: 'Novo usuário',
				path: '/users/form',
				component: Form,
			},
		],
	},
	{
		name: 'Versão',
		path: '/version',
		icon: 'version',
		component: Version,
	},
];
