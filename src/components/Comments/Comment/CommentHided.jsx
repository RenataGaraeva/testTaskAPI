export default function CommentHided({
  comment,
  id,
  setExtraPartOfBigCommentHided,
}) {
  let changeStateOfHidedExtraPartOfBigCommentFromTrue = function (id) {
    setExtraPartOfBigCommentHided((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
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
}
