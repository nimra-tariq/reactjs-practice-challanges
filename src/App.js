import "./App.css";
import CountRender from "./Task1/Task1";
import ToDoList from "./Task2/ToDoList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Task3/Home";
import About from "./Task3/About";
import Profile from "./Task3/Profile";
import Header from "./Task3/Header";
import Footer from "./Task3/Footer";
import DogTinder from "./Task4/DogTinder";
// import DogTinder from "./Task4/DogTinder1";
// import DogTinder from "./Task4/DogTinder2";
// import DogTinder from "./Task4/DogTinder3"

function App() {
  return (
    <div className="App">
      {/* <CountRender></CountRender> */}
      {/* <ToDoList></ToDoList> */}
      {/* <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter> */}
      <DogTinder></DogTinder>
    </div>
  );
}

export default App;
