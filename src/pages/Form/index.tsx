import { useLocation } from 'react-router';
import KitsForm from '../../components/Forms/Kits';
import MaterialsForm from '../../components/Forms/Materials';
import UserForm from '../../components/Forms/User';

export default function Form() {
	const { pathname } = useLocation();

	const returnForm = () => {
		switch (pathname) {
			case '/materials/form':
				return <MaterialsForm />;
			case '/kits/form':
				return <KitsForm />;
			case '/users/form':
				return <UserForm />;
			default:
				break;
		}
	};

	return <div className="container pt-5">{returnForm()}</div>;
}
