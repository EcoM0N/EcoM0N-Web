import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Signin/Signin";
import Signout from "./components/Signout/Signout";
import Main from "./components/Main/Main";
import Book from "./components/Book/Book";
import Bookview from "./components/Bookview/Bookview";
import Draw from "./components/Draw/Draw";
import Drawball from "./components/Drawball/Drawball";
import Drawpoint from "./components/Drawpointzero/Drawpointzero";
import Drawmonster from "./components/Drawmonster/Drawmonster";
import Mypage from "./components/Mypage/Mypage";
import Board from "./components/Board/Board";
import Admin from "./components/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signout" element={<Signout />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Book/view" element={<Bookview />} />
        {/* <Route path="/Book/:idx" element={<Bookview />} /> */}
        <Route path="/Draw" element={<Draw />} />
        <Route path="/Drawball" element={<Drawball />} />
        <Route path="/Drawmonster" element={<Drawmonster />} />
        <Route path="/Drawpoint" element={<Drawpoint />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/Board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
