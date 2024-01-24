import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';

const App = () => {
  const objInfo = {
    name: 'Md Salahuddin Khan',
    age: 36,
    dist: 'Chandpur',
    mobile: '01707073341',
  };

  const btnClick = () => {
    alert('Say Hello!');
  };
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <Header />
      <Hero />
      <About
        title="Learn React with Vite"
        desc="Learn in-details about react props"
        item={objInfo}
        ChaildBtnClick={btnClick}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
