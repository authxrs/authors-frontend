import { Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./components/landingPage/LandingPage";
import Authors from "./components/authorsPage/Authors";
import Books from "./components/books/Books";
import Podcasts from "./components/podcasts/Podcasts";
import ShortStories from "./components/shortStories/ShortStories";
import JoinTheMovement from "./components/joinTheMovement/JoinTheMovement";
import BurgerMenu from "./components/header/BurgerMenu";
import styled from 'styled-components';

// import Banner from "./components/banner/Banner";

import PreOrderForm from "./components/preOrderForm/PreOrderForm";
import AuthorsStory from "./components/authorsPage/AuthorsStory";

const App = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <MainWrapper dropdown={dropdown} setDropdown={setDropdown}>
      <BurgerMenu dropdown={dropdown} setDropdown={setDropdown} />
      <Header dropdown={dropdown} setDropdown={setDropdown} />
      {/* <Banner /> */}

      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />
        <Route
          path="/authors-page"
          render={(props) => <Authors {...props} />}
        />
        <Route path="/books" render={(props) => <Books {...props} />} />
        <Route
          path="/preOrderForm"
          render={(props) => <PreOrderForm {...props} />}
        />
        <Route path="/podcasts" render={(props) => <Podcasts {...props} />} />
        <Route
          path="/short-stories"
          render={(props) => <ShortStories {...props} />}
        />
        <Route
          path="/join-the-movement"
          render={(props) => <JoinTheMovement {...props} />}
        />
        <Route
          exact
          path="/authorsStory"
          render={(props) => <AuthorsStory {...props} />}
        />

        {/* <Route path="/home" render={(props) => <MainSection {...props} />} /> */}
      </Switch>
      <hr />

      <Footer />
    </MainWrapper>
  );
};

const MainWrapper = styled.div` 
  z-index: 999; 
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ dropdown }) => dropdown ? 'rgba(0, 0, 0, 0.8)' : ''};
`

export default App;
