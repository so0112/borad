import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<DayList />}>
          </Route>

          <Route path="/day/:day" element={<Day />}>
          </Route>

          <Route path="/create_word" element={<CreateWord />}>
          </Route>


          <Route path="*" element={<EmptyPage />}>
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
