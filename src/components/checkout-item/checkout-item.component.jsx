import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
	BaseSpan,
	CheckoutItemContainer,
	ImageContainer,
	QuantitySpan,
	QuantityValue,
	RemoveButton,
	Arrow,
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { addItemToCart, removeItemFromCart, clearItemFromCart } =
		useContext(CartContext);

	const addProductToCart = () => addItemToCart(cartItem);
	const removeProductFromCart = () => removeItemFromCart(cartItem);
	const clearProduct = () => clearItemFromCart(cartItem);

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img
					src={imageUrl}
					alt={`${name}`}
				/>
			</ImageContainer>
			<BaseSpan>{name}</BaseSpan>
			<QuantitySpan>
				<Arrow onClick={removeProductFromCart}>&#10094;</Arrow>
				<QuantityValue>{quantity}</QuantityValue>
				<Arrow onClick={addProductToCart}>&#10095;</Arrow>
			</QuantitySpan>
			<BaseSpan>{price * quantity} </BaseSpan>
			<RemoveButton onClick={clearProduct}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
