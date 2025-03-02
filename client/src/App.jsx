import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AuthContextProvider from "./components/AuthContext.jsx";
import Home from "./components/Home.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Detail from "./components/Detail.jsx";
import Sale from "./components/Sale.jsx";
import Add from "./components/Add.jsx";

function App() {
  return (
    <>
      <div className="text-bg-light" style={{ height: "593px" }}>
        <AuthContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/detail/:productId" element={<Detail />} />
                <Route path="/sale" element={<Sale />} />
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
