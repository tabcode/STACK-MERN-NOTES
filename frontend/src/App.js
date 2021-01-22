import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/global.css'
import Navigation from './components/navigation';
import notesList from './components/notesList';
import createUser from './components/createUser';
import createNote from './components/createNote';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={notesList} />
        <Route path="/edit/:id" component={createNote} />
        <Route path="/create" component={createNote} />
        <Route path="/user" component={createUser} />
      </div>
    </Router>
  );
}

export default App;
