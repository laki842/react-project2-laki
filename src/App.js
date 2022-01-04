import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { FormContext } from './components/FormContext';

function App() {
  return (
    <>
      {/* wrap project in context for usage */}
      <FormContext>
        <Navbar />
        <Home />
      </FormContext>
    </>
  );
}

export default App;
