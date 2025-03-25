 
import './App.css';
 
import Routes from "./routes";
import Navbar from "./components/Pages/Navbar";
import AuthProvider from "./context/authContext";
 
function App() {
  return (
    <div className="App">
 
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </div>
  );
}

export default App;
