import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/CreateNote/SingleNote";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header setSearch={(s) => setSearch(s)} />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/login' element={<LoginScreen />} />
        <Route exact path='/register' element={<RegisterScreen />} />
        <Route exact path='/createnote' element={<CreateNote />} />
        <Route exact path='/note/:id' element={<SingleNote />} />
        <Route exact path='/mynotes' element={<MyNotes search={search} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;