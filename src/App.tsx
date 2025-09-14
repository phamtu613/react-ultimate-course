import Component from './pages/fundamental/Component';
import ConditionalRendering from './pages/fundamental/ConditionalRendering';
import JSX from './pages/fundamental/JSX';
import ListKey from './pages/fundamental/ListKey';
import Props from './pages/fundamental/Props';
import State from './pages/fundamental/State';
import StylingCSS from './pages/fundamental/StylingCSS';
import TonyColorBox from './sampleApp/tony/TonyColorBox';

function App() {
  return (
    <>
      <JSX />

      <br />
      <br />

      <Props />

      <br />
      <br />

      <State />

      <br />
      <br />

      <TonyColorBox />

      <br />
      <br />
      <Component />

      <br />
      <br />
      <ConditionalRendering />

      <br /><br />
      <ListKey />

      <br /><br />
      <StylingCSS />

      <br />
      <br />
      <br />
    </>
  )
}

export default App;
