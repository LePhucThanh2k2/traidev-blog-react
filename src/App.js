import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PostDetailPage from "./pages/PostDetailPage";
import { useEffect } from "react";
import { actGetMainMenuAsync } from "./store/menu/action";
import { actGetListCategoryAsync } from "./store/categories/action";
import { useDispatch } from "react-redux";
import backgroundPage404 from "./assets/images/page404.jpg";
import PostCategoryPage from "./pages/PostCategoryPage";
import AOS from "../node_modules/aos/dist/aos";
import "../node_modules/aos/dist/aos.css";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetMainMenuAsync());
    dispatch(actGetListCategoryAsync({ per_page: 100, page: 1 })).then(() => {
      AOS.init({ duration: 800, once: true });
    });
  }, []);
  return (
    <Router>
      <div className="wrapper-content">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/post/:slug">
            <PostDetailPage />
          </Route>
          <Route path="/category/:id">
            <PostCategoryPage />
          </Route>
          <Route path="*">
            <img src={backgroundPage404} alt="page_404" className="page404" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
