import { Routes, Route } from 'react-router-dom';
import './App.css'
import Albums from './pages/Albums'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound';
import Store from './pages/Store';
import Support from './pages/Support';
import Layout from './layouts/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import Platforms from './pages/Platforms';
import History from './pages/History';
import Concerts from './pages/Concerts';
import Albums_Store from './pages/Albums_Store';
import Merch_Store from './pages/Merch_Store';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/support" element={<Support />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/platforms/:id" element={<Platforms />} ></Route>
          <Route path="/albums_store" element={<Albums_Store/>}></Route>
          <Route path="/merch_store" element={<Merch_Store />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/concerts" element={<Concerts />}></Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}



export default App
