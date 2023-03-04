import { Route, Routes } from "react-router-dom";
import Admin from "./components/admin/Admin";
import Auth from "./components/auth/Auth";
import Header from "./components/Header";
import Homepage from "./components/HomePage/Homepage";
import Movies from "./components/Movies/Movies";

function App() {
  return (
    <div>
    {/* Header */}
    <Header/>
    <section>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/auth" element={<Auth/>}/>
      </Routes>
    </section>
    </div>

  );
}

export default App;
