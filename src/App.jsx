import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import CreateIssue from './pages/create_issue/CreateIssue';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/issue/create' element={<CreateIssue />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
