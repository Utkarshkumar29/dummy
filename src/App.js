import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from './pages/homePage';
import LoginPage from './pages/loginPage';
import Register from './components/register';
import CartPage from './pages/cartPage';

function App() {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/cart' element={<CartPage/>}/>
            </Routes>
        </Router>
  );
}

export default App;
