import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';



function App() {
        let component
        switch (window.location.pathname) {
            case "/about":
                component = <About />
                break
            case "/portfolio":
                component = <Portfolio />
                break
            case "/resume":
                component = <Resume />
                break
            case "/contact":
                component = <ContactForm />
        }

        
    return (
        <>
        <Nav />
        {component}
        <Footer />
        </>
    );
}

export default App;