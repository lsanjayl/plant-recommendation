import Landing from"./Pages/Landing"
import Details from"./Pages/Details"
import Forms from"./Pages/Forms"
import Suggestion from"./Pages/Suggestion"
import { Route, Routes,BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/forms/suggestion/details" element={<Details/>}></Route>
      <Route path="/forms" element={<Forms/>}></Route>
      <Route path="/forms/suggestion" element={<Suggestion/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
