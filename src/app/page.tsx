import React from 'react';
import Banner from './components/banner'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Text from './components/text'
import Product from './components/product'
import Second from './components/secondproduct'
import SignUp from './components/signup'
import Fhero from './components/footerhero'
import Footer from './components/Footer'

const Home: React.FC = () => {
  return (
    <>
   <Banner/>
   <Navbar />
   <Hero />
   <Text/>
   <Product/>
   <Second />
   <SignUp/>
   <Fhero/>
   <Footer/>
   </>
  );
};

export default Home;