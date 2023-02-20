import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AOS from "../node_modules/aos/dist/aos";
import "../node_modules/aos/dist/aos.css";
import backgroundPage404 from "./assets/images/page404.jpg";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ChangePassword from "./pages/ChangePassword";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostCategoryPage from "./pages/PostCategoryPage";
import PostDetailPage from "./pages/PostDetailPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import { actFetchMeAsync } from "./store/auth/action";
import { actGetListCategoryAsync } from "./store/categories/action";
import { actGetMainMenuAsync } from "./store/menu/action";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchMeAsync());

    dispatch(actGetMainMenuAsync());
    dispatch(actGetListCategoryAsync({ per_page: 50, page: 1 })).then(() => {
      AOS.init({ duration: 800, once: true });
    });
  }, [dispatch]);
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
          <Route path="/changePassword">
            <ChangePassword />
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
          <Route path="/updateProfile">
            <UpdateProfilePage />
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
