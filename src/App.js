import React from 'react'

import Header from './js/components/Header/Header'
import MainContent from './js/components/MainContent/MainContent'

function App() {
    const data = {
            userId: 1,
            id: 1,
            title: 'example title',
            body: 'eact Hook useEffect has missing dependencies: \'dispatch\' and \'sampleState.userPosts\'. Either include the'
        }

  return (
      <div>
              <Header />
              <MainContent />
              <div>App</div>
      </div>

  );
}

export default App;
