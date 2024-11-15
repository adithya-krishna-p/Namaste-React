
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Cart from './pages/Cart';

const MainLayout = () => (
  <div className="App">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const appRouter = createBrowserRouter([{
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Body />
    },
    {
      path: '/about',
      element: <Aboutus />
    },
  {
    path: '/Contactus',
    element: <Contactus />
  },
  
  {
    path: '/Cart',
    element: <Cart />
  }
  ]
}])

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
