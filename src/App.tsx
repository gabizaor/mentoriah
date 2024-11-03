import './index.css';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Mentores } from './pages/Mentores';
import { QueroSerUmMentor } from './pages/QueroSerUmMentor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col justify-between">
        {/* Navbar fixa no topo */}
        <header className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </header>

        {/* Conteúdo principal com margem superior para evitar sobreposição */}
        <main className="mt-[80px] mb-[60px] flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentores" element={<Mentores />} />
            <Route path="/quero-ser-um-mentor" element={<QueroSerUmMentor />} />
          </Routes>
        </main>

        {/* Footer fixo no rodapé */}
        <footer className="fixed bottom-0 left-0 w-full">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
