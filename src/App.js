import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as  Router , Route , Routes} from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Nav from './components/nav';

import { ShopContextProvider } from './context/shopContext';

import { UpperNavAds } from './components/UpperNavAds';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SignIn from './components/Signin';
import VerifyAccount from './components/VerifyAccunt';
import CategoryPage from './components/CategoryPage';
import ProductPage from './components/ProductPage'; // Assume this is the detailed page



function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <UpperNavAds/>
          <Nav/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/verify" element={<VerifyAccount />} />
            <Route path="/watch" element={<CategoryPage category={"Watch"}/>} />
            <Route path="/shoes" element={<CategoryPage category={"Shoes"}/>} />
            <Route path="/sunglasses" element={<CategoryPage category={"Sunglasses"}/>} />
            <Route path="/bag" element={<CategoryPage category={"Bag"}/>} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
