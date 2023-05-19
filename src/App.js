import { QueryClient, QueryClientProvider } from "react-query";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ResponsiveGrid from "./components/ResponsiveGrid";
import Layout from './Layouts/Layout'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from "./pages/Register";
import './styles/style.scss'
import Cart from "./pages/Cart";
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Products" element={<ResponsiveGrid />}>


            </Route>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Cart" element={<Cart />} />

          </Route>


        </Routes>

      </div>
    </QueryClientProvider>
  );
}

export default App;
