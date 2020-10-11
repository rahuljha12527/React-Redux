import React from "react";
import "./App.css";
import store from './redux/store'
import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <IceCreamContainer/>
         <CakeContainer /> 
        <HooksCakeContainer />
        {/* <iceCreamContainer /> */}
       
      </div>
    </Provider>
  );
}

export default App;
