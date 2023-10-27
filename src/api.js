import axios from "axios";

const request = axios.create({
  baseURL: "https://nc-news-3tbb.onrender.com/api",
});

export const getArticleById = (article_id) => {
  request
    .get(`/articles/${article_id}`, { params: { article_id } })
    .then(({ data: { article } }) => {
      setArticle(article);
      return article;
    });
};

// WILL REFACTOR API CALLS INTO THIS FILE LATER
