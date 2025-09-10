import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from "./connection/Layout.jsx";
import { Category } from "./pages/Category.jsx";
import Login from "./pages/Login.jsx";
import { Orders } from "./pages/Orders.jsx";
import { Products } from "./pages/Products.jsx";
import { Profile } from "./pages/Profile.jsx";
import PrivateRoute from "./security/PrivateRoute.jsx";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={
                    <PrivateRoute>
                        <Layout/>
                    </PrivateRoute>
                }>
                    <Route index element={<Profile/>}/>

                    <Route path="category" element={<Category/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="order" element={<Orders/>}/>
                    <Route path="profile" element={<Profile/>}/>
                </Route>

                <Route path="*" element={<h1 className="text-center text-3xl mt-20">404 - Topilmadi </h1>}/>
            </Routes>
        </BrowserRouter>
    );
}
