import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import { productsData } from "./Api/api";
import Registration from "./Pages/Registration";
import Cart from "./Pages/Cart";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={productsData}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Route>
    )
  );
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
