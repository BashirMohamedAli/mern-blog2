import React, { useState, useEffect } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Articles from "./components/Articles";
import Add from "./components/Add";
import Read from "./components/Read";
import Edit from "./components/Edit";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/articles")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div className="App">
      <Header />
      <Route exact path="/" render={() => <Articles posts={posts} />} />
      <Route
        path="/read-article/:id"
        render={(props) => <Read {...props} posts={posts} />}
      />
      <Route
        path="/update/:id"
        render={(props) => <Edit {...props} posts={posts} />}
      />
      <Route path="/add-post" component={Add} />
    </div>
  );
}

export default App;
