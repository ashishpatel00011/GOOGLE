import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
// import VoiceSearchBox from './components/voicesearch';

function App() {
  return (
    <div className="app">
      {/* <VoiceSearchBox /> */}
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
