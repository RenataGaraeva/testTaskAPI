import { useState } from "react";
import "./Comments.css";

export default function Comments({ allComments, postId }) {
  const [commentHided, setCommentHided] = useState({});

  let getAllCommentsWithTheSameId = allComments.filter(
    (comments) => comments["postId"] === postId,
  );

  let changeFalse = function (id) {
    setCommentHided((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  let showAllComments = function (comment, id) {
    return (
      <>
        <li>{comment.body}</li>
        <input
          className="buttonForComments"
          type="button"
          value="Скрыть всё"
          onClick={() => changeFalse(id)}
        />
      </>
    );
  };

  let changeTrue = function (id) {
    setCommentHided((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  let hideAllComments = function (comment, id) {
    return (
      <>
        <li>{comment.body.slice(0, 25) + "..."}</li>
        <input
          className="buttonForComments"
          type="button"
          value="Показать всё"
          onClick={() => changeTrue(id)}
        />
      </>
    );
  };

  return (
    <div>
      <p className="headerOfComments">Комментарии</p>
      <ul>
        {getAllCommentsWithTheSameId.map((comments) => (
          <div key={comments.id} className="comments">
            {commentHided[comments.id]
              ? showAllComments(comments, comments.id)
              : hideAllComments(comments, comments.id)}
          </div>
        ))}
      </ul>
    </div>
  );
}
