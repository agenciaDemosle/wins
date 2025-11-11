import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './routes/_layout';
import { Home } from './routes/Home';
import { QuienesSomos } from './routes/QuienesSomos';
import { Servicios } from './routes/Servicios';
import { PoliticaPrivacidad } from './routes/PoliticaPrivacidad';
import { NotFound } from './routes/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
