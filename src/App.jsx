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
      <About
        title="Learn React with Vite"
        desc="Learn in-details about react props"
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
