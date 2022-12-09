import "./App.css";
import CategoryList from "./components/CategoryList";
import { Routes, Route } from "react-router-dom";
import ShopComponent from "./routes/shop/ShopComponent";

function App() {
    return (
        <div className="App">
            <CategoryList />
            <ShopComponent/>
        </div>
    );
}

export default App;
