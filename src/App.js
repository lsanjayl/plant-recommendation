import Landing from"./Pages/Landing"
import Details from"./Pages/Details"
import Forms from"./Pages/Forms"
import Suggestion from"./Pages/Suggestion"
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/details" element={<Details/>}></Route>
      <Route path="/forms" element={<Forms/>}></Route>
      <Route path="/suggestion" element={<Suggestion/>}></Route>
    </Routes>
  );
}

export default App;
