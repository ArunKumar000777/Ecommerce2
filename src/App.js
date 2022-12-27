import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./routes/home/HomeComponent";
import NavigationComponent from "./routes/navigation/NavigationComponent";
import Authentication from "./routes/authentication/Authenticaion";
import ShopComponent from "./routes/shop/ShopComponent";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<NavigationComponent />}>
                    <Route index element={<HomeComponent />} />
                    <Route path="shop" element={<ShopComponent />} />
                    <Route path="auth" element={<Authentication />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
