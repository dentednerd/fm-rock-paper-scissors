import { useState } from 'react';
import globalStyles from './styles/globalStyles';

import Header from './organisms/Header';
import Stage1 from './pages/Stage1';
import RulesButton from './atoms/RulesButton';
import RulesModal from './templates/RulesModal';

function App() {
  const [show, setShow] = useState(false);
  globalStyles();

  return (
    <main>
      <Header />
      {/* Router or state here?? */}
      <Stage1 />
      <RulesButton setShow={setShow} />
      <RulesModal show={show} setShow={setShow} />
    </main>
  );
}

export default App;
