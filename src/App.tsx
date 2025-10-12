import React from "react";
import Component from "./pages/fundamental/Component";
import ConditionalRendering from "./pages/fundamental/ConditionalRendering";
import EffectHook from "./pages/fundamental/EffectHook";
import Form from "./pages/fundamental/Form";
import JSX from "./pages/fundamental/JSX";
import LiftingStateUp from "./pages/fundamental/LiftingStateUp";
import ListKey from "./pages/fundamental/ListKey";
import Props from "./pages/fundamental/Props";
import State from "./pages/fundamental/State";
import StateHook from "./pages/fundamental/StateHook";
import StylingCSS from "./pages/fundamental/StylingCSS";
import TonyColorBox from "./sampleApp/tony/TonyColorBox";
import TuColorBox from "./sampleApp/tu/ColorBox/TuColorBox";
import GenerateBox from "./sampleApp/tu/GenerateBox";
import TonyEffectHook from "./sampleApp/tony/TonyEffectHook";

function App() {
  const [mounted, setMounted] = React.useState(true);''
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

      <br />
      <br />
      <ListKey />

      <br />
      <br />
      <StylingCSS />

      <br />
      <br />

      <div className="grid grid-cols-2 gap-6 mb-8 mt-10">
        <TuColorBox />
      </div>
      <div className="grid grid-cols-2 gap-6 mb-8 mt-10">
        <GenerateBox />
      </div>

      <br />
      <br />

      <LiftingStateUp />

      <br />
      <br />

      <Form />

      <br />
      <br />
      <StateHook />

      <br />
      <br />
      <button type="button" onClick={() => setMounted(prevState => !prevState)}>Mount EffectHook</button>
      {mounted && (
        <EffectHook />
      )}

      <br />
      <br />
      <TonyEffectHook />
      

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
