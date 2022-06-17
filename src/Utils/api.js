import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-alicia.herokuapp.com/api",
});

export const getArticles = (search) => {
  let path = "/articles";
  if (search) path += search;
  return articlesApi.get(path).then(({ data }) => {
    return data;
  });
};

export const getArticleById = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getTopics = () => {
  return articlesApi.get("/topics").then(({ data }) => {
    return data;
  });
};

export const patchLikes = (article_id, inc_votes) => {
  return articlesApi
    .patch(`/articles/${article_id}`, { inc_votes: inc_votes })
    .then(({ data }) => {
      return data;
    });
};

export const getComments = (article_id) => {
  return articlesApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
};

export const postComment = (article_id, body, username) => {
  const responseBody = { username, body };
  return articlesApi
    .post(`/articles/${article_id}/comments`, responseBody)
    .then(({ data }) => {
      return data;
    });
};

export const getUsers = () => {
  return articlesApi.get(`/users`).then(({ data }) => {
    return data;
  });
};

export const deleteComment = (comment_id) => {
  return articlesApi.delete(`/comments/${comment_id}`).then(() => {
    return "deleted!";
  });
};

export const getData = (search) => {
  return articlesApi.get(`${search}`).then(({ data }) => {
    return data;
  });
};
