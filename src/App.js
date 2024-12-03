import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as  Router , Route , Routes} from 'react-router-dom';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Nav from './components/nav';

import { ShopContextProvider } from './context/shopContext';

import { UpperNavAds } from './components/UpperNavAds';
import Footer from './components/Footer';

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
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
