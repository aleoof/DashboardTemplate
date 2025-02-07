import Dashboard from '../pages/Dashboard';
import Form from '../pages/Form';
import Kits from '../pages/Kits';
import Materials from '../pages/Materials';
import Orders from '../pages/Orders';
import Tags from '../pages/Tags';
import Users from '../pages/Users';
import Version from '../pages/Version';

export const privateRoutes = [
	{ name: 'Dashboard', path: '/', icon: 'kits', component: Dashboard },
	{
		name: 'Ordem de Serviço',
		path: '/orders',
		icon: 'kits',
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
		icon: 'kits',
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
		icon: 'kits',
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
		icon: 'kits',
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
		icon: 'versao',
		component: Version,
	},
];
