import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="Profile" myHome="Home" aboutText="About" />
      <div className="container my-3">
        <TextForm heading= "UPPERCASE CONVERTER"/>
      </div>
    </>
  );
}

export default App;
