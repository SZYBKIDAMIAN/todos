import Header from './Header'
import Home from './Home'
import Intro from './Intro'
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {TaskProvider} from './TaskContext'


function App() {
  return (
    <TaskProvider>
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
      <Intro />
      </Route>
        <Route exact path='/home'>
        <Home />
        <Footer />
        </Route>
      </Switch>
    </div>
    </Router>
    </TaskProvider>
  );
}

export default App;
