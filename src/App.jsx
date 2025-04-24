import "./App.css";
import Post from "./components/Post/Post.jsx";
import Comments from "./components/Comments/Comments.jsx";
import Pagination from "./components/Pagination/Pagination.jsx";
import { getUserNames, getAllComments, getPosts } from "./API/API.js";
import { useState, useEffect } from "react";

function App() {
  const [allPosts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [allComments, setAllComments] = useState([]);
  const [id, setId] = useState(1);
  const [renderedPosts, setRenderedPosts] = useState([]);

  const [isLoading, setIsLoading] = useState({
    posts: true,
    users: true,
    comments: true,
  });

  const [error, setError] = useState({
    posts: null,
    users: null,
    comments: null,
  });

  useEffect(() => {
    Promise.all([
      getPosts(setPosts, setError, setIsLoading),
      getUserNames(setUsers, setError, setIsLoading),
      getAllComments(setAllComments, setError, setIsLoading),
    ]).then(console.log);
  }, []);

  if (isLoading.posts || isLoading.users || isLoading.comments) {
    return <div>Загружается...</div>;
  }

  if (error.posts) {
    return <div>Ошибка загрузки постов: {error.posts.message}</div>;
  }

  if (error.users) {
    return <div>Ошибка загрузки пользователей: {error.users.message}</div>;
  }

  if (error.comments) {
    return <div>Ошибка загрузки комментариев: {error.comments.message}</div>;
  }

  return (
    <div className="containerForAllPostsAndComments">
      {renderedPosts.map((post) => (
        <article className="containerForPostAndComments" key={post.id}>
          <Post post={post} users={users} />
          <Comments allComments={allComments} postId={post.id} />
        </article>
      ))}
      <Pagination
        setId={setId}
        id={id}
        allPosts={allPosts}
        setRenderedPosts={setRenderedPosts}
      />
    </div>
  );
}

export default App;
