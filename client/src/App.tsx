import "./App.css";
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/navigationBar/NavigationBar";

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Outlet />
    </div>
  );
}

export default App;
