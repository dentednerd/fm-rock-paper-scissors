import './App.css';
import globalStyles from './styles/globalStyles';

import Header from './organisms/Header';
import Stage1 from './pages/Stage1';
import Footer from './organisms/Footer';

function App() {
  globalStyles();

  return (
    <main>
      <Header />
      {/* Router or state here?? */}
      <Stage1 />
      <Footer />
    </main>
  );
}

export default App;
