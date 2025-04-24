export default function CommentExpanded({
  comment,
  id,
  setExtraPartOfBigCommentHided,
}) {
  let changeStateOfHidedExtraPartOfBigCommentFromFalse = function (id) {
    setExtraPartOfBigCommentHided((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
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
}
