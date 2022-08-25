import "./App.css";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WriteForm from "./components/WriteForm.js";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Post />}></Route>
          <Route path="/create_write" element={<WriteForm />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
