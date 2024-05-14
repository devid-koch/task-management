
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Signup from "./auth/signup";
import Login from "./auth/login";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/signup" exact element={<Signup />}/>
  <Route path="/login" exact element={<Login />}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
