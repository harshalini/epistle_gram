import "./App.css";
import { Navbar } from "./components/allComp";
import { AppRouter } from "./router/router"
import MockmanEs from "mockman-js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
