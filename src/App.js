import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';



function App() {
        const [currentPage, setCurrentPage] = useState("About");

        useEffect(() => {
            document.title = currentPage;
        });
        const renderPage = () => {
            switch (currentPage) {
                case "About":
                    return <About />;
                case "Portfolio":
                    return <Portfolio />;
                case "Contact":
                    return <ContactForm />;
                case "Resume":
                    return <Resume />;

            }
        }
    return (
        <div>
             <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main>
               {renderPage()}
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;