import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import ShoppingBag from "./Pages/ShoppingBag";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/wishlist" element={<Favourites />} />
        <Route path="/bag" element={<ShoppingBag />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
