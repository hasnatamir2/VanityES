import React from 'react'
import VanityES from './components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from "@fortawesome/free-solid-svg-icons"

function App() {
  return (
    <div className="App">
      {library.add(fab, fas)}
      <VanityES/>
    </div>
  );
}

export default App;
