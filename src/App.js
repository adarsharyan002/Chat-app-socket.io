
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Join from './components/join/Join'
import Chat from './components/chat/Chat'


const App=()=> {
  return(
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Join}/>
    <Route path="/chat"  component={Chat}/>
      </Switch>
    
    </div>)
  </Router>
  
  


  
  )
}

export default App;
