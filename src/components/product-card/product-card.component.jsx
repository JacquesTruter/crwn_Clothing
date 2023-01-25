import {
	Name,
	Footer,
	ProductCardContainer,
	Price,
} from './product-card.styles';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import { useContext } from 'react';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<ProductCardContainer>
			<img
				src={imageUrl}
				alt={`${name}`}
			/>
			<Footer>
				<Name>{name}</Name>
				<Price>${price}</Price>
			</Footer>
			<Button
				buttontype="inverted"
				onClick={addProductToCart}>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
