import React, { useState, useEffect } from "react";
import style from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const Article = (props) => {
  const [authorname, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");

  useEffect(() => {
    axios
      .get(`/articles/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setArticle(res.data.article),
        setAuthorName(res.data.authorname),
      ])
      .catch((error) => console.log(error));
  }, [props]);

  return (
    <Container>
      <h2>{title}</h2>
      <p>{article}</p>
      <span className="author">{authorname}</span>
      <br />
      <Link to="/" type="submit" className="btn btn-primary">
        Back to Home
      </Link>
    </Container>
  );
};

export default Article;

const Container = style.div`
  margin: 2rem;
  padding: 2rem 20rem;

  .btn {
    margin-top: 1rem
  }
`;
