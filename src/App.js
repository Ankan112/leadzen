import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import UserDetails from './Pages/UserDetails/UserDetails';
import Users from './Pages/Users/Users';

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
    path: '/users',
    element: <Users></Users>
  },
  {
    path: '/user/:id',
    element: <UserDetails></UserDetails>,
    loader: async ({ params }) => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    }
  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
