import About from './component/About';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';

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
