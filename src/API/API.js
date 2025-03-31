export let getUserNames = async (setUsers, setError, setIsLoading) => {

  try {

    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let listOfUsers = await response.json();
    if (Array.isArray(listOfUsers)) {
      setUsers(listOfUsers);
    } else {
      setError((prev) => ({
        ...prev,
        users: "Некорректный тип данных по пользователям: это не массив",
      }));
    }

  } catch (error) {
    setError((prev) => ({
      ...prev,
      users: error,
    }));

  } finally {
    setIsLoading((prev) => ({
      ...prev,
      users: false,
    }));
  }

};

export let getAllComments = async (setAllComments, setError, setIsLoading) => {

  try {

    let response = await fetch("https://jsonplaceholder.typicode.com/comments");

    let listOfAllComments = await response.json();

    if (Array.isArray(listOfAllComments)) {
      setAllComments(listOfAllComments);
    } else {
      setError((prev) => ({
        ...prev,
        comments: "Некорректный тип данных по комментариям: это не массив",
      }));
    }

  } catch (error) {
    setError((prev) => ({
      ...prev,
      comments: error,
    }));

  } finally {
    setIsLoading((prev) => ({
      ...prev,
      comments: false,
    }));
  }

};

export let getPosts = async (setPosts, setError, setIsLoading) => {

  try {

    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();
    if (Array.isArray(posts)) {
      setPosts(posts);
    } else {
      setError((prev) => ({
        ...prev,
        posts: "Некорректный тип данных по постам: это не массив",
      }));
    }

  } catch (error) {
    setError((prev) => ({
      ...prev,
      posts: error,
    }));

  } finally {
    setIsLoading((prev) => ({
      ...prev,
      posts: false,
    }));
  }

};
