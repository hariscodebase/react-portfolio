import './App.css';
import Sidebar  from './components/navbar/Sidebar';
import Topbar from './components/navbar/Topbar';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App w3-light-grey" >
      <Sidebar />
      <Topbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
