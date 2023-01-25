import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
	CartIconContainer,
	ItemCount,
	ShoppingIcon,
} from './cart-icon.styles.jsx';

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

	const ToggleCart = () => setIsCartOpen(!isCartOpen);

	return (
		<CartIconContainer onClick={ToggleCart}>
			<ShoppingIcon className="shopping-icon" />
			<ItemCount as="span">{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
