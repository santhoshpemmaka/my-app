import "./App.scss";
import {Routes, Route} from "react-router-dom";
import Login from "./Login/Login";
import Verification from "./Verification/Verification";
import ProductList from "./ProductList/ProductList";
function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/verification' element={<Verification />} />
				<Route path='/products' element={<ProductList />} />
			</Routes>
		</div>
	);
}

export default App;
