import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PostDetailPage from "./pages/PostDetailPage";
function App() {
  return (
    <Router>
      <div className="wrapper-content">
        <Header />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route exact path="/post">
          <h1 className="text-center">404 </h1>
        </Route>
        <Route exact path="/post/:slug">
          <PostDetailPage />
        </Route>
        <div className="spacing" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
