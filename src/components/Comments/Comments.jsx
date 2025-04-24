import { useState } from "react";
import "./Comments.css";
import CommentExpanded from "./Comment/CommentExpanded.jsx";
import CommentHided from "./Comment/CommentHided.jsx";

export default function Comments({ allComments, postId }) {
  const [extraPartOfBigCommentHided, setExtraPartOfBigCommentHided] = useState(
    {},
  );

  let getAllCommentsWithTheSameIdAsPost = allComments.filter(
    (comments) => comments["postId"] === postId,
  );

  return (
    <div>
      <p className="headerOfComments">Комментарии</p>
      <ul>
        {getAllCommentsWithTheSameIdAsPost.map((comments) => (
          <div key={comments.id} className="comments">
            {extraPartOfBigCommentHided[comments.id] ? (
              <CommentExpanded
                setExtraPartOfBigCommentHided={setExtraPartOfBigCommentHided}
                comment={comments}
                id={comments.id}
              />
            ) : (
              <CommentHided
                setExtraPartOfBigCommentHided={setExtraPartOfBigCommentHided}
                comment={comments}
                id={comments.id}
              />
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
