import './App.css';
import globalStyles from './styles/globalStyles';

import Header from './organisms/Header';

function App() {
  globalStyles();

  return (
    <main>
      <Header />
    </main>
  );
}

export default App;
