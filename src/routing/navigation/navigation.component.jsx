import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
/* Utils */
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { selectCurrentUser } from '../../store/user/user.selector';

/* Components */
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

/* Context */
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import {
	NavigationContainer,
	LogoContainer,
	NavLink,
	NavLinks,
} from './navigation.styles.jsx';

const NavBar = () => {
	/* 	const { currentUser } = useContext(UserContext); */
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<div>
						<CrwnLogo className="logo" />
					</div>
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">Shop</NavLink>
					{currentUser ? (
						<NavLink
							as="span"
							className="nav-link"
							onClick={signOutUser}>
							{' '}
							SIGN OUT{' '}
						</NavLink>
					) : (
						<NavLink to="/auth">SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default NavBar;
