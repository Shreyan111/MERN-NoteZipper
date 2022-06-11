import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/mynotes' element={<MyNotes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;