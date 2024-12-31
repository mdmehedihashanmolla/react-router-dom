import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contactinfo from "./components/Contactinfo";
import ContactForm from "./components/ContactForm";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./components/ContactLayout";
import Notfound from "./components/Notfound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="Products" element={<Products />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<ContactLayout />}>
          <Route path="info" element={<Contactinfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="*" element={<Notfound/>}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
