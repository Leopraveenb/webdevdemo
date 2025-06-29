import { useState } from 'react';
import HomePage from './HomePage';
import Calculator from './Calculator';
import './App.css'

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <nav style={{ background: '#232F3E', color: '#fff', padding: 12, display: 'flex', gap: 16 }}>
        <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer' }} onClick={() => setPage('home')}>Home</button>
        <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: 18, cursor: 'pointer' }} onClick={() => setPage('calculator')}>Calculator</button>
      </nav>
      {page === 'home' ? <HomePage /> : <Calculator />}
    </div>
  );
}

export default App
