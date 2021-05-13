import React, { useState } from "react";
import style from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Articles = ({ posts }) => {
  const [article, setArticle] = useState([]);

  const deleteArticle = (id) => {
    axios.delete(`/articles/${id}`).then((res) => alert(res.data));
    setArticle(article.filter((elem) => elem._id !== id));
  };
  return (
    <Container>
      {posts.map((article, key) => (
        <div className="container" key={key}>
          <Link to={{ pathname: `/read-article/${article._id}` }}>
            <h3>{article.title}</h3>
          </Link>
          <p>{article.article}</p>
          <span className="author">{article.authorname}</span>
          <div className="row my-4">
            <div className="col-sm-1">
              <Link to={`/update/${article._id}`} className="btn btn-primary">
                Edit
              </Link>
            </div>
            <div className="col-sm-1">
              <button
                onClick={() => deleteArticle(article._id)}
                type="submit"
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </Container>
  );
};

export default Articles;

const Container = style.div`
  margin: 3rem auto;

  img {
    width: 10rem;
    display: block;
    margin: 0 auto;
  }
`;
