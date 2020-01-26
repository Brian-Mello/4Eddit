import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import FeedPage from '../FeedPage';
import PostDatailsPage from '../PostDetailsPage';
import SignUpPage from '../SignUpPage'

export const routes = {
  root: "/",
  signUp: "/signup",
  feed: "/feed",
  postDetails: "/postDetails"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.signUp} component={SignUpPage} />
        <Route exact path={routes.feed} component={FeedPage} />
        <Route exact path={routes.postDetails} component={PostDatailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
