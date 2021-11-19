import "./App.css";
import Navigation from "./components/Shared/Navigation/Navigation";
import Sidebar from "./components/Shared/Sidebar/Sidebar";
import Home from "./components/Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/Pages/UserList/UserList";
import User from "./components/Pages/User/User";
import NewUser from "./components/Pages/NewUser/NewUser";
import ProductList from "./components/Pages/ProductList/ProductList";
import Product from "./components/Pages/Product/Product";
import NewProduct from "./components/Pages/NewProduct/NewProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
        <div className="container">
          <Sidebar />
          <div className="others">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/products">
                <ProductList />
              </Route>
              <Route path="/product/:productId">
                <Product />
              </Route>
              <Route path="/newProduct">
                <NewProduct />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
