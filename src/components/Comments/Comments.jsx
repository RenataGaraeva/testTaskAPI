import { useState } from "react";
import "./Comments.css";

export default function Comments({ allComments, postId }) {

  const [extraPartOfBigCommentHided, setExtraPartOfBigCommentHided] = useState({});

  let getAllCommentsWithTheSameIdAsPost = allComments.filter(
    (comments) => comments["postId"] === postId,
  );

  let changeStateOfHidedExtraPartOfBigCommentFromFalse = function (id) {
    setExtraPartOfBigCommentHided((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  let showExtraPartOfBigComment = function (comment, id) {
    return (
      <>
        <li>{comment.body}</li>
        <input
          className="buttonForComments"
          type="button"
          value="Скрыть всё"
          onClick={() => changeStateOfHidedExtraPartOfBigCommentFromFalse(id)}
        />
      </>
    );
  };

  let changeStateOfHidedExtraPartOfBigCommentFromTrue = function (id) {
    setExtraPartOfBigCommentHided((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  let hideExtraPartOfBigComment = function (comment, id) {
    return (
      <>
        <li>{comment.body.slice(0, 25) + "..."}</li>
        <input
          className="buttonForComments"
          type="button"
          value="Показать всё"
          onClick={() => changeStateOfHidedExtraPartOfBigCommentFromTrue(id)}
        />
      </>
    );
  };

  return (
    <div>
      <p className="headerOfComments">Комментарии</p>
      <ul>
        {getAllCommentsWithTheSameIdAsPost.map((comments) => (
          <div key={comments.id} className="comments">
            {extraPartOfBigCommentHided[comments.id]
              ? showExtraPartOfBigComment(comments, comments.id)
              : hideExtraPartOfBigComment(comments, comments.id)}
          </div>
        ))}
      </ul>
    </div>
  );
}