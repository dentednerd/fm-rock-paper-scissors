import './App.css';
import globalStyles from './styles/globalStyles';

import Header from './organisms/Header';
import Stage1 from './pages/Stage1';

function App() {
  globalStyles();

  return (
    <main>
      <Header />
      {/* Router or state here?? */}
      <Stage1 />
    </main>
  );
}

export default App;
