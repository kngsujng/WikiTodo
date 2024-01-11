import { ReactNode } from 'react';
import NavBar from '../NavBar/NavBar';
import * as S from './Layout.style';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<NavBar />
			<S.Wrapper>{children}</S.Wrapper>
		</>
	);
};

export default Layout;
