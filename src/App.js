import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Temp from "./components/Temp";
import Calculator from "./components/Calculator";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-yellow-100 w-[100vw] h-[100vh] overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/temp" element={<Temp />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
