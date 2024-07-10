import Home from "./pages/Home/Home";
import Indonesia from "./pages/covid/Indonesia";
import { Route, Routes } from "react-router-dom";
import Provinsi from "./pages/covid/Provinsi";
import About from "./pages/covid/About";



function App() {
  return (
    <div>
        <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/covid/indonesia" element={<Indonesia/>}></Route>
                <Route path="/covid/provinsi" element={<Provinsi />}></Route>
                <Route path="/covid/about" element={<About />}></Route>
                </Routes>
    </div>
  );
}

export default App;