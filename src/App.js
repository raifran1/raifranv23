import "@fontsource/montserrat";
import './styles/base.css';
import Header from "./components/header";
import HomeSection from "./components/homeSection";
import SobreSection from "./components/sobreSection";
import ServicoSection from "./components/servicoSection";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeSection/>
      <SobreSection/>
      <ServicoSection/>
      <Footer/>
    </div>
  );
}

export default App;
