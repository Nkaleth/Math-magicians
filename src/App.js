import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Quote from './routes/Quote';
import CalculatorP from './routes/CalculatorP';
import NotMatch from './routes/NoMatch';
import NavBar from './components/NavBar';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<CalculatorP />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
