import {BrowserRouter} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer/Footer';
import AppRoutes from './routes/AppRoutes';


function App() {
  return (
    <BrowserRouter>
     <Navbar />
     <AppRoutes />
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
