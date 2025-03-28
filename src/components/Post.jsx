export default function Post({ post, users }) {

  let getUserName = function (userId) {
    let user = users.find((user) => user["id"] === userId);
    if (user) {
      return user["name"];
    } else {
      return "Аноним";
    }
  };

  return (
    <ul key={post["id"]} className="listOfPosts">
      <li className="post">
        <p className="userName">{getUserName(post["userId"])}</p>
        <p className="titleOfPost">{post["title"]}</p>
        <p className="bodyOfPost">{post["body"]}</p>
      </li>
    </ul>
  );
}
