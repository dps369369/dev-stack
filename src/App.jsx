// Import list i
import { useState } from 'react'
import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Technologies from "./components/Technologies";
// import Footer from './components/Footer'
import './components/Responsive.css' 

//  FUNCTION
function App() {
  // Stores the technologies selected by the user
  const [stack, setStack] = useState([]);

  return (
    <div>

      <Navbar />
      {/* <Hero />
      <Technologies
        stack={stack}
        setStack={setStack}
      />
      <Footer />
      <ToastContainer position="bottom-right" /> */}


    </div>
  );
}

export default App;
