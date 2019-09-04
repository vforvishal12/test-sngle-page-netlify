import React from "react";
import ReactDOM from "react-dom";

import Home from './pages/HomePage';


const App = () => {
  return (
      <React.Fragment>
        <Home />
      </React.Fragment>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("app"));