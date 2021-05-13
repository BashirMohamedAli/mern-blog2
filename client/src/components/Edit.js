import React, { useState, useEffect } from "react";
import style from "styled-components";
import axios from "axios";

const Edit = (props) => {
  const [authorname, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [alert, setalert] = useState("");

  const changeOnClick = (e) => {
    e.preventDefault();

    const articles = {
      title,
      article,
      authorname,
    };
    setTitle("");
    setArticle("");
    setAuthorName("");

    axios
      .put(`/articles/update/${props.match.params.id}`, articles)
      .then((res) => setalert(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`/articles/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthorName(res.data.authorname),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <div className="container">
        <h1>Update Post</h1>
        <span className="alert">{alert}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="authorname">Author Name</label>
            <input
              type="text"
              value={authorname}
              onChange={(e) => setAuthorName(e.target.value)}
              className="form-control"
              placeholder="Author Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="article">Article</label>
            <textarea
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              className="form-control"
              rows="3"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update Post
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Edit;

const Container = style.div`
  margin: 1rem auto;
  width: 20rem;
  .btn-primary {
    margin-top: 1rem;
  }

  .alert {
      color: blue;
  }
`;
