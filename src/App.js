import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PostDetailPage from "./pages/PostDetailPage";
import { useEffect } from "react";
import { actGetMainMenuAsync } from "./store/menu/action";
import { actGetListCategoryAsync } from "./store/categories/action";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetListCategoryAsync({ per_page: 100, page: 1 }));
    dispatch(actGetMainMenuAsync());
  }, [dispatch]);

  return (
    <Router>
      <div className="wrapper-content">
        <Header />
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
        <Route path="/post">
          <h1 className="text-center">404 </h1>
        </Route>
        <Route path="/post/:slug">
          <PostDetailPage />
        </Route>
        <div className="spacing" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
