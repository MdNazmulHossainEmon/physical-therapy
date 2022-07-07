import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AuthProvider from './components/context/AuthProvider';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import HomeServiceDetail from './components/HomeServiceDetail/HomeServiceDetail';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Services from './components/Services/Services';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/services" element={<Services></Services>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/login" element={<LogIn></LogIn>} />
            <Route path="/contact" element={<Contact></Contact>} />
            
            {/* <Route path="/serviceDetail/:serviceId" element={<HomeServiceDetail></HomeServiceDetail>} /> */}

            <Route path="/serviceDetail/:serviceId" element={<PrivateRoute>
              <HomeServiceDetail></HomeServiceDetail>
            </PrivateRoute>} />


            {/* <Route path="/serviceDetail/:serviceDetailId" element={<ServiceDetail></ServiceDetail>}></Route> */}
            


            <Route path="*" element={<NotFound></NotFound>} />

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;