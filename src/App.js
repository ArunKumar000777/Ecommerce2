import "./App.css";
import { Routes, Route} from "react-router-dom";
import HomeComponent from "./routes/home/HomeComponent";
import NavigationComponent from "./routes/navigation/NavigationComponent";
import Authentication from "./routes/authentication/Authenticaion";
function Shop() {
    return (
        <div>
            <h1>arun</h1>
        </div>
    );
}



function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<NavigationComponent />}>
                    <Route index element={<HomeComponent />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="auth" element={<Authentication />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
