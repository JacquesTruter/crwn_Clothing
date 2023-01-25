import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from './utils/firebase/firebase.utils';
import NavBar from './routing/navigation/navigation.component';
import Home from './routing/home/home.component';
import Authentication from './routing/authentication/authentication.component';
import Shop from './routing/shop/shop.component';
import Checkout from './routing/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.action';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			dispatch(setCurrentUser(user));
		});

		return unsubscribe;
	}, []);

	return (
		<Routes>
			<Route
				path="/"
				element={<NavBar />}>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="shop/*"
					element={<Shop />}
				/>
				<Route
					path="Auth"
					element={<Authentication />}
				/>
				<Route
					path="Checkout"
					element={<Checkout />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
