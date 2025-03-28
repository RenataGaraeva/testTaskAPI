import "./App.css";
import Post from "./components/Post.jsx";
import { useState, useEffect } from "react";

function App() {

  const [allPosts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [errorForUsers, setErrorForUsers] = useState(null);
  const [loadingForUsers, setLoadingForUsers] = useState(true);

  let getPosts = async () => {

    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let posts = await response.json();
      if (Array.isArray(posts)) {
        setPosts(posts);
      } else {
        setError("некорректный формат ответа");
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  let getUserNames = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let listOfUsers = await response.json();
      if (Array.isArray(listOfUsers)) {
        setUsers(listOfUsers);
      } else {
        setErrorForUsers("некорректный формат ответ");
      }
    } catch (error) {
      setErrorForUsers(error);
    } finally {
      setLoadingForUsers(false);
    }
  };

  useEffect(() => {
    Promise.all([getPosts(), getUserNames()]).catch((error) => setError(error));
  }, []);

  if (errorForUsers) {
    return <div>Ошибка: {errorForUsers.message}</div>;
  }

  if (loadingForUsers) {
    return <div>Загружается</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  if (loading) {
    return <div>Загружается</div>;
  }

  return (
    <div className="containerForAllPostsAndComments">
      {allPosts.map((post) => (
        <article className="containerForPost" key={post.id}>
          <Post post={post} users={users} />
        </article>
      ))}
    </div>
  );
}

export default App;
