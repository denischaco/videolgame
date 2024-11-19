
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/olg_ame/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  