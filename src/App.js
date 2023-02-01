import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import UserDetails from './Pages/UserDetails/UserDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/home',
    element: <Home></Home>
  },
  {
    path: '/userDetails',
    element: <UserDetails></UserDetails>
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
