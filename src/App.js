import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Todo from "./components/Todo";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddItem from "./components/items/AddItem";
import EditItem from "./components/items/EditItem";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Todo} />

          <Route exact path="/users/add" component={AddItem} />
          <Route exact path="/users/edit/:id" component={EditItem} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
