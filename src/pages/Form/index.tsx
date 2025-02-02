import { useLocation } from 'react-router';
import KitsForm from '../../components/Forms/Kits';
import MaterialsForm from '../../components/Forms/Materials';

export default function Form() {
	const { pathname } = useLocation();

	const returnForm = () => {
		switch (pathname) {
			case '/materials/form':
				return <MaterialsForm />;
			case '/kits/form':
				return <KitsForm />;
			default:
				break;
		}
	};

	return <div className="container pt-5">{returnForm()}</div>;
}
