import Home from "./Pages/Home";
import {Routes,Route} from 'react-router-dom'
import Success from "./Pages/success";
import Error from "./Pages/Error";

function App() {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
