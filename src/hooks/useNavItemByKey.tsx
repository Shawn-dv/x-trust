import NavItem from '../components/Navbar/NavItem';
import { PageKeys, usePageStore } from '../store/usePageStore';

export function useNavItemByKey(key: PageKeys) {
	const { pages } = usePageStore();

	const page = pages?.find((p) => p.key === key);
	if (!page) return null;

	return <NavItem page={page} />;
}
