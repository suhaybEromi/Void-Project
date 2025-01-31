import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AuthContextProvider from "./components/AuthContext.jsx";
import Home from "./components/Home.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Basket from "./components/Basket.jsx";
import Sale from "./components/Sale.jsx";

function App() {
  return (
    <>
      <div className="text-bg-light" style={{ height: "593px" }}>
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/sale" element={<Sale />} />
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
