import Main from "./pages/Main";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
// import Show from "./pages/Show";
import Show from "./pages/show";
import Register from "./pages/register";
import Login from "./pages/login";


function App() {
  // const { id } = useParams()
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/msg/:id" element={<Main/>}/>
        </Routes>
        <Routes>
          <Route path="/show/:id" element={<Show/>}/>
        </Routes>
        <Routes>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
