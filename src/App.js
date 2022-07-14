import "./App.css";
import logo from "./Assets/logo.svg";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Home />
    </div>
  );
}

export default App;
