import About from './component/About';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
