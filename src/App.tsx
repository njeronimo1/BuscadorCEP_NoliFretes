import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { BuscarCEP } from "./Pages/BuscarCEP/BuscarCEP";
import { BuscarEndereco } from "./Pages/BuscarEndereco/BuscarEndereco";

export function App() {
  return (
    <BrowserRouter>
    <Header />
    
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/buscarCEP" element={ <BuscarCEP />} />
      <Route path="/buscarEndereco" element={ <BuscarEndereco />} />
    </Routes>

    <Footer />
    <GlobalStyle/>
    <ToastContainer autoClose={2000} />
    </BrowserRouter>
 )
}
