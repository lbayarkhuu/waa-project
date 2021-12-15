import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Products from './pages/products';
import Sellers from './pages/sellers';
import Cart from './pages/cart';
import Orders from './pages/orders';
import Header from './components/header';
import Login from './components/login';
import Profile from './pages/profile';
import ProductDetail from "./pages/productDetail";
import ProductForm from "./pages/ProductForm";
import Users from "./pages/users";
import Reviews from "./pages/reviews";
import SellerProducts from "./pages/sellerProducts";
import Payments from "./pages/payments";
import { UserContext, UserProvider } from "./providers/userProvider";
import UserForm from "./components/register";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/sellers/:sellerId/products" element={<SellerProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/register" element={<UserForm />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
