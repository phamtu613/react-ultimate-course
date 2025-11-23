import React from "react";
import { Link, Route, Routes, useLocation } from 'react-router';


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
import RefHook from "./pages/fundamental/RefHook";
import PerformanceHook from "./pages/fundamental/PerformanceHook";
import Product from "./pages/fundamental/Product";
import User from "./pages/fundamental/User";
import Personal from "./components/Personal";
import Checkout from "./components/Checkout";
import CheckoutDetail from "./components/CheckoutDetail";
import PrivateRouter from "./routes/PrivateRouter";
import { useSelector } from "react-redux";

/*

user click page 3 -> call api with page 3 -> navgiate('product?page=3', { replace })
*/

function App() {
  const location = useLocation();
  const [mounted, setMounted] = React.useState(true);
  const state = useSelector(state => state)

  console.log('App state in store-------:', state)
  return (
    <>

      <ul>
        <li>
          <Link to="/jsx">JSX</Link> {' '}
          <Link to="/props">Props</Link> {' '}
          <Link to="/state">State</Link> {' '}
          <Link to="/product">Product</Link> {' '}
          <Link to="/user">User</Link> {' '}
        </li>
      </ul>

      <div id="main">
        <Routes>
          <Route path="/jsx" element={<JSX />} />
          <Route path="/props" element={<Props />} />
          <Route path="/state" element={<State />} />
          <Route path="/product" element={<PrivateRouter><Product /></PrivateRouter>} />
          {/* <Route path="/user" element={<User />} />
          <Route path="/user/personal" element={<Personal />} />
          <Route path="/user/checkout" element={<Checkout />} /> */}
          <Route path="/user" element={<PrivateRouter><User /></PrivateRouter>}>
            <Route index element={<>Please click tab</>} />
            <Route path="personal" element={<Personal />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="checkout/:checkoutId/book/:bookId" element={<CheckoutDetail />} />
          </Route>

        </Routes>
      </div>
      <br />
      <br />
      <hr />

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
      <RefHook />

      <br />
      <br />
      <PerformanceHook />
      

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
